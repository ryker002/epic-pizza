import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Row, Col,} from 'reactstrap'
import { useStaticQuery, graphql } from "gatsby"
import PartiesForm from "../components/partiesform";
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
      allContentfulEastCoastPizzaHomeContent {
        edges {
          node {
            eastCoastBusinessName
            eastCoastBusinessHours
            eastCoastBusinessAddress
            eastCoastBusinessPhoneNumber
          }
        }
      }

      allContentfulEastCoastPartyPage {
        edges {
          node {
            eastCoastPartyPageSectionTitle
            eastCoastPartyPageSubtitle
            eastCoastPartyPageParagraph {
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
        <Col xs="12" md="6" className="d-flex flex-column align-items-center justify-content-center pl-5 pr-5">
        
        {data.allContentfulEastCoastPartyPage.edges.map(edge => (
            <h1 className="pb-2 pt-5 text-uppercase">{edge.node.eastCoastPartyPageSectionTitle}</h1>
          ))}

          {data.allContentfulEastCoastPartyPage.edges.map(edge => (
            documentToReactComponents(edge.node.eastCoastPartyPageParagraph.json, options)
        ))}
        
        </Col>


        <Col xs="12" md="4" className="d-flex flex-column align-items-center justify-content-center pl-5 pr-5">
                <p>For immediate assistant call us at </p>
        {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
                <span>{edge.node.eastCoastBusinessPhoneNumber}</span>
                ))}

                <div>
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <p>{edge.node.eastCoastBusinessAddress}</p>
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
)}
export default Parties
