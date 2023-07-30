"use client";

import Container from "@/components/Container";
import ProductsBody from "@/containers/products-body";
import ProductsHeader from "@/containers/ProductsHeader";
import Support from "@/containers/Support";

const Products = () => {
  return (
    <Container>
      <ProductsHeader />
      <ProductsBody />
      <Support />
    </Container>
  );
};

export default Products;
