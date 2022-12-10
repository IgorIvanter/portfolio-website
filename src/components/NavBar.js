import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import linkedInIcon from '../assets/img/nav-icon1.svg'
import facebookIcon from '../assets/img/nav-icon2.svg'
import instagramIcon from '../assets/img/nav-icon3.svg'

function NavBar() {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)
    // const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    useEffect(() => {
        console.log(`Scrolled: ${scrolled}`)
    }, [scrolled])

    const updateLink = link => setActiveLink(link)

    return (
        <Navbar bg="dark" expand="lg" className={scrolled && "scrolled"}>
            <Container>
                <Navbar.Brand href="#home">Igor Ivanter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler">
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
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
                            href="#projects"
                            className={activeLink === "projects" ? " active navbar-link" : "navbar-link"}
                            onClick={() => updateLink("projects")}>
                            Projects
                        </Nav.Link>
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
                        <button onClick={() => console.log('Clicked!')}>
                            <span>Let's get in touch!</span>    
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;