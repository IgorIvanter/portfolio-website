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
                            I get sh## done FAST.
                        </h1>
                        <p style={{
                            width: "75%",
                            margin: "auto"
                        }}>
                            Hi! I'm Igor - a developer specializing in web technologies. Whether you need a website for your online shop, a mobile app, a video game or a missile launching software - I will build it for you. Just hit me up.
                        </p>
                        <p style={{
                            width: "75%",
                            margin: "auto"
                        }}>
                            
                        </p>
                        <a href="#contact">
                            <button
                                className="lets-get-in-touch-button"
                                style={{
                                    backgroundColor: "inherit",
                                    color: "white",
                                    textDecoration: "underline",
                                    float: "left",
                                    margin: "2rem"
                                }}>
                                Let's get in touch <ArrowRightCircle size="1.25rem" />
                            </button>
                        </a>
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