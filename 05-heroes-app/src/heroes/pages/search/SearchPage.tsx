import { CustomJumboTron } from "@/components/custom/CustomJumboTron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrum } from "@/components/custom/CustomBreadcrum";

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumboTron 
        title="Búsqueda de SuperHéores" 
        description="Descubre, explora y administra héroes y villanos"
      />

      <CustomBreadcrum currentPage="Buscador de Heroes"
        breadcrumbs={[
          {label: 'Home1', to: '/'},
          {label: 'Home2', to: '/'},
          {label: 'Home3', to: '/'},
        ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControls />
    </>
  )
}

export default SearchPage;