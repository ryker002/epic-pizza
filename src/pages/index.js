import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactInfo from "../components/contactinfo";
import About from "../components/about";
import Beers from "../components/beers";
import Party from "../components/parties";
import Pizza from "../components/pizza";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" className="hero" />
      <ContactInfo />
      <About />
      <Beers />
      <Party />
      <Pizza />
  </Layout>
)
export default IndexPage
