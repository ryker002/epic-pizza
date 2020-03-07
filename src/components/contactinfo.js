import React from "react"
import {Container, Row, Col, Alert} from 'reactstrap'
import { useStaticQuery, graphql } from "gatsby"
import {Twitter, Instagram, Facebook} from 'react-feather'

const ContactInfo = () => {

  const data = useStaticQuery(graphql` {
    allContentfulEastCoastPizzaHomeContent {
      edges {
        node {
          eastCoastBusinessPhoneNumber
          eastCoastBusinessAddress
          instagramSocialLink
          facebookSocialLink
          twitterSocialLink
        }
      }
    }

    allContentfulEastCoastAlert {
      edges {
        node {
          alertOn
          alert {
            alert
          }
        }
      }
    }
  }
  
`)

  return (
  <section id="contactinfo">
    <Container>
      <Row>

          <Col xs="12" md="6" lg="4" xl="2" className="d-flex flex-column align-items-center justify-content-center text-center">
        
            <div>
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <p>{edge.node.eastCoastBusinessAddress}</p>
            ))}
            </div>

            <div>
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <em>{edge.node.eastCoastBusinessPhoneNumber}</em>
            ))}
            </div>
          </Col>

          {data.allContentfulEastCoastAlert.edges.map(edge => (
            edge.node.alertOn ? 
            (<Col xs="12" md="4" lg="6" xl="8" className="d-flex justify-content-center align-items-center">
              <Alert color="light">
              {edge.node.alert.alert}
            </Alert>
            </Col>) : (
              <Col xs="12" md="4" lg="6" xl="8" className="d-flex flex-column justify-content-center align-items-center">
              <p>Check out our Sister Location!</p>
              <a href="https://www.epicpizzaandsubs.com" >
              {/* <img src={require("../images/epic.png")} style={{
                maxWidth: 100,
              }} className="pt-3" alt="Epic Pizza"/> */}
              
              
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="80px"
	  viewBox="0 0 155 82.9" className="pt-5">
<defs>
</defs>
<path d="M19.3,27.9c5.6-0.4,11-0.8,17.1-1.2c-0.8,6.9,2,13.5-3.6,19.6c-2.9,3.1-5.9,3.9-9.5,4c-3.3,0.1-5.2,1.1-4.2,5.5
	c7.1-1,14.4-2,22.3-3.1c-0.9,6.5,2.9,13.4-2.8,19.1c-1.8,1.8-4.3,3.6-6.7,4.2C21.6,78.6,11.1,80.6,0,82.9c0-4.3,0-8.2,0-12.1
	c0-20.2,0-40.3,0-60.5C0,3.8,3.8,0.1,10.2,0.1c10.3,0,20.5,0,31.4,0c-0.9,6.5,2.2,12.7-2.9,18.6c-2.7,3.1-5.7,3.4-9.1,3.8
	c-2.3,0.2-4.6,0.3-7,0.1C19.2,22.4,18.3,24,19.3,27.9z M17.7,57.8c0-4.6,0.1-8.4,0-12.1c-0.1-2.9,1.3-3.7,3.9-3.9
	c4.2-0.3,8.5-0.8,13-1.3c0-4,0-7.7,0-12c-5.6,0.4-10.9,0.8-16.8,1.2c0-2.9,0-5.1,0-7.4c0-2.6,0-5.2,0-8.5c4.8,0,9.1,0.1,13.4,0
	c10.7-0.2,9.8,0.5,9.3-10.7c0-0.3-0.3-0.5-0.6-1.1C29.1,2,18.4,2,7.2,2c0,23.4,0,46.6,0,70.3c10.4-1.9,20.7-3.8,31-5.8
	c0.8-0.2,2.1-1.3,2.1-2.1c0.2-3.2,0.1-6.4,0.1-9.9C32.5,55.7,25.5,56.7,17.7,57.8z"/>
<path d="M45.8,73.4c0-22.4-0.1-44,0.1-65.6c0-3.7,4.5-7.7,8.1-7.7c8.8,0,17.6-0.1,26.4,0c5.1,0,7,2,7.1,7.3c0.1,6,0,11.9,0,17.9
	c0,10.8-6.7,18.5-17.5,19c-4.6,0.2-5.8,1.9-5.4,6c0.2,2.8,0,5.6,0,8.4c0,7.7-2.8,11.2-10.4,12.9C51.6,72.2,49,72.7,45.8,73.4z
	 M53,63.6c1.8-0.2,3.1-0.4,4.4-0.4c5.4,0,6.9-2.7,6.4-7.8c-0.5-4.7,0.1-9.6-0.2-14.3c-0.1-3,1.1-4.1,4-4.2c4-0.2,7.9-0.6,11.8-1
	c4.1-0.4,7-2.4,7.1-6.8c0.2-7.3,0.3-14.5-0.1-21.8c-0.1-1.9-2.4-5.2-3.9-5.3C72.8,1.5,63.1,1.7,53,1.7C53,22.5,53,42.7,53,63.6z"/>
<path d="M110.2,0.1c0,9.9,0,19.2,0,28.6c0,5.8-0.4,11.6,0.1,17.3c0.9,11.2-3.2,15.3-13.5,17c-1.8,0.3-3.6,0.4-5.6,0.7
	c-0.2-1-0.5-1.8-0.5-2.5c0-17.5-0.1-35,0-52.5c0-5,3.7-8.5,8.6-8.6C102.8,0,106.2,0.1,110.2,0.1z M98.5,55.6
	c1.5-0.3,2.6-0.8,3.7-0.7c5.2,0.2,6.5-2.3,6.4-7.3c-0.3-13.2,0-26.5,0-39.7c0-2.1,0-4.2,0-6.6c-3.7,0-6.8,0-10.1,0
	C98.5,19.4,98.5,37.2,98.5,55.6z"/>
<path d="M152.2,2c-9-0.3-18.1-0.7-27.1-0.7c-3.3,0-4.7,2.8-4.7,6c-0.1,12.7-0.1,25.5,0,38.2c0.1,4.4,2.5,5.9,7.1,5
	c8.1-1.6,16.1-3.3,24.2-4.9c-5.2,8.3-14.2,8.6-22.4,10.7c-2.7,0.7-5.5,1-8.2,1.6c-5.1,1.1-7.6-0.7-7.7-5.9c-0.1-13,0-26.1,0-39.1
	c0-4.9,6.9-12.6,11.8-12.8c7.9-0.3,15.9-0.1,23.8,0C150.1,0.2,151.2,1.4,152.2,2z"/>
<path d="M152.1,45.2c0.5-4.3,1-8.7,1.6-13.8c-3.9,0.5-6.8,0.8-9.6,1.3c-0.6,0.1-1.5,0.7-1.5,1.1c0.3,8.3-6.7,4.9-10.9,7.2
	c0-10.4,0-20.2,0-30.5c3.2,0,6.5,0,9.9,0c1.2,5.5,1.2,5.5,12,4.2c-0.5-4.2-1.1-8.5-1.6-12.8c4.3,4.1,2.1,9.4,1.6,13.8
	c-0.3,2.1-4.5,4.6-7.3,5.4c-3.2,0.9-6.8,0.2-10.7,0.2c-0.2-1.6-0.4-3.3-0.6-5.1c-3.1,1.5-4.1,16.7-1.1,23.8c4.3-8.9,11.7-9.5,21.1-9
	C154,35.9,153,40.5,152.1,45.2z"/>
<path d="M75.3,12.2c0,4.6,0,8.7,0,13.1c-3.7,0.3-7.2,0.6-11.6,1c0-4-0.1-8,0.1-12c0.1-0.7,1.7-1.8,2.8-1.9
	C69.3,12,72.1,12.2,75.3,12.2z"/>
</svg>


              </a>
                {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55"
                  height="55" viewBox="0 0 498.6 242.7">
                <defs>
                </defs>
                <g>
                  <path d="M34.7,195c27.6-3.8,51.4-7.1,74.6-10.3c1.5,2.4,2.5,3.3,2.6,4.3c3.4,32.3,3.4,32.3-29,38.4c-26.6,5-53.2,9.9-82.9,15.4
                    c0-21.1-0.1-40.1,0-59c0.4-54.3,1.3-108.6,1-162.9C1,7.1,4.4,1.9,19,2.4c30.4,1.1,60.8,0.3,92.6,0.3c0.4,9,0.5,16.2,1.2,23.4
                    c1,10.9-3.8,15.4-14.6,15.3c-20.3-0.3-40.6-0.1-62.2-0.1c0,20.5,0,37.7,0,57c18.8-1.1,36.7-2.2,57.5-3.5c0,11.1,0.8,21.6-0.5,31.8
                    c-0.4,3.1-6.2,6.9-10.2,8c-7.6,2-15.6,2.5-23.5,3.1c-25.8,1.8-24.7-0.7-24.7,28.2C34.7,174.8,34.7,183.7,34.7,195z"/>
                  <path d="M497,46.2c-11.2,0.6-20.6,1.1-31,1.6c-1.8-6.6-3.3-12.3-4.8-17.7c-12.3,0-23.9,0-36.8,0c0,35.3,0,69.4,0,105.2
                    c11-1.6,20.9-2.6,30.7-4.6c2.8-0.6,7.1-3.8,7.1-5.8c0.2-25.8,20.7-15.1,35.5-21.2c0,12.3,2.2,22.9-0.7,31.9
                    c-2.3,7.2-10,15.8-16.9,17.6c-23.9,6.4-48.5,10.3-73,14.8c-12,2.2-18.4-3.7-18.5-15.8c-0.1-44.1-0.1-88.1,0-132.2
                    c0-12.5,6.6-18.5,19-18.8C428,0.9,448.3,0.1,468.6,0c26.1-0.1,29.5,3.5,29.3,29.1C497.9,34.1,497.4,39.1,497,46.2z"/>
                  <path d="M159.1,212.5c-0.5-5.4-1.4-10.3-1.4-15.3c-0.1-59.3,0.3-118.7-0.3-178c-0.1-13.2,3.9-17.9,17.4-17.3
                    c24.3,1,48.6,0.7,72.9,0.1c14.9-0.4,22.5,6.2,22.6,20.7c0.3,23.7,0.2,47.5,0,71.2c-0.1,14.3-8.2,21.7-21.9,23.2
                    c-13.5,1.6-26.9,3.7-40.4,3.9c-12.8,0.2-16.5,5.8-15.8,17.8c0.8,15.2-1,30.6,0.5,45.7c1.8,17.6-3.8,26.8-22.2,26.7
                    C167.1,211.4,163.8,212.1,159.1,212.5z"/>
                  <path d="M346.1,178.9c-12.4,2.1-22.2,3.8-33.3,5.7c0-61,0-120.6,0-182c7.3-0.5,14.4-0.9,21.4-1.4c8.6-0.6,12,3.3,11.9,12
                    C346,67.9,346.1,122.6,346.1,178.9z"/>
                </g>
                </svg> */}
              
            
            </Col>
              
            )
          ))}

          <Col xs="12" md="2" className="d-flex align-items-center justify-content-between ml-auto">
          {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <a href={edge.node.twitterSocialLink}><Twitter color="#000" size={24} /></a>
          ))}
          {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <a href={edge.node.facebookSocialLink}><Facebook color="#000" size={24} /></a>
          ))}
          {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <a href={edge.node.instagramSocialLink}><Instagram color="#000" size={24} /></a>
          ))}
          </Col>

      </Row>
    </Container>
  </section>
)}

export default ContactInfo
