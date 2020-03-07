import React from "react"
import { Col, Row } from "reactstrap"

const MenuItem = props => {
  return (
    <Col xs="12" md="6">
      <Row className="mt-2">
        <Col xs="10" className="justify-content-start align-items-center">
          <p>
            <b>{props.menuitemname}</b>
          </p>
        </Col>

        <Col xs="2">
          <b>{props.price}</b>
        </Col>
      </Row>

      <Row>
        <Col xs="12" className="text-left">
          {props.description ? <p>{props.description}</p> : ""}
        </Col>
      </Row>
    </Col>
  )
}

export default MenuItem
