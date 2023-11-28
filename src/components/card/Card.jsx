import React, { useState } from "react";
import CheckTask from "../ChecktTask";
import DeleteTask from "../DeleteTask";
import { Link } from "react-router-dom";
import EditTask from "../../modals/EditTask";

const Card = ({ taskObj, index, setTaskList, updateListArray }) => {
  const [modal, setmodal] = useState(false);
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryCOlor: "#96bcea",
    },
    {
      primaryColor: "#F9D288",
      secondaryCOlor: "#f1dca9",
    },
    {
      primaryColor: "#5DC250",
      secondaryCOlor: "#a3f798",
    },
    {
      primaryColor: "#F48687",
      secondaryCOlor: "#edb6b6",
    },
    {
      primaryColor: "#F3F3OFD",
      secondaryCOlor: "#B964F7",
    },
  ];
  const line = {
    textDecoration: "line-through",
  };
  const none = {
    textDecoration: "none",
  };
  const [check, setCheck] = useState(true);

  const date = new Date();
  const toggle = () => {
    setmodal(!modal);
  };
  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const day = date.toLocaleDateString();
  return (
    <div
      className="card-wrapper mr-5"
      style={{ borderTop: `4px solid ${colors[index % 5].primaryColor}` }}
    >
      <div className="cart-top" style={{ backgroundColor: "chartreuse" }}></div>
      <div className="task-holder">
        <div
          className="topheader"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            className={check ? "card-header" : "card-header title"}
            style={{ backgroundColor: `${colors[index % 5].secondaryCOlor}` }}
          >
            {taskObj.title}
          </span>
          <span>{day}</span>
        </div>

        <p style={check ? none : line} className="decription mt-1">
          {taskObj.description}
        </p>

        <Link to={`/card/${index}`} style={{ textAlign: "right" }}>
          <button type="button" className="btn btn-outline-info">
            Read More
          </button>
        </Link>
        <span style={check ? none : line}>{taskObj.priority}</span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CheckTask setCheck={setCheck} check={check} />
          <div className="icon">
            <span
              class="material-symbols-outlined"
              onClick={() => setmodal(true)}
              style={{ cursor: "pointer" }}
            >
              edit
            </span>

            <DeleteTask setTaskList={setTaskList} index={index} />
          </div>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
        setTaskList={setTaskList}
      />
    </div>
  );
};

export default Card;
