"use client";

import Container from "../components/Container";
import Divider from "../components/Divider";
import EventsHeader from "../../containers/events-header";
import MainEvent from "../../containers/main-event";
import Support from "../../containers/supports";
import UpcomingEvents from "../../containers/upcoming-events";

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
