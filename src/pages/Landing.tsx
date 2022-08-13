import React from "react";
import Navbar from "../components/navbar";
import Header from "./../components/header";
import NewsList from "./../components/news/newsList";
import WorkshopList from "./../components/workshops/workshopList";
import WhatTheFuzz from "../components/WhatThefuzz";
import Steps from "../components/steps";
import FAQ from "../components/FAQ/index";
import WhoAreWe from "../components/whoAreWe";
import Footer from "../components/Footer";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div
        style={{
          zIndex: -1,
          backgroundImage: `url(${process.env.PUBLIC_URL}background_lines.png)`,
          backgroundColor: "#0F2E47",
          backgroundSize: "cover !important",
        }}
      >
        <NewsList />
        <WhatTheFuzz />
        <Steps />
      </div>
      <div
        style={{
          zIndex: -1,
          backgroundImage: `url(${process.env.PUBLIC_URL}background_lines2.png)`,
          backgroundColor: "#0F2E47",
          backgroundSize: "cover !important",
        }}
      >
        <WorkshopList />
        <FAQ />
        <WhoAreWe />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
