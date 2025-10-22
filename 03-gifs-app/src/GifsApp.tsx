import { GifsList } from "./gifs/components/GifsList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  return (
    <>
        {/* Header */}
        <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>

        {/* Search */}
        <SearchBar placeholder="Buscar gifs..."/>

        {/* Búsquedas Previas */}
        <PreviousSearches searches={['Elden Ring', 'BloodBorne']}/>

        {/* Gifs */}
        <GifsList gifs={mockGifs}/>
    </>
  )
}
