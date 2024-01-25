import React from "react";
import {
  Landing,
  NextMeetup,
  PageLayout,
  Sponsors,
  Footer,
} from "../components";

const Home: React.FC = () => (
  <PageLayout>
    <Landing />
    <NextMeetup />
    <Sponsors />
    <Footer />
  </PageLayout>
);

export default Home;
