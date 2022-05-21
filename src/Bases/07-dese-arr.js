const personajes = ['YO', 'TU', 'EL']

const [, , p3] = personajes
console.log(p3);

const getArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = getArreglo();
console.log(letras, numeros);


const crateArrayUseState = (valor) => {
    return [valor, () => { console.log("Hola mundo"); }]
}

const [nombre, setNombre] = crateArrayUseState('Goku');
console.log(nombre);
setNombre();
