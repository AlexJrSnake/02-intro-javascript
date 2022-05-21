import { heroes } from "../data/heroes";

// console.log(heroes);

const getHeroesById = (id) => {
    const found = heroes.find(element => element.id === id);
    return found;
}

// const resutl = getHeroesById(1)
// console.log(resutl);


const getHeroesByOwner = (owner) => {
    const found = heroes.filter(element => element.owner === owner);
    return found;
}


// const resutl2 = getHeroesByOwner('DC')
// console.log(resutl2);


export {
    getHeroesById,
    getHeroesByOwner
}
