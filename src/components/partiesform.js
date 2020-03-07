import React, {useState} from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Row, Col,} from 'reactstrap'

const formSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    fullName: Yup.string().required("Required"),
    reason: Yup.string().required("Required"),
    amountOfPeople: Yup.string().required("Required"),
    eventDate: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    eventTime: Yup.string().required("Required")
  });

  const PartiesForm = () => {
    /* Server State Handling */
    const [serverState, setServerState] = useState();
    const [amountPeople, setAmountPeople] = useState();
    const [isCatering, setCatering] = useState();

    const handleServerResponse = (ok, msg) => {
      setServerState({ok, msg});
    };
    const handleOnSubmit = (values, actions) => {
      axios({
        method: "POST",
        url: "https://formspree.io/mknovpog",
        data: values
      })
        .then(response => {
          actions.setSubmitting(false);
          actions.resetForm();
          handleServerResponse(true, "Thanks for Contacting us! We'll get back to you shortly!");
        })
        .catch(error => {
          actions.setSubmitting(false);
          handleServerResponse(false, "Something went wrong, please fill in all the forms or give us a call!");
        });
    };

    return (
        <div>
          <h1>Contact Us</h1>
          <Formik
            initialValues={{ 
                fullName: '',
                email: '',
                phonenumber: '',
                reason: '',
                amountOfPeople: '',
                eventDate: '',
                eventTime: ''
            }}
            onSubmit={handleOnSubmit}
            validationSchema={formSchema}
          >
            {({ isSubmitting }) => (
              
              <Form id="fs-frm" noValidate>
              {serverState && (
                  <div className={!serverState.ok ? "errorMsg alert alert-danger alert-dismissible fade show" : "alert alert-success alert-dismissible fade show"} role="alert">
                  
                    {serverState.msg}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                )}
                <Row className="pb-3">
                    <Col xs="12" md="6" lg="3">
                    <label htmlFor="fullName">Name</label>
                    <Field
                        id="fullName"
                        name="fullName"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                    />
                    <ErrorMessage name="fullName" className="text-danger" component="small" />
                    </Col>

                    <Col xs="12" md="6" lg="3">
                        <label htmlFor="email">Email Address</label>
                        <Field
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        />
                        <ErrorMessage name="email" className="text-danger" component="small" />
                    </Col>

                    <Col xs="6" lg="2">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <Field
                        id="phonenumber"
                        name="phonenumber"
                        type="tel"
                        className="form-control"
                        placeholder="000 - 000 - 0000"
                        />
                        <ErrorMessage name="phonenumber" className="text-danger" component="small" />
                    </Col>
                    <Col xs="6" lg="2">
                        <label htmlFor="eventDate">Event Date</label>
                        <Field
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        className="form-control"
                        />
                        <ErrorMessage name="eventDate" className="text-danger" component="small" />
                    </Col>

                    <Col xs="12" md="2">
                    <label htmlFor="eventTime">Event Time</label>
                    <Field
                        id="eventTime"
                        name="eventTime"
                        type="time"
                        className="form-control"
                    />
                    <ErrorMessage name="eventTime" className="text-danger" component="small" />
                    </Col>
                </Row>

                <Row className="pb-3">
                    <Col xs="6" md="9">
                        <label htmlFor="reason">Party Reason</label>
                        <Field
                        id="reason"
                        name="reason"
                        type="select"
                        className="form-control"
                        component="select"
                        >
                            <option> - </option>
                            <option>Birthday Party</option>
                            <option>Sports Event</option>
                            <option>Work Event</option>
                            <option>Other</option>
                        </Field>
                        <ErrorMessage name="reason" className="text-danger" component="small" />
                    </Col>

                    <Col xs="6" md="3">
                        <label htmlFor="amountOfPeople">Amount of People</label>
                        <Field
                        id="amountOfPeople"
                        name="amountOfPeople"
                        type="select"
                        component="select"
                        className="form-control"
                        onBlur={e => setAmountPeople(e.target.value)}
                        // value={e => setAmountPeople(e.target.value)}
                        >
                            <option> - </option>
                            <option>1 - 5</option>
                            <option>6 - 10</option>
                            <option>11 - 20</option>
                            <option>21 - 30</option>
                            <option>30 +</option>
                        </Field>
                        <ErrorMessage name="amountOfPeople" className="text-danger" component="small" />
                    </Col>

                </Row>

                <Row className="pb-3">

                  <Col xs="12" md="4">
                        <label htmlFor="catering">Catered?</label>
                        <Field
                        id="catering"
                        name="catering"
                        type="select"
                        component="select"
                        className="form-control"
                        onBlur={e => setCatering(e.target.value)}
                        >
                            <option> - </option>
                            <option> Yes </option>
                            <option> No </option>
                        </Field>
                        <ErrorMessage name="catering" className="text-danger" component="small" />
                        <small className="form-text text-muted">We Offer Catering Delivery for  office parties, office meetings, and many other events! Will you be needing your event Catered?</small>
                    </Col>

                    <Col xs="12" md="8">
                        <label htmlFor="address">Address</label>
                        <Field
                        id="address"
                        name="address"
                        type="text"
                        className="form-control"
                        placeholder="123 Main Street, Chesterfield, MO, 63017"
                        disabled={isCatering === "Yes" ? false : true}
                        />
                        <ErrorMessage name="address" className="text-danger" component="small" />
                    </Col>

                </Row>

                <Row className="pb-3">
                    <Col xs="12" md="4">
                        <label htmlFor="backroomReservation">Do you need to Reserve the Backroom?</label>
                        <Field
                            id="backroomReservation"
                            name="backroomReservation"
                            type="select"
                            component="select"
                            className="form-control"
                            disabled={amountPeople === "21 - 30" | amountPeople === "30 +" ? false : true}
                        >
                            <option>No</option>
                            <option>Yes</option>
                        </Field>
                        <small className="form-text text-muted">Backroom Reservations are only Available for Parties of 20 or More</small>

                    </Col>

                    <Col xs="12" md="8">
                        <label htmlFor="message">Other Information</label>
                        <Field
                        id="message"
                        name="message"
                        type="textarea"
                        className="form-control"
                        component="textarea"
                        placeholder="Do we need to know anything additional for this party?"
                        rows="3"
                        />
                    </Col>
                </Row>
                
                <Row>
                    <Col xs="12">
                        <button type="submit" className="btn" disabled={isSubmitting}>Submit</button>
                    </Col>
                </Row>

                
              </Form>
            )}
          </Formik>
        </div>
      );
    };

    export default PartiesForm