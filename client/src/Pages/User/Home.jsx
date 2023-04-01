import React from "react";
import { Banner } from "../../components/User/Banner";
import { Footer } from "../../Layouts/UserLayouts/Footer";
import { Header } from "../../Layouts/UserLayouts/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  );
};
