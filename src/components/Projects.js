import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { removeTags } from '../helpers/helpers';
import ProjectCard from './ProjectCard';
import config from '../settings/config'


function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        console.log("From Projects.js component: projects state changed to:")
        console.log(projects)
    }, [projects])

    useEffect(() => {   // fetch projects from GraphQL endpoint
        const graphqlEndpoint = config.graphqlEndpoint
        const graphqlQuery = JSON.stringify({
            query: `
                query {
                    projects {
                        nodes {
                            id
                            content
                            featuredImage {
                                node {
                                    sourceUrl
                                }
                            }
                        }
                    }
                }`
        })

        fetch(graphqlEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: graphqlQuery
        })
        .then(graphqlResponse => graphqlResponse.json())
        .then(graphqlResponse => {
            console.log("GraphQL response from Projects.js:")
            console.log(graphqlResponse)
            graphqlResponse.data.projects.nodes.forEach(projectNode => {
                const projectNodeContentJSON = JSON.parse(removeTags(projectNode.content))
                setProjects(projects => [...projects, 
                    {
                        id: projectNode.id,
                        name: projectNodeContentJSON.name,
                        description: projectNodeContentJSON.description,
                        site: projectNodeContentJSON.site,
                        code: projectNodeContentJSON.code,
                        learned: projectNodeContentJSON.learned,
                        image: {
                            src: projectNode.featuredImage.node.sourceUrl,
                            alt: projectNode.featuredImage.node.altText,
                            style: projectNodeContentJSON.style
                        }
                    }
                ])
            })
        })
    }, [])

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
                            }} >
                            My Projects
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {projects.map((project) => (
                        <Col key={project.id} size={12} sm={6} md={4}>
                            <ProjectCard {...project} />
                        </Col>)
                    )}
                </Row>
            </Container>
        </section>
    );
}

export default Projects;