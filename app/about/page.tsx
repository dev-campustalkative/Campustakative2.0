"use client";

import Container from "@/components/container";
import AboutHeader from "@/containers/about-header";
import Journey from "@/containers/Journey";
import Mission from "@/containers/Mission";
import Team from "@/containers/Team";

const About = () => {
  return (
    <Container>
      <AboutHeader />
      <Journey />
      <Mission />
      <Team />
    </Container>
  );
};

export default About;
