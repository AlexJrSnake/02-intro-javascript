const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
      ciudad:"New York",
      zip: 545551515,
      lat: 1235.151516,
      lng: 1215151331
  
    }
  }
  
  const persona2 = {...persona}
  persona2.nombre = "Alex"
  
  console.log( persona  );
  console.log( persona2 );