import React from "react"
import { Col } from "reactstrap"
import Img from "gatsby-image"

const BeerCard = props => {
  return (
    <div>
      {/* <Col
        xs="12"
        className="mx-auto w-50 mt-5 d-flex justify-content-center align-items-center"
        style={{
          width: 300,
          height: 300,
        }}
      > */}
      {/* <div className="mx-auto" style={{ height: 300, width: 300 }}> */}
      <div className="d-flex justify-content-center align-items-center">
        <Img fixed={props.img} alt={props.description} />
      </div>
      {/* </Col> */}
      {/* </div> */}
      <Col xs="12" className="mx-auto pb-5">
        <h3>{props.name}</h3>
        <p>
          ABV: {props.alcohol}% | IBU: {props.ibu}
        </p>
      </Col>
    </div>
  )
}

export default BeerCard
