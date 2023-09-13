import { useState } from "react";
import Add from "../component/Add";
import ViewLists from "../component/ViewLists";
import "../style/Home.css";
const Home = () => {
  const [AddPopup, setAddPopup] = useState(false);
  const handleClick = () => {
    setAddPopup(true);
  };
  return (
    <div className="Home">
      <button className="Addbtn" onClick={handleClick}>
        Add
      </button>
      <div className="container">
        {AddPopup && (
          <div className="Add">
            {" "}
            <Add trigger={AddPopup} />
          </div>
        )}
        <ViewLists />
      </div>
    </div>
  );
};

export default Home;
