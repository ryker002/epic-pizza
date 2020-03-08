import React, { useState } from "react"
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Row, Col } from "reactstrap"

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  fullName: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
})

const PartiesForm = () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState()
  const [amountPeople, setAmountPeople] = useState()
  const [isCatering, setCatering] = useState()

  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg })
  }
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/xlenknww",
      data: values,
    })
      .then(response => {
        actions.setSubmitting(false)
        actions.resetForm()
        handleServerResponse(
          true,
          "Thanks for Contacting us! We'll get back to you shortly!"
        )
      })
      .catch(error => {
        actions.setSubmitting(false)
        handleServerResponse(
          false,
          "Something went wrong, please fill in all the forms or give us a call!"
        )
      })
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phonenumber: "",
          message: "",
        }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form id="fs-frm" noValidate>
            {serverState && (
              <div
                className={
                  !serverState.ok
                    ? "errorMsg alert alert-danger alert-dismissible fade show"
                    : "alert alert-success alert-dismissible fade show"
                }
                role="alert"
              >
                {serverState.msg}
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
            <Row className="pb-3">
              <Col xs="12" md="6" lg="4">
                <label htmlFor="fullName">Name</label>
                <Field
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <ErrorMessage
                  name="fullName"
                  className="text-danger"
                  component="small"
                />
              </Col>

              <Col xs="12" md="6" lg="4">
                <label htmlFor="email">Email Address</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  className="text-danger"
                  component="small"
                />
              </Col>

              <Col xs="12" md="6" lg="4">
                <label htmlFor="phonenumber">Phone Number</label>
                <Field
                  id="phonenumber"
                  name="phonenumber"
                  type="tel"
                  className="form-control"
                  placeholder="000 - 000 - 0000"
                />
                <ErrorMessage
                  name="phonenumber"
                  className="text-danger"
                  component="small"
                />
              </Col>
            </Row>

            <Row className="pb-3">
              <Col xs="12">
                <label htmlFor="message">Comments</label>
                <Field
                  id="message"
                  name="message"
                  type="textarea"
                  className="form-control"
                  component="textarea"
                  placeholder=""
                  rows="3"
                />
                <ErrorMessage
                  name="message"
                  className="text-danger"
                  component="small"
                />
              </Col>
            </Row>

            <Row>
              <Col xs="12">
                <button type="submit" className="btn" disabled={isSubmitting}>
                  Submit
                </button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PartiesForm
