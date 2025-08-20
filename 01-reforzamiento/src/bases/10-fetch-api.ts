import type { Giphyrandomresponse, Gif } from "../data/giphy.response";


const API_KEY = 'eJgXifTXOvWTWr3V5n8vDNBuBb3L5gCx';

const myRequest = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
};

myRequest
    .then((response) => response.json())
    .then(({ data }: Giphyrandomresponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
    .catch((err) => {
        console.error('Error:', err);
    })