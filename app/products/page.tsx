'use client';

import ComingSoonBanner from '@/components/coming-soon-banner';
import Container from '@/components/container';
import ProductsBody from '@/containers/products-body';
import ProductsHeader from '@/containers/products-header';
import Support from '@/containers/support';

const Products = () => {
  return (
    <>
      <ComingSoonBanner>
        We are launchong our product soon watch out
      </ComingSoonBanner>
      <Container>
        <ProductsHeader />
        <ProductsBody />
        <Support />
      </Container>
    </>
  );
};

export default Products;
