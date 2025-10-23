import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
// import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hook/useGifs"

export const GifsApp = () => {
    
    const { gifs, handleSerach, previousTerms, handleTermClicked } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>

            {/* Search */}
            <SearchBar placeholder="Buscar gifs..." onQuery={handleSerach}/>

            {/* Búsquedas Previas */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

            {/* Gifs */}
            <GifsList gifs={gifs}/>
        </>
    )
}
