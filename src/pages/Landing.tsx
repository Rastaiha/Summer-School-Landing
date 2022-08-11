import React from "react";
import Navbar from "../components/navbar";
import Header from "./../components/header";
import NewsList from "./../components/news/newsList";
import WorkshopList from "./../components/workshops/workshopList";
import WhatTheFuzz from "../components/WhatThefuzz";
import Steps from "../components/steps";
import FAQ from "../components/FAQ/index";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <NewsList />
      <WhatTheFuzz />
      <Steps />
      <WorkshopList />
      <FAQ />
    </div>
  );
};

export default Landing;
