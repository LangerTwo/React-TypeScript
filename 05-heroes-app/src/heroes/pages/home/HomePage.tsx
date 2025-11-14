import {Heart,} from "lucide-react"
//
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumboTron } from "@/components/custom/CustomJumboTron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustpmPaginaion } from "@/components/custom/CustpmPaginaion"
import { CustomBreadcrum } from "@/components/custom/CustomBreadcrum"

import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import { useHomePage } from "@/heroes/hooks/useHomePage"

export const HomePage = () => {
  const {setSearchParams, page, limit, selectedTab} = useHomePage()

  const {data: heroesResponse} = usePaginatedHero(+page, +limit)

  const { data: summary } = useHeroSummary();

  return (
    <>
      <>
        {/* Header */}
        <CustomJumboTron 
          title="Universo de SuperHéores" 
          description="Descubre, explora y administra héroes y villanos"
        />

        {/* Breadcrum */}
        <CustomBreadcrum currentPage="Super Héroes"/>

        {/* Stats Dashboard */}
        <HeroStats /> 

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger 
              value="all" 
              onClick={() => 
              setSearchParams((prev) => {
                prev.set('tab', 'all');
                return prev;
              })}
            >
              All Characters ({summary?.totalHeroes})
            </TabsTrigger>

            <TabsTrigger 
              value="favorites" 
              className="flex items-center gap-2" 
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'favorites');
                return prev;
              })}
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger 
              value="heroes" 
              onClick={() => 
              setSearchParams((prev) => {
                prev.set('tab', 'heroes');
                return prev;
              })}
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>

            <TabsTrigger 
              value="villains" 
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'villains');
                return prev;
              })}
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []}/>
          </TabsContent>

          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            <h1>Favoritos</h1>
            <HeroGrid heroes={[]}/>
          </TabsContent>

          <TabsContent value="heroes">
            {/* Mostrar todos los personajes heroes*/}
            <h1>Heroes</h1>
            <HeroGrid heroes={[]}/>
          </TabsContent>

          <TabsContent value="villains">
            {/* Mostrar todos los personajes villanos */}
            <h1>Villanos</h1>
            <HeroGrid heroes={[]}/>
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustpmPaginaion totalPages={heroesResponse?.pages ?? 1}/>
      </>
    </>
  )
}
