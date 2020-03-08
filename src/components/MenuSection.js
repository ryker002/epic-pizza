import React, { useState } from "react"

import { Container, Row, Col } from "reactstrap"
import MenuItem from "../components/menuitem"
import { useStaticQuery, graphql } from "gatsby"

const MenuSection = props => {
  const data = useStaticQuery(graphql`
    {
      Sides: allContentfulMenuSections(
        sort: { fields: createdAt, order: ASC }
        filter: { contentfulid: { eq: "Sides" } }
      ) {
        edges {
          node {
            title
            menuItems {
              name
              price
              description {
                description
              }
            }
            contentfulid
          }
        }
      }

      LunchSpecials: allContentfulMenuSections(
        sort: { fields: createdAt, order: ASC }
        filter: { contentfulid: { eq: "LunchSpecials" } }
      ) {
        edges {
          node {
            title
            menuItems {
              name
              price
              description {
                description
              }
            }
            contentfulid
          }
        }
      }

      Salads: allContentfulMenuSections(
        sort: { fields: createdAt, order: ASC }
        filter: { contentfulid: { eq: "Salads" } }
      ) {
        edges {
          node {
            title
            menuItems {
              name
              price
              description {
                description
              }
            }
            contentfulid
          }
        }
      }

      Subs: allContentfulMenuSections(
        sort: { fields: createdAt, order: ASC }
        filter: { contentfulid: { eq: "Subs" } }
      ) {
        edges {
          node {
            title
            menuItems {
              name
              price
              description {
                description
              }
            }
            contentfulid
          }
        }
      }

      Pizzas: allContentfulMenuSections(
        sort: { fields: createdAt, order: ASC }
        filter: { contentfulid: { eq: "Pizzas" } }
      ) {
        edges {
          node {
            title
            menuItems {
              name
              price
              description {
                description
              }
            }
            contentfulid
          }
        }
      }

      Beverages: allContentfulMenuSections(
        sort: { fields: createdAt, order: ASC }
        filter: { contentfulid: { eq: "Beverages" } }
      ) {
        edges {
          node {
            title
            menuItems {
              name
              price
              description {
                description
              }
            }
            contentfulid
          }
        }
      }
    }
  `)

  const [isType, setType] = useState(props.type)

  return (
    <section id="menu_s01" className="halftone menu-section">
      <Container>
        <Row>
          <Col>
            <h1 className="pt-5">{props.SectionTitle}</h1>
            <p>{props.description}</p>
            <hr />
          </Col>
        </Row>
        <Row>
          {isType === "Sides"
            ? data.Sides.edges.map(edge =>
                edge.node.menuItems.map(item => (
                  <MenuItem
                    menuitemname={item.name}
                    price={item.price}
                    description={item.description.description}
                  />
                ))
              )
            : isType === "LunchSpecials"
            ? data.LunchSpecials.edges.map(edge =>
                edge.node.menuItems.map(item => (
                  <MenuItem
                    menuitemname={item.name}
                    price={item.price}
                    description={item.description.description}
                  />
                ))
              )
            : isType === "Salads"
            ? data.Salads.edges.map(edge =>
                edge.node.menuItems.map(item => (
                  <MenuItem
                    menuitemname={item.name}
                    price={item.price}
                    description={item.description.description}
                  />
                ))
              )
            : isType === "Subs"
            ? data.Subs.edges.map(edge =>
                edge.node.menuItems.map(item => (
                  <MenuItem
                    menuitemname={item.name}
                    price={item.price}
                    description={item.description.description}
                  />
                ))
              )
            : isType === "Pizzas"
            ? data.Pizzas.edges.map(edge =>
                edge.node.menuItems.map(item => (
                  <MenuItem
                    menuitemname={item.name}
                    price={item.price}
                    description={item.description.description}
                  />
                ))
              )
            : isType === "Beverages"
            ? data.Beverages.edges.map(edge =>
                edge.node.menuItems.map(item => (
                  <MenuItem
                    menuitemname={item.name}
                    price={item.price}
                    description={item.description.description}
                  />
                ))
              )
            : null}
        </Row>
      </Container>
    </section>
  )
}

export default MenuSection
