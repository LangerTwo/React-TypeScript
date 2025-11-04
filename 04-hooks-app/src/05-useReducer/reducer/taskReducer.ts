import * as z from "zod";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction = 
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number };

const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
});

const TaskStateScheme = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
});

export const getTaskInitialState = ():TaskState => {
    const localStorageState = localStorage.getItem('task-state');

    if( !localStorageState ) {
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0,
        }
    }

    // Validar mediante Zod
    const result = TaskStateScheme.safeParse(JSON.parse(localStorageState))

    if (result.error) {
        console.log(result.error);
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0,
        }
    };

    //! Ciudado, porque el objeto puede haber sido manipulado
    return JSON.parse(localStorageState) 
}

export const taskReducer = (state:TaskState, action:TaskAction):TaskState => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };

            // !No lo debe de hacer
            // state.todos.push(newTodo)

            return {
                ...state,
                todos: [ ...state.todos, newTodo],
                length: state.length + 1,
                pending: state.pending + 1,
            }
        }

        case 'TOGGLE_TODO':
            const updatedTodos = state.todos.map((todo) => {
                if(todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos,
                completed: updatedTodos.filter(todo => todo.completed).length,
                pending: updatedTodos.filter(todo => !todo.completed).length,
            };

        case 'DELETE_TODO':
            const currentTodo = state.todos.filter((todo) => todo.id !== action.payload);

            return {
                ...state,
                todos: currentTodo,
                length: currentTodo.length,
                completed: currentTodo.filter(todo => todo.completed).length,
                pending: currentTodo.filter(todo => !todo.completed).length,
            };

        default:
            return state;
    }


    return state;

}