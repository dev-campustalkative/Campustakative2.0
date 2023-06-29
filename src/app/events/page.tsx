"use client";

import Container from "../components/Container";
import Divider from "../components/Divider";
import EventsHeader from "../containers/EventsHeader";
import MainEvent from "../containers/MainEvent";
import Support from "../containers/Support";

const Events = () => {
  return (
    <Container>
      <EventsHeader />
      <MainEvent />
      <Divider />
      <Support />
    </Container>
  );
};

export default Events;
