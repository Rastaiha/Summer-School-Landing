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
import OurTeam from "../components/OurTeam";
import { Stack, Typography } from "@mui/material";

const Landing = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://kamva-minio-storage.darkube.app/rasta/summerschool-1403/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  if (!data) {
    return (
      <Stack
        sx={{ height: "100vh" }}
        direction='column'
        display={'flex'}
        justifyContent='center'>
        <Typography variant="h3" align="center">در حال بارگذاری...</Typography>
      </Stack>)
  }

  return (
    <>
      <Navbar loginLink={data.loginLink} />
      <Header />
      <div
        style={{
          zIndex: -1,
          backgroundImage: `url(https://kamva-minio-storage.darkube.app/rasta/summerschool-1403/01.png)`,
          backgroundColor: "#CFC7BC",
          backgroundSize: " 100% auto",
          backgroundRepeat: "repeat-y",
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
