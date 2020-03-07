import React, {useState} from 'react'
import Link from 'gatsby-link'
import {
    Container,
    Row,
    Col,
  } from 'reactstrap';
  import { useStaticQuery, graphql } from "gatsby"
  import {motion} from "framer-motion"
  import { Menu } from 'react-feather';

  const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const data = useStaticQuery(graphql`
    {
      allContentfulEastCoastPages(sort: { fields: [createdAt], order: ASC }) {
        edges {
          node {
            eastCoastNavPageTitle
            eastCoastNavPageLink
          }
        }
      }

      allContentfulEastCoastPizzaHomeContent {
        edges {
          node {
            eastCoastBusinessName
          }
        }
      }
    }
  `)

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -300,
      opacity: 0
    }
  }

  function checkIsOpen() {
    isOpen ? (setIsOpen(false)) : (setIsOpen(true))
  }

  
    return (
      <div className="navwrapper">
      <div className="openIcon">
      <Menu color="#fff" size={28}  onClick={checkIsOpen}/>
      </div>

      <motion.div className="nav-sidebar" variants={menuVariants} initial="hidden"
      animate={isOpen ? "open" : "hidden"}>
        <Container>

        <Row>

        {data.allContentfulEastCoastPages.edges.map(edge => (
              <Col xs="12" className="d-flex justify-content-md-end justify-content-center sidebar-items p-0 m-0">
                 <Link to={edge.node.eastCoastNavPageLink} className="nav-link">{edge.node.eastCoastNavPageTitle}</Link>
              </Col>
            ))}   
            <Col xs="12" className="d-flex justify-content-md-end justify-content-center sidebar-items p-0 m-0">
                 <a href="https://www.epicpizzaandsubs.com/" className="nav-link">Epic Pizza</a>
            </Col>
        </Row>

        </Container>
      </motion.div>
      </div>
    );
  }
  
  export default Example;
