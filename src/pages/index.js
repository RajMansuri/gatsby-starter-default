import * as React from "react"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/reactstrap/dist/reactstrap.min.js"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/Carousel.js";
import About from "../components/About.js";
import FeaturedItems from "../components/FeaturedItems.js";
import Testimonials from "../components/Testimonials.js";
import OurTeam from "../components/OurTeam.js";
import Articles from "../components/Articles.js";

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Carousel />
      <About />
      <FeaturedItems />
      <Testimonials />
      <OurTeam />
      <Articles />
    </Layout>
  )
}

