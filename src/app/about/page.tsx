"use client";

import Container from "../components/Container";
import AboutHeader from "../containers/AboutHeader";
import Journey from "../containers/Journey";
import Mission from "../containers/Mission";
import Team from "../containers/Team";

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
