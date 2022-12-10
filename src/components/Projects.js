import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import german from '../assets/img/german.jpg'
import weather from '../assets/img/weather.jpg'

function Projects() {

    const projects = [
        {
            name: "2048",
            description: "A copy of the famous 2048 game with a nice autumn color theme. No libraries, pure CSS and JavaScript! Check it out.",
            code: "https://igorivanter.github.io/2048/",
            site: "https://github.com/IgorIvanter/2048",
            content: () => {
                return (
                    <div
                        className="text-center"
                        style={{
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
                    </div>)
            }
        },
        {
            name: "Online German textbook",
            description: "This is a free online guide on learning the basics of German. I purposefully didn't use any libraries, just plain HTML and CSS, and that helped me to learn a lot of CSS.",
            code: "https://github.com/IgorIvanter/free-german-course",
            site: "https://igorivanter.github.io/free-german-course/",
            content: () => {
                return <img src={german} alt="" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}></img>
            }
        },
        {
            name: "Weather around the world",
            description: "This is a weather app. This is my first project where I used React.js and API requests. When you search for a city, only cities with population greater than 0.5M people will be displayed. Information about the weather is from openweathermap API.",
            code: "https://github.com/IgorIvanter/weather-around-the-world",
            site: "#",
            content: () => {
                return <img src={weather} alt="" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}></img>
            }
        }
    ]


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