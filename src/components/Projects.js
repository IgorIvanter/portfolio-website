import { Container, Row, Col } from 'react-bootstrap';
import { projects } from '../data/projects/projectsData';
import ProjectCard from './ProjectCard';


function Projects() {
    return (
        <section id="projects">
            <Container>
                <Row>
                    <Col>
                        <h1
                            className="text-center section-heading"
                            style={{
                                fontSize: "3rem",
                                fontWeight: 700,
                                marginTop: "3rem"
                            }}
                            >
                            My Projects
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {projects.map((project) => (
                        <Col key={project.name} size={12} sm={6} md={4}>
                            <ProjectCard {...project}>
                                {project.content()}
                            </ProjectCard>
                        </Col>)
                    )}
                </Row>
            </Container>
        </section>
    );
}

export default Projects;