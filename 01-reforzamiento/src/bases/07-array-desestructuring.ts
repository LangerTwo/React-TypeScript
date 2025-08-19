const charactersNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = charactersNames;

console.log({ trunks });

const returnArrayFn = () =>{
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnArrayFn();

console.log(letters, numbers);