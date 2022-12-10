import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

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
                                border: "2px solid white",
                                height: "15rem",
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
                </Row>
            </Container>
        </section>
    );
}

export default Projects;