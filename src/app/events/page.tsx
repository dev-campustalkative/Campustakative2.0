"use client";

import Container from "../components/Container";
import Divider from "../components/Divider";
import EventsHeader from "../containers/EventsHeader";
import MainEvent from "../containers/MainEvent";
import Support from "../containers/Support";
import UpcomingEvents from "../containers/UpcomingEvents";

const Events = () => {
  return (
    <Container>
      <EventsHeader />
      <MainEvent />
      <Divider />
      <UpcomingEvents />
      <Support />
    </Container>
  );
};

export default Events;
