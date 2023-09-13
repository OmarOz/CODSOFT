import { useState } from "react";
import axios from "axios";
import "../style/Add.css";

const Add = ({ trigger }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handlesubmit = () => {
    axios.post("http://localhost:8000/Lists", {
      title: title,
      description: desc,
    });
  };
  return trigger ? (
    <div className="Add">
      <div className="Add-inner">
        <form onSubmit={handlesubmit}>
          <div className="title">
            <label>Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>

          <div className="desc">
            <label>Description</label>
            <textarea
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <button>Add</button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Add;
