import Carousel from "react-multi-carousel";
import html5 from "../assets/img/html5.svg"
import css3 from "../assets/img/css3.svg"
import js from "../assets/img/js.svg"
import react from "../assets/img/react.svg"
import python from "../assets/img/python.svg"
// import linux from "../assets/img/linux.svg"
import cpp from "../assets/img/cpp.svg"
import "react-multi-carousel/lib/styles.css";

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
    const skills = [
        {
            name: "HTML",
            src: html5,
            style: {
                padding: "5rem"
            }
        },
        {
            name: "CSS",
            src: css3,
            style: {
                padding: "4rem"
            }
        },
        {
            name: "JavaScript",
            src: js,
            style: {
                float: "top",
                padding: "2rem"
            }
        },
        {
            name: "React",
            src: react,
            style: {
                padding: "5rem"
            }
        },
        {
            name: "Python",
            src: python,
            style: {
                padding: "6rem"
            }
        },
        {
            name: "C++",
            src: cpp,
            style: {
                padding: "5rem"
            }
        },

        
    ]

    return (
        <section className="skills" id="skills">
            <h1
                className="text-center section-heading"
                style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                }}>
                My Skills
            </h1>
            <Carousel responsive={responsive}
                style={{
                    color: "white"
                }}
                infinite={true}>
                {skills.map(skill => (
                <div className="logo-box text-center" key={skill.name}>
                    <img src={skill.src} alt="" width={width} style={skill.style} />
                    <h3>
                        {skill.name}
                        </h3>
                </div>
                ))}
            </Carousel>
        </section>)
}

export default Skills