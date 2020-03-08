import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import PartiesForm from "../components/partiesform"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Parties = () => {
  const Bold = ({ children }) => <b>{children}</b>
  const Text = ({ children }) => <p className="align-center">{children}</p>

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }

  const data = useStaticQuery(graphql`
    {
      allContentfulMainContent {
        edges {
          node {
            businessName
            businessPhoneNumber
            businessHours
            businessAddress
            partyPageTitle
            partyPageLead
            partyPageContent {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Parties & Events" className="hero" />
      <section id="party-page" className="halftone">
        <Container>
          <Row className="">
            <Col
              xs="12"
              md="6"
              className="d-flex flex-column align-items-center justify-content-center pl-5 pr-5"
            >
              {data.allContentfulMainContent.edges.map(edge => (
                <h1 className="pb-2 pt-5 text-uppercase">
                  {edge.node.partyPageTitle}
                </h1>
              ))}

              {data.allContentfulMainContent.edges.map(edge =>
                documentToReactComponents(
                  edge.node.partyPageContent.json,
                  options
                )
              )}
            </Col>

            <Col
              xs="12"
              md="4"
              className="d-flex flex-column align-items-center justify-content-center pl-5 pr-5"
            >
              <p>For immediate assistant call us at </p>
              {data.allContentfulMainContent.edges.map(edge => (
                <span>{edge.node.businessPhoneNumber}</span>
              ))}

              <div>
                {data.allContentfulMainContent.edges.map(edge => (
                  <p>{edge.node.businessAddress}</p>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="halftone pt-5" id="contactform">
        <Container>
          <PartiesForm />
        </Container>
      </section>
    </Layout>
  )
}
export default Parties
