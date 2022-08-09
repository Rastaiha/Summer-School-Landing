import React from "react";
import Navbar from "../components/navbar";
import Header from "./../components/header";
import NewsList from "./../components/news/newsList";
import WhatTheFuzz from "../components/WhatThefuzz";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <NewsList />
      <WhatTheFuzz />
    </div>
  );
};

export default Landing;
