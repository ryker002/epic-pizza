import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

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
            <img
              src={require("../images/ecplogo.png")}
              className="img-fluid"
              width="50"
              alt="East Coast Pizza Logo"
            />
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
            <a href="https://www.google.com/maps/place/East+Coast+Pizza/@38.6678068,-90.6034032,17z/data=!3m2!4b1!5s0x87df2aa0a8a04909:0x7edf0a3ae62f3705!4m5!3m4!1s0x87df2aa0a61c2095:0x77bffdad89b5beef!8m2!3d38.6678026!4d-90.6012145">
              DIRECTIONS
            </a>
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
