// Desestructuracion
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'soldado'
}

// console.log(nombre, edad, clave);

const getPersona = ({ nombre, edad, clave, rango = 'Capitan' }) => {
    // const { nombre, edad, clave } = persona;
    return {
        nombreClave: nombre,
        edad,
        latlng: {
            lat: 4231.55858,
            lng: 1554.658415
        }
    }

}

const { nombreClave, edad, latlng: { lat, lng } } = getPersona(persona)

console.log(nombreClave, edad, lat, lng);
