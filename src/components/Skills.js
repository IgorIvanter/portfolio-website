import Carousel from "react-multi-carousel";
import { skillsData } from '../data/skills/skillsData';


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
                {skillsData.map(skill => (
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