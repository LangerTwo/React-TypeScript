import { useState } from "react"
import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query-action"

export const GifsApp = () => {
    
    const [previousTerms, setPreviousTerms] = useState(['dark souls', 'bloodborne', 'elden ring', 'sekiro']);

    const handleTermClicked = (term: string) => {
        console.log(`${term}`);
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
        console.log(gifs);
    };

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>

            {/* Search */}
            <SearchBar placeholder="Buscar gifs..." onQuery={handleSerach}/>

            {/* Búsquedas Previas */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

            {/* Gifs */}
            <GifsList gifs={mockGifs}/>
        </>
    )
}
