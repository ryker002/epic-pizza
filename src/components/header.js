import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulMainContent {
        edges {
          node {
            businessLogo {
              description
              fixed(width: 468, height: 300) {
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
            headerBackground {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const background =
    data.allContentfulMainContent.edges[0].node.headerBackground.fluid

  return (
    // <header>
    <BackgroundImage tag={"header"} fluid={background}>
      <Container style={{ minHeight: "80vh" }}>
        <Row className="header_image d-flex justify-content-center">
          <Col
            xs="12"
            className="p-5 d-flex justify-content-center align-items-center"
          >
            {data.allContentfulMainContent.edges.map(edge => (
              <Img
                fixed={edge.node.businessLogo.fixed}
                alt={edge.node.businessLogo.description}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
    // </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
