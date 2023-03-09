import React from "react";
import { Landing, NextMeetup, PageLayout } from "../components";

const Home: React.FC = () => (
  <PageLayout>
    <Landing />
    <NextMeetup />
  </PageLayout>
);

export default Home;
