"use client";

import Container from "./components/Container";
import Hero from "./containers/Hero";
import Collaboration from "./containers/Collaboration";
import Progress from "./containers/Progress";
import Resources from "./containers/Resources";
import Community from "./containers/Community";
import Testimonials from "./containers/Testimonials";
import Support from "./containers/Support";
import Contact from "./containers/Contact";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <Collaboration />
        <Sponsors />
        <Progress />
        <Resources />
      </Container>
      <Community />
      <Container>
        <Testimonials />
        <Support />
      </Container>
    </>
  );
}
