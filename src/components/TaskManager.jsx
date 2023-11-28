import { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./card/Card";
const TaskManager = () => {
  const getStorage = () => {
    const list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };
  const [modal, setModal] = useState(false);
  const [tasklist, setTaskList] = useState(getStorage());
  const toggle = () => {
    setModal(!modal);
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(tasklist));
  }, [tasklist]);
  const updateListArray = (obj, index) => {
    let tempList = tasklist;
    tempList[index] = obj;
    window.location.reload();
    localStorage.setItem("lists", JSON.stringify(tempList));
    setTaskList(tempList);
  };
  return (
    <>
      <div className="header text-center">
        <h3>Task Manager </h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {tasklist.map((e, i) => {
          return (
            <Card
              taskObj={e}
              index={i}
              setTaskList={setTaskList}
              updateListArray={updateListArray}
            />
          );
        })}
      </div>
      <CreateTask toggle={toggle} modal={modal} setTaskList={setTaskList} />
    </>
  );
};

export default TaskManager;
