import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { useState } from "react"
import mailman from "../assets/img/contact-img.svg"

function Contact() {
    const initialFormDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(initialFormDetails)
    const [buttonText, setButtonText] = useState("Send")
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await fetch("https://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        })
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} lg={6} md={12} sm={12} className="justify-content-center text-center" style={{
                        // padding: "5%"
                    }}>
                        <img src={mailman} style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            margin: "2rem 0"
                        }} alt=""></img>
                    </Col>
                    <Col size={12} lg={6} md={12} sm={12}>
                        <h2 className="text-center section-heading">Connect with me</h2>
                        <form>
                            <Row>
                                <Col size={12} md={6} sm={12}>
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="First name"
                                        onChange={event => onFormUpdate("firstName", event.target.value)} />
                                </Col>
                                <Col size={12} md={6} sm={12}>
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last name"
                                        onChange={event => onFormUpdate("lastName", event.target.value)} />
                                </Col>
                            </Row>
                            <Row>
                            <Col size={12} md={6} sm={12}>
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email address"
                                        onChange={event => onFormUpdate("email", event.target.value)} />
                                </Col>
                                <Col size={12} md={6} sm={12}>
                                    <input
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Phone number"
                                        onChange={event => onFormUpdate("phone", event.target.value)} />
                                </Col>
                                <Col>
                                    <textarea
                                    row="6"
                                    value={formDetails.message}
                                    placeholder="Your message"
                                    onChange={event => onFormUpdate("message", event.target.value)} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="justify-content-center">
                                    <button>
                                        Send!
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact