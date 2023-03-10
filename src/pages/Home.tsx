import React from "react";
import { Landing, NextMeetup, PageLayout, Sponsors } from "../components";

const Home: React.FC = () => (
  <PageLayout>
    <Landing />
    <NextMeetup />
    <Sponsors />
  </PageLayout>
);

export default Home;
