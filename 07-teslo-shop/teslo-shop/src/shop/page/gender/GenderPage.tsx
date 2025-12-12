import { useParams } from "react-router";

import { CustpmPaginaion } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductGrid } from "@/shop/components/ProductGrid";
import { useProducts } from "@/shop/hooks/useProducts";

export const GenderPage = () => {
  const {gender} =  useParams();
  const { data } = useProducts();

  const genderLabel = 
    gender === 'men' ? 'Hombres' : gender === 'women' ? 'Mujeres' : 'Niños';

  return (
    <>
      {/* Hero Section */}
      <CustomJumbotron title={`Productos para ${genderLabel}`}/>

      <ProductGrid products={ data?.products || [] }/>

      {/* Pagination */}
      <CustpmPaginaion totalPages={5}/>
    </>
  )
};