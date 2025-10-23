import { giphyApi } from "../api/giphy.api";
import type { GiphyResponse } from "../interfaces/giphy.response"
import type { Gif } from "../interfaces/gifs.interface";

export const getGifsByQuery = async ( query:string ): Promise<Gif[]> => {

    const response = await giphyApi<GiphyResponse>(`https://api.giphy.com/v1/gifs/search`, {
        params: {
            q: query,
            limit: 10,            
        }
    });

    // console.log(response.data);

    return response.data.data.map( (gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }) );
    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=eJgXifTXOvWTWr3V5n8vDNBuBb3L5gCx&q=${query}&limit=10&lang=es`)
}