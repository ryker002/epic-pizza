import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulMainContent {
        edges {
          node {
            businessName
            businessHours
            businessAddress
            businessPhoneNumber
            businessLogo {
              description
              fixed(width: 468, height: 300) {
                ...GatsbyContentfulFixed_tracedSVG
              }
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <footer>
      <Container>
        <Row className="pt-5">
          <Col
            xs="12"
            md="4"
            className="d-flex align-items-center justify-content-center"
          >
            {data.allContentfulMainContent.edges.map(edge => (
              <em>{edge.node.businessName}</em>
            ))}
          </Col>

          <Col
            xs="12"
            md="4"
            className="d-flex align-items-center justify-content-center"
          >
            {data.allContentfulMainContent.edges.map(edge => (
              <Img
                fluid={edge.node.businessLogo.fluid}
                alt={edge.node.businessLogo.description}
                style={{ width: 50, height: "auto" }}
              />
            ))}
          </Col>

          <Col
            xs="12"
            md="4"
            className="d-flex align-items-center justify-content-center"
          >
            {data.allContentfulMainContent.edges.map(edge => (
              <p>{edge.node.businessPhoneNumber}</p>
            ))}
          </Col>
        </Row>
        <Row className="pt-5 pb-5">
          <Col
            xs="12"
            md="4"
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <p className=" font-weight-bold">HOURS</p>
            <div>
              {data.allContentfulMainContent.edges.map(edge => (
                <p>
                  <em>Sunday - Thursday</em> {edge.node.businessHours[0]}
                </p>
              ))}

              {data.allContentfulMainContent.edges.map(edge => (
                <p>
                  <em>Friday - Saturday</em> {edge.node.businessHours[1]}
                </p>
              ))}
            </div>
          </Col>

          <Col
            xs="12"
            md="4"
            className="d-flex align-items-center justify-content-center"
          >
            <a href="https://g.page/EPICPizzaSoulard?share">DIRECTIONS</a>
          </Col>

          <Col
            xs="12"
            md="4"
            className="d-flex align-items-center justify-content-center"
          >
            <Link to="/parties">CONTACT US</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
