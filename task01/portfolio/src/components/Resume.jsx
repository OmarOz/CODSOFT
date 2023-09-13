import "../style/Resume.scss";
import resumePath from "../../public/Omar-Mahmoud.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <a href={resumePath} download="Omar-Mahmoud.pdf">
        Download PDF
      </a>
    </div>
  );
};

export default Resume;
