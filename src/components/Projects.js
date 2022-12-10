import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import german from '../assets/img/german.jpg'

function Projects() {

    const projects = [
        {
            name: "2048",
            description: "A copy of the famous 2048 game with a nice autumn color theme. No libraries, pure CSS and JavaScript! Check it out.",
            code: "https://igorivanter.github.io/2048/",
            site: "https://github.com/IgorIvanter/2048"
        }
    ]

    const [project] = projects

    return (
        <section id="projects">
            <Container>
                <Row>
                    <Col>
                        <h1
                            className="text-center"
                            style={{
                                fontSize: "6rem",
                                fontWeight: 700,
                                marginBottom: "3rem",
                                marginTop: "5rem"
                            }}>
                            My Projects</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size={12} sm={6} md={4}>
                        <ProjectCard
                            {...project}
                        >
                            <div className="text-center" style={{
                                height: "calc(15rem - 4px)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "darkslateblue"
                            }}
                            >
                                <span style={{
                                    fontSize: "5rem"
                                }}>
                                    2048
                                </span>
                            </div>
                        </ProjectCard>
                    </Col>
                    <Col size={12} sm={6} md={4}>

                        <ProjectCard
                            name="Online German textbook"
                            description="This is a free online guide on learning the basics of German. I purposefully didn't use any libraries, just plain HTML and CSS, and that helped me to learn a lot of CSS."
                            code="https://github.com/IgorIvanter/free-german-course"
                            site="https://igorivanter.github.io/free-german-course/"
                        >
                            <img src={german} alt="" style={{
                                width: "100%",
                                maxHeight: "calc(15rem - 4px)"
                            }}></img>
                        </ProjectCard>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;