import Carousel from "react-multi-carousel";
import html5 from "../assets/img/html5.svg"
import css3 from "../assets/img/css3.svg"
import js from "../assets/img/js.svg"
import react from "../assets/img/react.svg"
 import python from "../assets/img/python.svg"
 // import git from "../assets/img/git.svg"
import linux from "../assets/img/linux.svg"
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

const iconPadding = "5rem"

function Skills() {
    return (
        <section className="skills" id="skills">
            <h1
                className="text-center section-heading"
                style={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    marginBottom: "3rem",
                    marginTop: "5rem"
                }}>
                My Skills
            </h1>
            <Carousel responsive={responsive}
                style={{
                    color: "white"
                }}
                infinite={true}>
                <div className="logo-box">
                    <img src={html5} alt="" width="400" style={{
                        padding: "5rem"
                    }}></img>
                </div>
                <div className="logo-box">
                    <img src={css3} alt="" width="400" style={{
                        padding: "4rem"
                    }}></img>
                </div>
                <div className="logo-box">
                    <img src={js} alt="" width="400" style={{
                        float: "top",
                        padding: "2rem"
                    }}></img>
                </div>
                <div className="logo-box">
                    <img src={react} alt="" width="400" style={{
                        padding: "5rem"
                    }}></img>
                </div>
                <div className="logo-box">
                    <img src={linux} alt="" width="400" style={{
                        padding: "5rem"
                    }}></img>
                </div>
                <div className="logo-box">
                    <img src={cpp} alt="" width="400" style={{
                        padding: "5rem"
                    }}></img>
                </div>
                <div className="logo-box">
                    <img src={python} alt="" width="400" style={{
                        padding: "6rem"
                    }}></img>
                </div>
            </Carousel>
        </section>)
}

export default Skills