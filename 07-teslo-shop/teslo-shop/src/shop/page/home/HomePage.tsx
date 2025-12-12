import { CustpmPaginaion } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductGrid } from "@/shop/components/ProductGrid";
import { useProducts } from "@/shop/hooks/useProducts";

export const HomePage = () => {
  const { data } = useProducts();

  return (
    <>
      {/* Hero Section */}
      <CustomJumbotron title="Todos los Productos"/>

      <ProductGrid products={ data?.products || [] }/>

      {/* Pagination */}
      <CustpmPaginaion totalPages={ data?.products || 0 }/>
    </>
  )
};