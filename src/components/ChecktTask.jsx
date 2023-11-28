const CheckComplete = ({ setCheck, check }) => {
  return (
    <div className="checktask" style={{ display: "flex", gap: "10px" }}>
      <input
        type="checkbox"
        style={{ cursor: "pointer" }}
        onClick={() => setCheck(!check)}
      />
      {check ? (
        <span className="red">Not Completed</span>
      ) : (
        <span className="green">Completed</span>
      )}
    </div>
  );
};

export default CheckComplete;
