"use client";

import Container from "@/components/Container";
import Divider from "@/components/Divider";
import ContactHeader from "@/containers/contact-header";
import FAQ from "@/containers/FAQ";

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
