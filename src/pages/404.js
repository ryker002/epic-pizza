import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Row, Col,} from 'reactstrap'
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section id="four0four" className="halftone pt-5 pb-5">
      <Container>
        <Row>
          <Col xs="12" className="d-flex flex-column align-items-center justify-content-center pl-5 pr-5">
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link to="/">Return Home</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default NotFoundPage
