"use client";

import Container from "@/components/container";
import AboutHeader from "@/containers/about-header";
import Journey from "@/containers/journey";
import Mission from "@/containers/missions";
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
