const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
};

const { name: IronmanName, age, key } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({IronmanName, age, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string; // Optional property
};

const useContext = ({ key, name, age, rank = 'sin rango' }: Hero) => {

    return {
        keyName: key,
        user: {
            name,
            age
        },
        rank: rank
    };
}

const { 
    rank, 
    keyName, 
    user 
} = useContext(person);

const { name } = user;

// const context = useContext(person);
console.log({ rank, keyName, name });