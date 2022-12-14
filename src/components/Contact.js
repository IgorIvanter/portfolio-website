import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import { useEffect, useState } from "react"
import emailjs from "emailjs-com"
// import mailman from "../assets/img/contact-img.svg"
import astronaut from "../assets/img/astronaut.jpg"

function FormSentMessage(props) {
    const success = props.success
    return (
        <Modal
            {...props}
            success=""
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {success ? "Success!" : "Error"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {success ? "Your message has been succesfully sent! I will reach out back as soon as possible." : "Unfortunately, something went wrong... Please try again later OR send me an email to igor.ivanter@gmail.com"}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

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
    const [modalShow, setModalShow] = useState(false);
    const [success, setSuccess] = useState(undefined)

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted")
        setButtonText("Sending...")
        emailjs.sendForm("default_service", "template_def", "#form", "H83fFGK12wCdLb07P")  // Service ID, template ID, selector and Public Key
            .then(result => {
                console.log(result.text)
                setFormDetails(initialFormDetails)
                setSuccess(true)
                setModalShow(true)
                setButtonText("Send")
            }, error => {
                console.log(error.text)
                setSuccess(false)
                setModalShow(true)
                setButtonText("Send")
            })
    }

    useEffect(() => {
        console.log(formDetails)
    }, [formDetails])

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} lg={6} md={12} sm={12} className="justify-content-center text-center">
                        <img src={astronaut} style={{
                            width: "80%"
                            // width: "100%",
                            // height: "100%",
                            // objectFit: "contain",
                            // margin: "2rem 0"
                        }} alt=""></img>
                    </Col>
                    <Col size={12} lg={6} md={12} sm={12}>
                        <h2 className="text-center section-heading">Send me a message</h2>
                        <form onSubmit={handleSubmit} id="form">
                            <Row>
                                <Col size={12} md={6} sm={12}>
                                    <input
                                        name="first_name"
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="First name"
                                        onChange={event => onFormUpdate("firstName", event.target.value)} />
                                </Col>
                                <Col size={12} md={6} sm={12}>
                                    <input
                                        name="last_name"
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last name"
                                        onChange={event => onFormUpdate("lastName", event.target.value)} />
                                </Col>
                            </Row>
                            <Row>
                                <Col size={12} md={6} sm={12}>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email address"
                                        onChange={event => onFormUpdate("email", event.target.value)} />
                                </Col>
                                <Col size={12} md={6} sm={12}>
                                    <input
                                        name="tel"
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Phone number"
                                        onChange={event => onFormUpdate("phone", event.target.value)} />
                                </Col>
                                <Col>
                                    <textarea
                                        name="message"
                                        row="6"
                                        value={formDetails.message}
                                        placeholder="Your message"
                                        onChange={event => onFormUpdate("message", event.target.value)} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="justify-content-center">
                                    <button>
                                        {buttonText}
                                    </button>

                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
            <FormSentMessage
                success={success}
                show={modalShow}
                onHide={() => setModalShow(false)}
                contentClassName="ProjectModal"
            />
            {/* <button onClick={() => setModalShow(true)} id="open-modal">
                Open Modal
            </button> */}
        </section>
    )
}

export default Contact