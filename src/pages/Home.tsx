import React from "react";
import {
  Landing,
  NextMeetup,
  PageLayout,
  Sponsors,
  Footer
} from "../components";
import { PreviousMeetup } from "../components/PreviousMeetups";
import { Halvening } from "../components/Halvening";

const Home: React.FC = () => (
  <PageLayout>
    <Landing />
    <NextMeetup />
    <Halvening />
    <PreviousMeetup />
    <Sponsors />
    <Footer />
  </PageLayout>
);

export default Home;
