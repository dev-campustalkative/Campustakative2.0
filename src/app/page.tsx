"use client";

import Container from "./components/Container";
import Button from "./components/Button";
import { AiOutlineArrowDown } from "react-icons/ai";
import ImageSlug from "./components/ImageSlug";
import Hero from "./containers/Hero";
import Collaboration from "./containers/Collaboration";
import Progress from "./containers/Progress";
import Resources from "./containers/Resources";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Collaboration />
      <Progress />
      <Resources />
    </Container>
  );
}
