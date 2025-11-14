import { useMemo } from "react"
import { useSearchParams } from "react-router"
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
import { getSummaryAction } from "@/heroes/actions/get-summary.actions"

export const HomePage = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '6';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const {data: heroesResponse} = useQuery({
    queryKey: ['heroes', {page, limit}],
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })

  const { data: summary } = useQuery({
    queryKey: ['summary-information'],
    queryFn: getSummaryAction,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

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
