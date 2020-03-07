import React from "react"
import { Container, Row, Col } from "reactstrap"
import PizzaCard from "./pizzacard"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"

const Pizza = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // centerMode: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const data = useStaticQuery(graphql`
    {
      allContentfulEastCoastPizzaCard(sort: { fields: orderId, order: ASC }) {
        edges {
          node {
            dayOfTheWeek
            pizzaImage {
              description
              fixed(height: 250) {
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
            pizzaName
          }
        }
      }

      allContentfulEastCoastPizzaHomeContent {
        edges {
          node {
            eastCoastPizzasSectionTitle
            eastCoastPizzasDescription {
              eastCoastPizzasDescription
            }
          }
        }
      }
    }
  `)

  return (
    <section id="pizza" className="bricks">
      <Container>
        <Row className="">
          <Col
            xs="12"
            className="bricks-header d-flex flex-md-row flex-column align-items-center pt-5"
          >
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <h1>{edge.node.eastCoastPizzasSectionTitle}</h1>
            ))}
            {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
              <p>
                {
                  edge.node.eastCoastPizzasDescription
                    .eastCoastPizzasDescription
                }
              </p>
            ))}
          </Col>
        </Row>

        <Slider {...settings} className="beer-card-container row pt-5">
          {data.allContentfulEastCoastPizzaCard.edges.map(edge => (
            <PizzaCard
              img={edge.node.pizzaImage.fixed}
              description={edge.node.pizzaImage.description}
              day={edge.node.dayOfTheWeek}
              name={edge.node.pizzaName}
            />
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default Pizza
