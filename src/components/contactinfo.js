import React from "react"
import { Container, Row, Col, Alert } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import { Twitter, Instagram, Facebook } from "react-feather"

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulMainContent {
        edges {
          node {
            businessAddress
            alertEnabled
            alertContent
            businessPhoneNumber
            socialFacebook
            socialInstagram
            socialTwitter
          }
        }
      }
    }
  `)

  return (
    <section id="contactinfo">
      <Container>
        <Row>
          <Col
            xs="12"
            md="6"
            lg="4"
            xl="2"
            className="d-flex flex-column align-items-center justify-content-center text-center"
          >
            <div>
              {data.allContentfulMainContent.edges.map(edge => (
                <p>{edge.node.businessAddress}</p>
              ))}
            </div>

            <div>
              {data.allContentfulMainContent.edges.map(edge => (
                <em>{edge.node.businessPhoneNumber}</em>
              ))}
            </div>
          </Col>

          {data.allContentfulMainContent.edges.map(edge =>
            edge.node.alertEnabled ? (
              <Col
                xs="12"
                md="4"
                lg="6"
                xl="8"
                className="d-flex justify-content-center align-items-center"
              >
                <Alert color="light">{edge.node.alertContent}</Alert>
              </Col>
            ) : (
              <Col
                xs="12"
                md="4"
                lg="6"
                xl="8"
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <p>Check out our Sister Location!</p>
                <a href="https://www.eastcoastpizza.net">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="53.7px"
                    height="74.6px"
                    viewBox="0 0 419.6 554.7"
                    className="p-2"
                  >
                    <defs></defs>
                    <path
                      id="path4491_1_"
                      d="M207.7,545.6c-2.1-5.6-49.8-130.4-105.9-277.4S-0.1,0.8,0,0.5C0.1,0.2,94.6,0,209.9,0h209.7l-0.3,1.4
	c-0.2,1.1-203.7,544.3-206.9,552.3C211.6,555.7,211.5,555.6,207.7,545.6L207.7,545.6z M304.5,275.8c50.8-137.5,93-252,93.8-254.3
	c0.8-2.3,1.2-4.7,1-5.2c-0.5-1.4-380.4-1.4-380.9,0c-0.2,0.5,33.8,91,75.4,201.2c41.7,110.2,84.7,224.5,95.8,254.1
	c11,29.6,20.1,54,20.3,54.3c0.2,0.3,0.7,0.4,1.2,0.3C211.7,526,243.9,439.8,304.5,275.8L304.5,275.8z M210.3,490.2
	c-2.3-6.3-35.3-92.4-43.3-112.8c-5.6-14.5-13.1-34.1-16.5-43.6c-3.4-9.4-9.2-24.9-12.8-34.4c-4.6-12.1-98.2-259.3-102.6-271
	c-0.3-0.8,19.2-1,175.2-1c96.5,0,175.5,0.1,175.5,0.2c0,1.2-174,463.3-174.5,463.5C211,491.2,210.5,490.8,210.3,490.2L210.3,490.2z
	 M226.2,393.1c0-0.4-1.1-5-2.4-10.1l-2.4-9.3l1.3-1.2c0.7-0.7,4.2-3.4,7.7-6.1s6.3-5.3,6.2-5.7c-0.2-0.5-3.4-0.8-10.1-1.1l-9.8-0.3
	l-0.8-2.6c-0.4-1.4-1.8-5.9-3.1-10c-1.4-4.8-2.6-7.5-3.1-7.5s-1.3,1.3-1.8,3s-2,6.2-3.4,10l-2.4,7l-9.5,0.3c-6,0.2-9.6,0.6-9.7,1
	c-0.2,0.6,3.9,4.1,13.9,12c0.6,0.5,0.4,2.3-1.3,9.2c-2.2,8.9-2.6,11.5-1.6,11.5c0.3,0,3.8-2.1,7.7-4.8c3.9-2.6,7.6-4.8,8.1-4.8
	s4.1,2.3,7.9,5.1C224.4,393.8,226.3,394.7,226.2,393.1L226.2,393.1z M202,341.2c0-0.6-1.4-5.2-3.1-10.2l-3.1-9l7.7-5.5
	c4.7-3.3,8-5.3,8.5-5c1.3,0.8,10.6,8,12,9.3l1.3,1.2l-3.6,9.5c-2,5.2-3.6,9.8-3.6,10.1c0,1.4,2,0.2,9.1-5.4c4.2-3.3,7.9-6,8.3-6
	s1.6,0.7,2.7,1.5c3.4,2.6,13.2,8.7,13.9,8.7c1.2,0,0.8-2.2-2-10.5l-2.7-8l2.6-2.1c1.4-1.2,4.7-3.8,7.4-5.8c2.7-2,4.7-4,4.6-4.4
	s-3.5-0.8-9.4-1l-9.2-0.3l-3.2-8.6c-2.6-6.8-3.5-8.6-4.4-8.6s-1.8,1.7-4.3,8.6l-3.2,8.6H210h-18.3l-3.1-9.2c-1.7-5.1-3.3-9.6-3.6-10
	c-1.2-2-1.6-1.3-6,11.3l-2.8,8l-10.2,0.3c-8.5,0.3-10.2,0.5-10.2,1.3c0,0.5,3.4,3.3,7.4,6.2c4.1,2.9,7.6,5.5,7.9,5.7
	c0.2,0.3-0.9,4.4-2.6,9.2c-1.7,4.8-3.1,9.2-3.1,9.7c0,1.7,1.7,1,9.5-3.9c4.3-2.6,8.2-4.8,8.9-4.8c0.6,0,4.6,2.3,8.9,5.1
	c4.3,2.8,8.1,5.1,8.5,5.1C201.7,342.4,202,341.8,202,341.2L202,341.2z M263.3,277c2.1-1.5,26.1-63.4,25.6-66.1
	c-0.2-1.1-2.9-1.1-50.4-1.3c-27.6-0.1-50.1-0.2-50.1-0.3c0-0.1,1.6-4.3,3.6-9.4l3.6-9.2l50.6-0.3c27.8-0.2,50.6-0.4,50.7-0.5
	c0.2-0.3,6.2-16.3,12.9-34.3c3.7-9.9,6.6-18.5,6.4-19.1c-0.2-1.1-2.7-1.1-50-1.3c-27.4-0.1-49.8-0.4-49.8-0.6
	c0-0.3,1.8-5.6,4.1-11.8l4.1-11.3h50.2c40.9,0,50.3-0.2,51-0.8c1.3-1.3,20.6-54.4,20.2-55.5c-0.3-0.9-15.3-0.9-135.3-0.8
	c-124.1,0.1-135,0.2-135.1,1.2c-0.1,0.6,16.6,47.9,37.2,105.3c44.1,123.4,41.1,115.4,42.1,116C155.9,277.6,262.3,277.6,263.3,277
	L263.3,277z"
                    />
                  </svg>
                </a>
              </Col>
            )
          )}

          <Col
            xs="12"
            md="2"
            className="d-flex align-items-center justify-content-between ml-auto"
          >
            {data.allContentfulMainContent.edges.map(edge => (
              <a href={edge.node.socialTwitter}>
                <Twitter color="#000" size={24} />
              </a>
            ))}
            {data.allContentfulMainContent.edges.map(edge => (
              <a href={edge.node.socialFacebook}>
                <Facebook color="#000" size={24} />
              </a>
            ))}
            {data.allContentfulMainContent.edges.map(edge => (
              <a href={edge.node.socialInstagram}>
                <Instagram color="#000" size={24} />
              </a>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactInfo
