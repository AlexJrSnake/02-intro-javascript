import { getHeroesById } from "./08-in-exp";

// const promesa = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             console.log("2 Segundos");
//             let heroe = getHeroesById(1)
//             resolve(heroe);
//         }, 2000)
//     }
// );

// promesa.then((datos) => {
//     console.log("Then");
//     console.log(datos);
// }).catch(
//     (err) => {
//         console.warn(err);
//     }
// )

// promesa.finally(() => {
//     console.log("finally");
// })


const getHeroeByIdAsAsyn = async (id) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                console.log("2 Segundos");
                let heroe = getHeroesById(id)
                if (heroe === undefined) {
                    reject("No se encontro el heroe")
                }
                resolve(heroe);
            }, 2000)
        }
    );
}

getHeroeByIdAsAsyn(3).then(console.log).catch(console.warn)
