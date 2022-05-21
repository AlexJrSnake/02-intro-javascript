const getImagen = async () => {

    try {
        const apikey = 'c98ZVkNlzlYPyrKdprtkejHhgSR3pqox'
        const urlApi = `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`
        console.log(urlApi);

        const { data } = await fetch(urlApi).then(resp => resp.json())
        const { url } = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
        return true
    } catch (error) {
        console.error(error);
    }
}

getImagen()


