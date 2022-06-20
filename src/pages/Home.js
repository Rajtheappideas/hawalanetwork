import axios from "axios";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import {
  Faq,
  Footer,
  Herosection,
  HowItsWork,
  Navbar,
  WhyChooseUs,
} from "../components/index";
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { userData } = useUserContext();

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Toaster />
      <Navbar />
      <Herosection />
      <WhyChooseUs />
      <HowItsWork />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
