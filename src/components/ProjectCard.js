import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';


export default function ProjectCard({ name, description, learned, site, code, image }) {
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        console.log(`New state: ${opened ? "opened" : "closed"}`)
    }, [opened])

    const projectLinkButtonStyle = {
        margin: "0.5rem 1rem 0.25rem 0"
    }

    return (
        <div
            style={{
                width: "100%",
                height: "15rem",
                border: "2px solid white",
                margin: "2rem 0"
            }}
            onClick={() => setOpened(true)}>
            {/* {props.children} */}
            <img src={image.src} alt={image.alt} style={image.style} />
            <h4 className="text-center" style={{
                margin: "0.5rem 0"
            }}>{name}</h4>
            <div onClick={e => e.stopPropagation()}>
                <Modal
                    show={opened}
                    onHide={() => setOpened(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    contentClassName="ProjectModal" >
                    <Modal.Header closeButton>
                        <Modal.Title
                            id="contained-modal-title-vcenter"
                            style={{
                                fontSize: "2rem"
                            }}>
                            {name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Description</h2>
                        {description}
                        <h2 className="project-section-heading">What I learned</h2>
                        <ul>
                            {learned.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                        <h2 className="project-section-heading">
                            Check it out
                        </h2>
                            <a target="_blank" rel="noreferrer" href={site}>
                                <Button
                                    disabled={!site}
                                    variant="primary"
                                    className="project-modal-button"
                                    style={projectLinkButtonStyle}>
                                    Website
                                </Button>
                            </a>
                            <a target="_blank" rel="noreferrer" href={code}>
                                <Button
                                    disabled={!code}
                                    variant="primary"
                                    className="project-modal-button"
                                    style={projectLinkButtonStyle}>
                                    Code
                                </Button>
                            </a>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={() => {
                                console.log("click...")
                                setOpened(false)
                            }}
                            variant="secondary"
                            className="close-project-modal-button"
                            >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}