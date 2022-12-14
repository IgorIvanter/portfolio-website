import { Col, Container, Row } from "react-bootstrap"
import linkedInIcon from '../assets/img/nav-icon1.svg'
import facebookIcon from '../assets/img/nav-icon2.svg'
import instagramIcon from '../assets/img/nav-icon3.svg'


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
                        <div className="social-icon">
                            <a href="https://github.com/IgorIvanter">
                                <img src={linkedInIcon} alt=""></img>
                            </a>
                            <a href="https://github.com/IgorIvanter">
                                <img src={facebookIcon} alt=""></img>
                            </a>
                            <a href="https://github.com/IgorIvanter">
                                <img src={instagramIcon} alt=""></img>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer