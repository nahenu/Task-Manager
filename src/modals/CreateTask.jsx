import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, setTaskList }) => {
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
  const Click = () => {
    setTaskList((prevalue) => {
      return [...prevalue, task];
    });
    setTask({
      title: " ",
      description: " ",
      priority: " ",
    });
    toggle();
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
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
              class="form-select"
              aria-label="Default select example"
              value={task.priority}
              name="priority"
              onChange={Change}
            >
              <option selected>Open this select menu</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={Click}>
          Create
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
