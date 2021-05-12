import React from "react";
import { Container } from "react-bootstrap";
import BannerTwo from "../BannerTwo/BannerTwo";
import Business from "../Business/Business";
import BusinessOptimized from "../BusinessOptimized/BusinessOptimized";
import CarouselDiv from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomeBanner from "../HomeBanner/HomeBanner";
import Information from "../Information/Information";
import Partners from "../Partners/Pratners";
import Subscribe from "../Subscribe/Subscribe";
import UsedTools from "../UsedTools/UsedTools";

const developerBusiness = [
  {
    img: "https://assets.webveloper.com/ClockIcon.svg",
    title: "Save More Time",
    content: `With Webveloper's multifunctional and easy to use software, you can start and run your business instantly.`,
    alt: "clock",
  },
  {
    img: "https://assets.webveloper.com/CustomersIcon.svg",
    title: "Reach More Customers",
    content: `Unlike other website builders, Webveloper is search engine compatible and allows potential customers to find your business organically on Google.`,
    alt: "customers",
  },
  {
    img: "https://assets.webveloper.com/SaveMoneyIcon.svg",
    title: "Save More Money",
    content: `Because of Webveloper's containerized architecture we are able to provide our tools for 10x less than anyone else. And can pass those savings along to you.`,
    alt: "money",
  },
];

const Home = () => {
  return (
    <>
      <header>
        <Header />
        <HomeBanner />
      </header>
      <main>
        <section>
          <h2 className="text-center my-5">
            Webveloper's Business Operating System
          </h2>
          <Container className="row mx-auto">
            {developerBusiness.map((item, i) => {
              const { img, title, content, alt } = item;
              return (
                <Business img={img} title={title} alt={alt} content={content} />
              );
            })}
          </Container>
        </section>
        <BannerTwo />
        <BusinessOptimized />
        <Partners />
        <Information />
        <UsedTools />
        <CarouselDiv />
        <Subscribe />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
