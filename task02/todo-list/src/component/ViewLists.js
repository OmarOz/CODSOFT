import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/List.css";
import Edit from "./Edit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ViewLists() {
  const [lists, setLists] = useState(null);
  const [editPopup, setEditPopup] = useState(false);
  const [edit, setEdit] = useState(false);

  const [id, setID] = useState(false);

  useEffect((e) => {
    async function getLists() {
      const response = await axios.get("http://localhost:8000/Lists");
      console.log(response);
      setLists(response.data);
      console.log("lists: ", lists);
    }
    getLists();
  }, []);

  const handleClick = (id) => {
    setID(id);
    setEditPopup(true);
    setEdit(true);
    console.log("Id from view:", id);
  };

  const deleteHandeler = (id) => {
    axios.delete("http://localhost:8000/Lists/" + id);
    window.location.reload(true);
  };
  return (
    <div className="ViewLists">
      {edit && (
        <div className="edit">
          {" "}
          <Edit trigger={editPopup} id={id} />
        </div>
      )}
      {lists &&
        lists.map((e) => (
          <div className="list">
            <div className="title">
              {e.title}
              <div className="btns">
                <button onClick={() => handleClick(e.id)}>Edit</button>

                <button onClick={() => deleteHandeler(e.id)}>Delete</button>
              </div>
            </div>
            <div className="desc">{e.description}</div>
          </div>
        ))}
    </div>
  );
}

export default ViewLists;
