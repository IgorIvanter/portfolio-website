import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';



// export default function ProjectModal(props) {
//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//             contentClassName="ProjectModal"
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     {props.name}
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 {props.children}
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick={props.onHide} variant="secondary">Close</Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }


export function ProjectCard(props) {
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        console.log(`New state: ${opened ? "opened" : "closed"}`)
    }, [opened])

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
            }}
            onClick={() => setOpened(true)}
        >
            {props.children}
            <div onClick={e => e.stopPropagation()}>
                <Modal
                    {...props}
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
                        Description
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