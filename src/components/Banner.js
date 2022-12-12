import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg"
import { ArrowRightCircle } from "react-bootstrap-icons"

function Banner() {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center text-center">
                    <Col xl={7} md={6} xs={12} className="justify-content-center">
                        <h1 style={{
                            fontSize: "5rem",
                            fontWeight: 700,
                            marginBottom: "3rem",
                            marginTop: "5rem"
                        }}>
                            Hi! I'm Igor.
                        </h1>
                        <p style={{
                            width: "75%",
                            margin: "auto"
                        }}>
                            People tell me I need to have some friends, talk to people, go out, etc. They tell me I should sleep sometimes. I don't listen to them: I don't see how those things will help me write code!
                        </p>
                        <p style={{
                            width: "75%",
                            margin: "auto"
                        }}>
                            I am a web developer. Hit me up and we'll build something cool!
                        </p>
                        <button style={{
                            backgroundColor: "inherit",
                            color: "white",
                            textDecoration: "underline",
                            float: "left",
                            margin: "2rem"
                        }}>
                            Let's get in touch <ArrowRightCircle size="1.25rem" />
                        </button>
                    </Col>
                    <Col xl={5} md={6} xs={12}>
                        <img src={headerImg} alt="" width="75%" id="bg-image" style={{
                            margin: "2rem",
                            marginTop: "10rem"
                        }}></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner