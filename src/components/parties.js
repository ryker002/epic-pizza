import React from "react"
import { Container, Row, Col } from "reactstrap"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Party = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulEastCoastPizzaHomeContent {
        edges {
          node {
            eastCoastPartiesSectionTitle
            eastCoastPartiesParagraph {
              json
            }
            eastCoastPartiesLinkTitle
            eastCoastPartiesCompanionImage {
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

  return (
    <section id="party" className="halftone">
      <Container fluid>
        <Row className="">
          <Col xs="12" md="8" className="img-fluid">
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <Img
                fluid={edge.node.eastCoastPartiesCompanionImage.fluid}
                alt={edge.node.eastCoastPartiesCompanionImage.description}
                className="img-fluid"
              />
            ))}
          </Col>

          <Col
            xs="12"
            md="4"
            className="d-flex flex-column align-items-center justify-content-center pl-5 pr-5"
          >
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <h1 className="pb-2 pt-5">
                {edge.node.eastCoastPartiesSectionTitle}
              </h1>
            ))}
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge =>
              documentToReactComponents(
                edge.node.eastCoastPartiesParagraph.json,
                options
              )
            )}

            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <Link
                className="btn align-items-center d-flex justify-content-center"
                to="/parties"
              >
                {edge.node.eastCoastPartiesLinkTitle}
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Party
