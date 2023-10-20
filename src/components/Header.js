import { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SocialMediaIcons from './SocialMediaIcons';

function Header() {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const navbarRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = event => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setExpanded(false);
            }
        }
        
        document.addEventListener('mousedown', handleClickOutside)
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [navbarRef])

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
        <Navbar
            bg="dark"
            expand="lg"
            ref={navbarRef}
            expanded={expanded}
            onToggle={() => setExpanded(exp => !exp)}
            className={scrolled && "scrolled"}
            >
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
                            onClick={() => {
                                updateLink("home");
                                setExpanded(false);
                            }}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === "skills" ? " active navbar-link" : "navbar-link"}
                            onClick={() => {
                                updateLink("skills");
                                setExpanded(false);
                            }}>
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === "projects" ? " active navbar-link" : "navbar-link"}
                            onClick={() => {
                                updateLink("projects");
                                setExpanded(false);
                            }}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <SocialMediaIcons />
                        <a href="#contact">
                            <button 
                                onClick={() => {
                                    console.log('Clicked!');
                                    setExpanded(false);
                                }}
                                >
                                <span>Let's get in touch!</span>
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;