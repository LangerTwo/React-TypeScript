import { heroes, Owner, type Hero } from "../data/heroes.data";

const getHeroeById = (id: number): Hero|undefined  => {
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    });

    // if (!hero) throw new Error(`Hero with id ${id} not found`);

    return hero;
};

console.log(getHeroeById(1));


export const getHeroesByOwner = (owner: Owner) => {
    const heroOwner = heroes.filter( (hero) => hero.owner === owner);
    // const heroOwner = heroes.find( (hero) => {
    //     return hero.owner === owner;
    // });

    return heroOwner;
};