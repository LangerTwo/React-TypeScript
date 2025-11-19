import { useParams } from "react-router";

import { CustpmPaginaion } from "@/components/custom/CustpmPagination";
import { products } from "@/mocks/products.mock";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductGrid } from "@/shop/components/ProductGrid";

export const GenderPage = () => {
  const {gender} =  useParams();

  const genderLabel = 
    gender === 'men' ? 'Hombres' : gender === 'women' ? 'Mujeres' : 'Niños';

  return (
    <>
      {/* Hero Section */}
      <CustomJumbotron title={`Productos para ${genderLabel}`}/>

      <ProductGrid products={products}/>

      {/* Pagination */}
      <CustpmPaginaion totalPages={5}/>
    </>
  )
};