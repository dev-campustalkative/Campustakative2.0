"use client";

import Container from "@/components/container";
import ProductsBody from "@/containers/products-body";
import ProductsHeader from "@/containers/products-header";
import Support from "@/containers/support";

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
