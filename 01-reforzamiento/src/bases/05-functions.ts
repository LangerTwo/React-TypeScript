function greet( name: string ): string {
    return `Hola ${ name }`
};

const greet2 = (name: string): string => {
    return `Hola ${ name }`
};

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log({ message, message2 });


function getUser() {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
};

const getUser2 = () => {
    return {
        uid: 'ABC248',
        username: 'El_Papi2004'
    }
}

const user = getUser();
const user2 = getUser2();

console.log({ user, user2 });