import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
const ChildCard = () => {
  const params = useParams();
  const { id } = params;
  const getitem = () => {
    const arr = localStorage.getItem("lists");
    if (arr) {
      return JSON.parse(arr);
    } else {
      return [];
    }
  };
  const [state, setstate] = useState(getitem());

  const Click = () => {
    getitem();
    console.log(state);
  };

  return (
    <div onClick={Click} className="CardContainer">
      {[state[id]].map((e) => {
        return (
          <div
            className="card"
            style={{
              width: "18rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px ",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">{e.description}</p>
              <p className="card-text">{e.priority}</p>
              <Link to="/" className="card-link">
                <button type="button" class="btn btn-danger">
                  Back
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChildCard;
