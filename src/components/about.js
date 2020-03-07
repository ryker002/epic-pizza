import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

const About = () => {
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
            eastCoastAboutSectionTitle
            eastCoastAboutParagraph {
              json
            }
            eastCoastAboutImageCompanion {
              fluid(maxWidth: 1500) {
                ...GatsbyContentfulFluid_withWebp
              }
              description
            }
          }
        }
      }
    }
  `)

  // https://www.contentful.com/developers/docs/tutorials/general/rich-text-and-gatsby/

  return (
    <section id="aboutus" className="halftone">
      <Container fluid>
        <Row className="">
          <Col
            xs="12"
            md="4"
            className="d-flex flex-column align-items-center justify-content-center pl-5 pr-5 pb-5"
          >
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <h1 className="pb-2 pt-5 text-uppercase">
                {edge.node.eastCoastAboutSectionTitle}
              </h1>
            ))}
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge =>
              documentToReactComponents(
                edge.node.eastCoastAboutParagraph.json,
                options
              )
            )}
          </Col>

          <Col xs="12" md="8" className="img-fluid">
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <Img
                fluid={edge.node.eastCoastAboutImageCompanion.fluid}
                alt={edge.node.eastCoastAboutImageCompanion.description}
                className="img-fluid"
              />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
