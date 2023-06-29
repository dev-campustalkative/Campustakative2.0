"use client";

import Container from "../components/Container";
import AboutHeader from "../containers/AboutHeader";
import Journey from "../containers/Journey";
import Mission from "../containers/Mission";

const About = () => {
  return (
    <Container>
      <AboutHeader />
      <Journey />
      <Mission />
    </Container>
  );
};

export default About;
