import { useState } from "react"
import {Heart,} from "lucide-react"
//
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumboTron } from "@/components/custom/CustomJumboTron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustpmPaginaion } from "@/components/custom/CustpmPaginaion"
import { CustomBreadcrum } from "@/components/custom/CustomBreadcrum"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
//
import { useQuery } from '@tanstack/react-query';

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'favorites' | 'heroes' | 'villains'
  >('all');

  const {data: heroesResponse} = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })

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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2" onClick={() => setActiveTab('favorites')}>
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <h1>Todos los Personajes</h1>
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
        <CustpmPaginaion totalPages={8}/>
      </>
    </>
  )
}
