import React from "react"

import { Container, Row, Col } from "reactstrap"
import MenuItem from "../components/menuitem"
import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react"

const MenuSection = props => {
  const data = useStaticQuery(graphql`
    {
      allContentfulEastCoastMenuStartersSides {
        edges {
          node {
            eastCoastAppetizerName
            price
            subSectionId
            description {
              description
            }
          }
        }
      }

      allContentfulEastCoastMenuBeverages {
        edges {
          node {
            name
            price
            description {
              description
              internal {
                content
              }
            }
          }
        }
      }

      allContentfulEastCoastMenuSoupsSalads {
        edges {
          node {
            name
            price
            description {
              description
            }
          }
        }
      }

      allContentfulEastCoastMenuSandwiches {
        edges {
          node {
            name
            price
            description {
              description
            }
          }
        }
      }

      allContentfulEastCoastMenuDesserts {
        edges {
          node {
            name
            price
            description {
              description
            }
          }
        }
      }

      allContentfulEastCoastMenuEntrees {
        edges {
          node {
            name
            price
            description {
              description
            }
          }
        }
      }

      allContentfulEastCoastMenuKidsMenu {
        edges {
          node {
            description {
              description
            }
            name
            price
          }
        }
      }

      allContentfulEastCoastMenuPizzas {
        edges {
          node {
            name
            price
            description {
              description
            }
          }
        }
      }

      allContentfulEastCoastMenuSpecials {
        edges {
          node {
            description {
              description
            }
            name
            price
          }
        }
      }

      allContentfulEastCoastMenuSectionInformation(
        filter: { subSectionTitles: { ne: null } }
      ) {
        edges {
          node {
            subSectionTitles
          }
        }
      }

      allContentfulEastCoastMenuColdSandwiches {
        edges {
          node {
            name
            price
            description {
              description
            }
          }
        }
      }

      allContentfulEastCoastMenuSpecialtyPizzas {
        edges {
          node {
            name
            price
            description {
              description
            }
          }
        }
      }

      allContentfulEastCoastMenuCalzone {
        edges {
          node {
            name
            price
            description {
              description
            }
          }
        }
      }

      allContentfulEastCoastMenuStromboli {
        edges {
          node {
            name
            price
            description {
              description
            }
          }
        }
      }
    }
  `)

  const [isType, setType] = useState(props.type)
  return isType === "sandwiches" ? (
    <section id="menu_s01" className="halftone menu-section">
      <Container>
        <Row>
          <h1 className="pt-5">{props.SectionTitle}</h1>
          <p>{props.description}</p>
          <hr />
        </Row>
        <Row>
          <Col xs="12">
            <h2>Cold Sandwiches</h2>
          </Col>

          {data.allContentfulEastCoastMenuColdSandwiches.edges.map(edge => (
            <MenuItem
              menuitemname={edge.node.name}
              price={edge.node.price}
              description={edge.node.description.description}
            />
          ))}

          <Col xs="12">
            <h2>Hot Sandwiches</h2>
          </Col>

          {data.allContentfulEastCoastMenuSandwiches.edges.map(edge => (
            <MenuItem
              menuitemname={edge.node.name}
              price={edge.node.price}
              description={edge.node.description.description}
            />
          ))}
        </Row>
      </Container>
    </section>
  ) : isType === "pizza" ? (
    <section id="menu_s01" className="halftone menu-section">
      <Container>
        <Row>
          <h1 className="pt-5">{props.SectionTitle}</h1>
          <p>{props.description}</p>
          <hr />
        </Row>
        <Row>
          {data.allContentfulEastCoastMenuPizzas.edges.map(edge => (
            <MenuItem
              menuitemname={edge.node.name}
              price={edge.node.price}
              description={edge.node.description.description}
            />
          ))}

          <Col xs="12">
            <h2>Specialty Pizzas</h2>
          </Col>

          {data.allContentfulEastCoastMenuSpecialtyPizzas.edges.map(edge => (
            <MenuItem
              menuitemname={edge.node.name}
              price={edge.node.price}
              description={edge.node.description.description}
            />
          ))}

          <Col xs="12">
            <h2>Calzones</h2>
          </Col>

          {data.allContentfulEastCoastMenuCalzone.edges.map(edge => (
            <MenuItem
              menuitemname={edge.node.name}
              price={edge.node.price}
              description={edge.node.description.description}
            />
          ))}

          <Col xs="12">
            <h2>Stromboli's</h2>
          </Col>

          {data.allContentfulEastCoastMenuStromboli.edges.map(edge => (
            <MenuItem
              menuitemname={edge.node.name}
              price={edge.node.price}
              description={edge.node.description.description}
            />
          ))}
        </Row>
      </Container>
    </section>
  ) : (
    <section id="menu_s01" className="halftone menu-section">
      <Container>
        <Row>
          <h1 className="pt-5">{props.SectionTitle}</h1>
          <p>{props.description}</p>
          <hr />
        </Row>
        <Row>
          {isType === "starters"
            ? data.allContentfulEastCoastMenuStartersSides.edges.map(edge => (
                <MenuItem
                  menuitemname={edge.node.eastCoastAppetizerName}
                  price={edge.node.price}
                  description={edge.node.description.description}
                />
              ))
            : isType === "beverages"
            ? data.allContentfulEastCoastMenuBeverages.edges.map(edge => (
                <MenuItem
                  menuitemname={edge.node.name}
                  price={edge.node.price}
                  description={edge.node.description.description}
                />
              ))
            : isType === "soupsalad"
            ? data.allContentfulEastCoastMenuSoupsSalads.edges.map(edge => (
                <MenuItem
                  menuitemname={edge.node.name}
                  price={edge.node.price}
                  description={edge.node.description.description}
                />
              ))
            : isType === "entree"
            ? data.allContentfulEastCoastMenuEntrees.edges.map(edge => (
                <MenuItem
                  menuitemname={edge.node.name}
                  price={edge.node.price}
                  description={edge.node.description.description}
                />
              ))
            : isType === "specials"
            ? data.allContentfulEastCoastMenuSpecials.edges.map(edge => (
                <MenuItem
                  menuitemname={edge.node.name}
                  price={edge.node.price}
                  description={edge.node.description.description}
                />
              ))
            : isType === "kids"
            ? data.allContentfulEastCoastMenuKidsMenu.edges.map(edge => (
                <MenuItem
                  menuitemname={edge.node.name}
                  price={edge.node.price}
                  description={edge.node.description.description}
                />
              ))
            : isType === "desert"
            ? data.allContentfulEastCoastMenuDesserts.edges.map(edge => (
                <MenuItem
                  menuitemname={edge.node.name}
                  price={edge.node.price}
                  description={edge.node.description.description}
                />
              ))
            : null}
        </Row>
      </Container>
    </section>
  )
}

export default MenuSection
