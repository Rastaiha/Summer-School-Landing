import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Header from "./../components/header";
import NewsList from "./../components/news/newsList";
import WorkshopList from "./../components/workshops/workshopList";
import WhatTheFuzz from "../components/WhatThefuzz";
import Steps from "../components/steps";
import FAQ from "../components/FAQ/index";
import WhoAreWe from "../components/whoAreWe";
import Footer2 from "../components/Footer2";
import OurTeam from '../components/OurTeam';
import { baseURL } from "../configs/network/static";

const Landing = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${baseURL}/data.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
      })
  }, [])

  if (!data) {
    return <></>
  }

  return (
    <>
      <Navbar loginLink={data.loginLink} />
      <Header />
      <div
        style={{
          zIndex: -1,
          backgroundImage: `url(${process.env.PUBLIC_URL}background_lines2.png)`,
          backgroundColor: "#0F2E47",
          backgroundSize: "cover",
        }}
      >
        <NewsList news={data.news} />
        <WhatTheFuzz />
        <Steps />
        <WorkshopList workshops={data.workshops} />
        <FAQ questions={data.FAQ} />
        <WhoAreWe />
        <OurTeam members={data.members} />
      </div>
      <Footer2 />
    </>
  );
};

export default Landing;
