const charactersNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = charactersNames;

console.log({ trunks });

const returnArrayFn = () =>{
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnArrayFn();

console.log(letters, numbers);

// Tarea

const useState = (value: string) => {
    return [
        value,
        (newValue: string) => {
            console.log(`State changed: ${newValue}`);
        }
    ] as const;
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta')