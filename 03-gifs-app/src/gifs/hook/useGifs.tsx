import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gifs.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query-action";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    // se puede hacer el string y Gif de otra forma
    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async (term: string) => {
        // if(gifsCache[term]) {
        //     setGifs(gifsCache[term])
        //     return;
        // }

        if(gifsCache.current[term]) {
            setGifs(gifsCache.current[term])
            return;
        }

        const gifs = await getGifsByQuery(term)
        setGifs(gifs)
        gifsCache.current[term] = gifs;
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

        gifsCache.current[query] = gifs;
        // console.log(gifsCache);
    };


    return {
        // Properties
        gifs,
        previousTerms,

        // Methods
        handleSerach,
        handleTermClicked,
    }
};