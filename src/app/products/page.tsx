"use client";

import Container from "../components/Container";
import ProductsBody from "../containers/ProductsBody";
import ProductsHeader from "../containers/ProductsHeader";

const Products = () => {
  return (
    <Container>
      <ProductsHeader />
      <ProductsBody />
    </Container>
  );
};

export default Products;
