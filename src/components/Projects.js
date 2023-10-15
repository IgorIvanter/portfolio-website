import { Container, Row, Col } from 'react-bootstrap';
import { projects } from '../data/projects/projectsData';
import ProjectCard from './ProjectCard';
import { useEffect, useState } from 'react';


function Projects() {
    const urlBase = "https://test.igorivanter.com/wp-json/wp/v2/"

    // posts to be fetched from wordpress
    const [posts, setPosts] = useState([])

    // fetching posts from wordpress via normal Rest API
    // useEffect(() => {
    //     const postsEndpoint = new URL("posts", urlBase)

    //     fetch(postsEndpoint)
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log(result)
    //             setPosts(result)
    //             for (let i = 0; i < result.length; i++) {
    //                 console.log(`Post: ${result[i].title.rendered}, Featured Image ID: ${result[i].featured_media}`)
    //             }
    //             return result
    //         })
    // }, [])

    // fetching posts from wordpress via GraphQL
    useEffect(() => {
        const graphqlEndpoint = "https://test.igorivanter.com/graphql"
        const graphqlQuery = JSON.stringify({
            query: `
                query {
                    posts {
                        nodes {
                        id
                        title
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
                console.log("GraphQL response:")
                console.log(graphqlResponse.data.posts.nodes)
                const data = []
                graphqlResponse.data.posts.nodes.forEach(node => {
                    data.push({
                        id: node.id,
                        title: node.title,
                        featuredImageURL: node.featuredImage ? node.featuredImage.node.sourceUrl : null
                    })
                })
                console.log("Data:")
                console.log(data)
                setPosts(data)
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
                            }}
                            >
                            My Projects
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {posts.map((post) => (
                        <Col key={post.id} size={12} sm={6} md={4}>
                            <h1>{post.title}</h1>
                            <img src={post.featuredImageURL}></img>
                        </Col>)
                    )}
                </Row>
            </Container>
        </section>
    );
}

export default Projects;