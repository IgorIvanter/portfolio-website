import { Col, Container, Row } from "react-bootstrap"
import SocialMediaIcons from "./SocialMediaIcons"


function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h4>Igor Ivanter</h4>
                    </Col>
                    <Col style={{
                        display: "flex",
                        justifyContent: "end"
                    }}>
                        <SocialMediaIcons />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer