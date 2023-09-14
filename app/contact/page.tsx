'use client';

import Container from '@/components/container';
import Divider from '@/components/divider';
import ContactHeader from '@/containers/contact-header';
import FAQ from '@/__dir__/faq';

const page = () => {
  return (
    <Container>
      <ContactHeader />
      <Divider />
      <FAQ />
    </Container>
  );
};

export default page;
