// Funciones

const saludar = function(nombre) {
    return `Hola ${nombre}`
  }
  
  
  const saludar2 = (nombre) => {
    return `Hola ${nombre}`
  }
  
  
  const saludar3 = (nombre) => `Hola ${nombre}`;
  
  
  console.log( saludar("Goku") );
  console.log( saludar2("Alex") );
  console.log( saludar3("God") );
  
  
  
  const getUser = () => {
    return {
      uid:"ACX215",
      username:"Ek_sadsadsadasd"
    }
  }
  
  console.log( getUser() );
  
  
  const getUserActive = (nombre) => 
    ({...{
      uid:"ACX215",
      username: nombre
    }})
    
  
  const usuarioActivo = getUserActive("Fernando");
  console.log(usuarioActivo);