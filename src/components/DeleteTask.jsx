const DeleteTask = ({ setTaskList, index }) => {
  const Click = (id) => {
    setTaskList((prevalue) => {
      return prevalue.filter((e, i) => {
        return id !== i;
      });
    });
  };

  return (
    <span
      class="material-symbols-outlined"
      onClick={() => Click(index)}
      style={{
        cursor: "pointer",
      }}
    >
      delete
    </span>
  );
};

export default DeleteTask;
