import axios from "axios";
import React, { useEffect } from "react";
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
  // useEffect(() => {
  //   axios("https://api.apilayer.com/fixer/convert?to=INR&from=USD&amount=100", {
  //     method: "GET",
  //     headers: {
  //       apikey: "V2uXIGo1Z4K2ostph9bHPxcs0Ev83AH9",
  //     },
  //   })
  //     .then((res) => console.log(res?.data))
  //     .catch((err) => console.log(err?.response?.data));
  // }, []);

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
