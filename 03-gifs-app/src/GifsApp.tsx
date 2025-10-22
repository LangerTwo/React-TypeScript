import { useState } from "react"
import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
    
    const [previousTerms, setPreviousTerms] = useState(['dark souls', 'bloodborne', 'elden ring', 'sekiro']);

    const handleTermClicked = (term: string) => {
        console.log(`Term clicked: ${term}`);
    };

    const handleSerach = (query: string) => {
        console.log(`Search term: ${query}`);
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
