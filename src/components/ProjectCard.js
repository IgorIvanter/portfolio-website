import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';


export default function ProjectCard(props) {
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        console.log(`New state: ${opened ? "opened" : "closed"}`)
    }, [opened])

    return (
        <div
            style={{
                width: "100%",
                height: "15rem",
                border: "2px solid white",
                margin: "2rem 0"
            }}
            onClick={() => setOpened(true)}>
            {props.children}
            <div onClick={e => e.stopPropagation()}>
                <Modal
                    show={opened}
                    onHide={() => setOpened(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    contentClassName="ProjectModal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {props.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {props.description}
                        <ul>
                            <li>
                                <a target="_blank" rel="noreferrer" href={props.site}>Hosted</a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href={props.code}>Code</a>
                            </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={() => {
                                console.log("click...")
                                setOpened(false)
                            }}
                            variant="secondary">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}