import React from "react"
import { Col } from "reactstrap"
import Img from "gatsby-image"

const PizzaCard = props => {
  return (
    <div>
      {/* <Col xs="12" className="mx-auto  w-100 mt-5"> */}
      <div className="d-flex justify-content-center align-items-center">
        <Img fixed={props.img} className="img-fluid" alt={props.description} />
      </div>
      {/* </Col> */}
      <Col xs="12" className="mx-auto pb-5">
        <h3>{props.day}</h3>
        <p>{props.name}</p>
      </Col>
    </div>
  )
}

export default PizzaCard
