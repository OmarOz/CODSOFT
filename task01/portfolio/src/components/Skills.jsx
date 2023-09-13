import "../style/Skills.scss";
import problemSolving from "../assets/skills/problemSolvin.png";
import cpp from "../assets/skills/c++_logo.png";
import java from "../assets/skills/java-logo-1.png";
import react from "../assets/skills/react.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import sass from "../assets/skills/Sass.png";
import javascript from "../assets/skills/javascript.png";
import python from "../assets/skills/python.png";
import oop from "../assets/skills/oop.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="HTML">
        <img src={problemSolving}></img>
        <div>Problem Solving</div>
      </div>

      <div className="HTML">
        <img src={cpp}></img>
        <div>C++</div>
      </div>

      <div className="HTML">
        <img src={java}></img>
        <div>Java</div>
      </div>

      <div className="HTML">
        <img src={react}></img>
        <div>React</div>
      </div>

      <div className="HTML">
        <img src={html}></img>
        <div>HTML 5</div>
      </div>

      <div className="HTML">
        <img src={css}></img>
        <div>CSS</div>
      </div>

      <div className="HTML">
        <img src={sass}></img>
        <div>SASS</div>
      </div>

      <div className="HTML">
        <img src={javascript}></img>
        <div>Javascript</div>
      </div>

      <div className="HTML">
        <img src={oop}></img>
        <div>OOP</div>
      </div>

      <div className="HTML">
        <img src={python}></img>
        <div>Python</div>
      </div>
    </div>
  );
};

export default Skills;
