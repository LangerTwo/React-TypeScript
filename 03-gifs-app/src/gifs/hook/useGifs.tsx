import { useState } from "react";
import type { Gif } from "../interfaces/gifs.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query-action";

const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = async (term: string) => {
        if(gifsCache[term]) {
            setGifs(gifsCache[term])
            return;
        }

        const gifs = await getGifsByQuery(term)
        setGifs(gifs)
        // console.log(`${term}`);
    };

    const handleSerach = async (query: string) => {
        // console.log(`Search term: ${query}`);
        query = query.trim().toLowerCase();
        
        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        const currentTerms = previousTerms.slice(0, 6);
        currentTerms.unshift(query);

        setPreviousTerms( [query, ...previousTerms.splice(0, 8)] );

        const gifs = await getGifsByQuery( query );
        // console.log(gifs);
        setGifs( gifs );

        gifsCache[query] = gifs;
        console.log(gifsCache);
    };


    return {
        // Properties
        gifs,

        // Methods
        handleSerach,
        previousTerms,
        handleTermClicked,
    }
};