import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useEffect, useState } from "react";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [task, setTask] = useState({
    title: " ",
    description: " ",
    priority: " ",
  });
  const Change = (e) => {
    console.log(task);
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const Update = (e) => {
    e.preventDefault();
    let tempobj = { ...task };
    updateTask(tempobj);

    setTask({
      title: " ",
      description: " ",
      priority: " ",
    });
    toggle();
  };
  useEffect(() => {
    setTask({
      title: taskObj.title,
      description: taskObj.description,
      priority: taskObj.priority,
    });
  }, []);
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              id=""
              className="form-control"
              value={task.title}
              onChange={Change}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              name="description"
              value={task.description}
              onChange={Change}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Priority</label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={task.priority}
              name="priority"
              onChange={Change}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={Update}>
          Update
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
