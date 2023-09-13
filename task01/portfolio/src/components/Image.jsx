import "../style/Image.scss";
import imgTest from "../assets/omar.jpeg";

const Image = () => {
  return (
    <div className="Image">
      <div className="text">
        I am a Computer Science student at Cairo University with expertise in
        software engineering specializations and concepts. I am highly
        enthusiastic about acquiring new technologies, knowledge, and hands-on
        experience.
      </div>
      <div className="img">
        <img src={imgTest}></img>
      </div>
    </div>
  );
};

export default Image;
