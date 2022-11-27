import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import linkedInIcon from '../assets/img/nav-icon1.svg'
import facebookIcon from '../assets/img/nav-icon2.svg'
import instagramIcon from '../assets/img/nav-icon3.svg'

function NavBar() {
    const [activeLink, setActiveLink] = useState("#home")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const updateLink = link => setActiveLink(link)

    return (
        <Navbar bg="secondary" expand="lg" className={scrolled && "srolled"}>
            <Container>
                <Navbar.Brand href="#home">Igor Ivanter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === "home" ? " active navbar-link" : "navbar-link"}
                            onClick={() => updateLink("home")}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === "skills" ? " active navbar-link" : "navbar-link"}
                            onClick={() => updateLink("skills")}>
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#link"
                            className={activeLink === "projects" ? " active navbar-link" : "navbar-link"}
                            onClick={() => updateLink("projects")}>
                            Projects
                        </Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <span className="navbar-text">
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
                        <button onClick={() => console.log('Clicked!')}>Click me!</button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;