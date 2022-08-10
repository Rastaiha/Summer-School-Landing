import React from "react";
import Navbar from "../components/navbar";
import Header from "./../components/header";
import NewsList from "./../components/news/newsList";
import WorkshopList from "./../components/workshops/workshopList";
import WhatTheFuzz from "../components/WhatThefuzz";
import Steps from "../components/steps";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <NewsList />
      <WhatTheFuzz />
      <Steps />
      <WorkshopList />
    </div>
  );
};

export default Landing;
