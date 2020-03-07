import React from "react"
import { Container, Row, Col } from "reactstrap"
import Slider from "react-slick"
import BeerCard from "./beercard"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import { useStaticQuery, graphql } from "gatsby"

const Beers = () => {
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
    centerMode: true,
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
      allContentfulEastCoastBeerCard {
        edges {
          node {
            beerImage {
              fixed(height: 250) {
                ...GatsbyContentfulFixed_tracedSVG
              }
              description
            }
            beerName
            ibu
            alcoholContent
          }
        }
      }

      allContentfulEastCoastPizzaHomeContent {
        edges {
          node {
            eastCoastBeerSectionTitle
            eastCoastBeerDescription
          }
        }
      }
    }
  `)

  return (
    <section id="localbeers" className="bricks">
      <Container>
        <Row className="">
          <Col
            xs="12"
            className="bricks-header d-flex flex-md-row flex-column justify-content-center justify-content-md-start align-items-center pt-5"
          >
            <Col
              xs="12"
              md="8"
              className="pt-5 flex-md-row flex-column d-flex justify-content-center align-items-center"
            >
              {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
                <h1 className="text-uppercase">
                  {edge.node.eastCoastBeerSectionTitle}
                </h1>
              ))}

              {data.allContentfulEastCoastPizzaHomeContent.edges.map(edge => (
                <p>{edge.node.eastCoastBeerDescription}</p>
              ))}
            </Col>
          </Col>
        </Row>

        <Slider {...settings} className="beer-card-container row pt-5">
          {data.allContentfulEastCoastBeerCard.edges.map(edge => (
            <BeerCard
              img={edge.node.beerImage.fixed}
              name={edge.node.beerName}
              alcohol={edge.node.alcoholContent}
              ibu={edge.node.ibu}
              description={edge.node.beerImage.description}
            />
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default Beers
