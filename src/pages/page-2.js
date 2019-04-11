import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <Carousel />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
