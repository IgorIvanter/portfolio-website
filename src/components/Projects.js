import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import german from '../assets/img/german.jpg'
import weather from '../assets/img/weather.jpg'

function Projects() {

    const projects = [
        {
            name: "Online German textbook",
            description: "This is a website that will teach you the basics of German language (since in this country people don't speak JavaScript). The website consists of two modules: basic and advanced. The lessons provided will help you get the basic grammar and vocabluary fast, so that you can start speaking and having fun after a couple of days. I build this site from scratch, without any CSS library - and I ain't doing this again!:) But it helped me get A LOT more comfortable with CSS.",
            learned: ["Advanced CSS", "Linking multiple CSS files to one webpage", "Responsive design using media queries", "Animated hover effects", "Responsive grid layout", "CSS variables"],
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
            description: "This is a weather app. It allows you to search for a city (minimum population 0.5M people) and see the current weather there, as well as a weather forecast for the next 5 days (with an interval of 3 hours). For every timestamp, temperature, wind speed and a weather description (eg. snow, rain, clouds) is available. To build this app I used React. To retrieve information about the weather I used the openweathermap API.",
            learned: ["Basics of React: components, built-in and custom hooks, conditional rendering, context, data flow via props, rendering multiple components using Array.map(), inline styling, JSX and how it's transpiled to JS, etc.", "API requests using 'fetch() function'", "Handling request being sent too often, setting timeout between requests, aborting old requests", "JS Promises", "Extracting React components and functions into separate files", "Working with unix timestampes and Date() object"],
            code: "https://github.com/IgorIvanter/weather-around-the-world",
            site: "https://igorivanter.github.io/weather-app/",
            content: () => {
                return <img src={weather} alt="" style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}></img>
            }
        },
        {
            name: "2048",
            description: "This is a copy of the famous 2048 game. Use arrows or WASD keys to swipe left, right, up, or down. Every time two tiles withe equal numbers collide, they combine into a new tile with double that number. The goal of the game is to reach the number 2048. This was my first project using JavaScript that taught me a lot.",
            learned: ["The basics of JavaScript: DOM manipulation, event listeners, classes, modules, etc.", "Basic animations", "Async functions"],
            code: "https://github.com/IgorIvanter/2048",
            site: "https://igorivanter.github.io/2048/",
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
    ]


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