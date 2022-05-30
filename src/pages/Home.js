import React from "react";
import { Helmet } from "react-helmet";
import {
  Faq,
  Footer,
  Herosection,
  HowItsWork,
  Navbar,
  WhyChooseUs,
} from "../components/index";

const Home = () => {
  return (
    <div className="xl:p-5">
      <Helmet>
        <title>Home</title>
      </Helmet>
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
