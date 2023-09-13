import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/Edit.css";

function Edit({ trigger, id }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState(false);
  const [lists, setLists] = useState(null);
  const [done, setdone] = useState(false);

  async function editList() {
    const response = await axios.put("http://localhost:8000/Lists/" + id, {
      title: title,
      description: desc,
    });
    console.log(response);
  }
  const handlesubmit = () => {
    setTitle(lists.title);
    // setDesc(lists.description);
    console.log("title from handelsubmit: ", desc);
    editList();
  };

  useEffect((e) => {
    async function getLists() {
      const response = await axios.get("http://localhost:8000/Lists/" + id);
      console.log(response.data);
      setLists(response.data);
      console.log("edit lists: ", lists);
      setTitle(response.data.title);
      setDesc(response.data.description);
      setdone(true);
    }
    getLists();
  }, []);

  console.log("id: ", id);

  return trigger ? (
    <div className="Edit">
      <div className="Edit-inner">
        <form onSubmit={handlesubmit}>
          {done && (
            <div className="title">
              <label>Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
          )}
          {done && (
            <div className="desc">
              <label>Description</label>
              <textarea
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          )}

          <button>Confirm</button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Edit;
