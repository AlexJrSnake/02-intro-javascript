const apikey = 'c98ZVkNlzlYPyrKdprtkejHhgSR3pqox'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`
console.log(url);

const peticion = fetch(url);
peticion.then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)

    })
    .catch(console.warn)
