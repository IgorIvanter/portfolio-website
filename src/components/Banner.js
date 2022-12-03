import { Container, Row, Col } from "react-bootstrap"
// import headerImg from "../assets/img/header-img.svg"
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
                        {/* <img src={headerImg} alt="" width="75%" id="bg-image" style={{
                            margin: "2rem",
                            marginTop: "10rem"
                        }}></img> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner