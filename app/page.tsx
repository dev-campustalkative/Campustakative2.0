"use client";

import Container from "@/components/container";
import Hero from "@/containers/hero";
import Collaboration from "@/containers/collaboration";
import Progress from "@/containers/progress";
import Resources from "@/containers/Resources";
import Community from "@/containers/community";
import Testimonials from "@/containers/testimonials";
import Support from "@/containers/support";
import Contact from "../containers/Contact";
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
