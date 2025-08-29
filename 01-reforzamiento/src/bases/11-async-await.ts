import type { Giphyrandomresponse, Gif } from "../data/giphy.response";


const API_KEY = 'eJgXifTXOvWTWr3V5n8vDNBuBb3L5gCx';

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
};

const getRandomGifUrl = async ():Promise<string> => {
    const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

    const { data }: Giphyrandomresponse = await response.json(); 

    return data.images.original.url;
}

getRandomGifUrl().then(createImageInsideDOM);