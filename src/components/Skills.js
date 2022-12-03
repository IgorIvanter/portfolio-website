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
        // the naming can be any, depends on you.
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
    return (
        <section className="skills" id="skills">
            <Carousel responsive={responsive}
                style={{
                    color: "white"
                }}
                infinite={true}>
                <div>
                    <img src={html5} alt="" width="400" style={{
                        padding: "1.5rem"
                    }}></img>
                </div>
                <div>
                    <img src={css3} alt="" width="400"></img>
                </div>
                <div>
                    <img src={js} alt="" width="400" style={{
                        float: "top"
                    }}></img>
                </div>
                <div>
                    <img src={react} alt="" width="400"></img>
                </div>
                <div>
                    <img src={linux} alt="" width="400" style={{
                        padding: "2rem"
                    }}></img>
                </div>
                <div>
                    <img src={cpp} alt="" width="400" style={{
                        padding: "1.5rem"
                    }}></img>
                </div>
                <div>
                    <img src={python} alt="" width="400" style={{
                        padding: "2.5rem"
                    }}></img>
                </div>
            </Carousel>
        </section>)
}

export default Skills