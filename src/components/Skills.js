import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import config from "../settings/config.json";   // config file containing the GraphQL endpoint
import { removeTags } from "../helpers/helpers";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Skills() {
    const width = 400
    const [posts, setPosts] = useState([])

    // fetching posts from wordpress via GraphQL

    // the content of the post is interpreted as a stringified JSON object (no newline 
    // symbols are allowed, all quotes should be double quoutes, and you should always use the 
    // "preformatted" formatting option) representing the style 
    // to be applied to the <img> tag containing the skill SVG icon
    
    // example of a 'good' post content: { "padding": "5rem", margin: "5rem" }

    useEffect(() => {
        const graphqlEndpoint = config.graphqlEndpoint
        const graphqlQuery = JSON.stringify({
            query: `
                query {
                    posts {
                        nodes {
                        id
                        title
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
                console.log("GraphQL response:")
                console.log(graphqlResponse.data.posts.nodes)
                const data = []
                graphqlResponse.data.posts.nodes.forEach(node => {
                    try {    
                        data.push({
                            id: node.id,
                            title: node.title,
                            // if post content is null, then style is set to an empty object
                            style: node.content ? JSON.parse(removeTags(node.content)) : {},
                            featuredImageURL: node.featuredImage ? node.featuredImage.node.sourceUrl : null
                        })
                    } catch (error) {
                        console.log(`Error parsing JSON object: ${node.title}`)
                        console.log(error)
                    }
                })
                console.log("Data:")
                console.log(data)
                setPosts(data)
            })
    }, [])

    useEffect(() => {
        console.log(`\n\nPosts State Change:`)
        console.log(posts)
    }, [posts])

    return (
        <section
            className="skills"
            id="skills" >
            <h1
                className="text-center section-heading"
                style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                }}>
                My Skills
            </h1>
            <Carousel
                responsive={responsive}
                // TODO: export all these inline styles to a separate CSS file
                style={{ color: "white" }}
                infinite={true} >
                {posts.map(post => (
                    <div
                        key={post.id}
                        className="logo-box text-center" >
                        <img
                            src={post.featuredImageURL}
                            style={post.style} 
                            width={width}
                            alt="" />
                        <h3>{post.title}</h3>
                    </div>
                ))}
            </Carousel>
        </section>)
}

export default Skills