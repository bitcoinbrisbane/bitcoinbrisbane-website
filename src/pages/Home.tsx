import React from "react";
import {
  Landing,
  NextMeetup,
  PageLayout,
  Sponsors,
  Footer,
} from "../components";
import { PreviousMeetup } from "../components/PreviousMeetups";

const Home: React.FC = () => (
  <PageLayout>
    <Landing />
    <NextMeetup />
    <PreviousMeetup />
    <Sponsors />
    <Footer />
  </PageLayout>
);

export default Home;
