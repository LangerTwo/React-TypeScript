const usuario = {
  name: 'Leo',
  lastName: 'Nava',
  age: 30,
  address: {
    postalCode: '12345',
    city: 'Tensura',
  }
}

// const usuario2 = {...usuario};
const usuario2 = structuredClone(usuario);

usuario2.name = 'Leonardo';
usuario2.lastName = "Stark";
usuario2.age = 31;
usuario2.address.city = 'New Tensura';

console.log(usuario, usuario2)