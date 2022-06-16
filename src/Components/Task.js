import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.name}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>Pass this: {task.id}</p>
      <h2>{task.reminder}</h2>
    </div>
  );
};

export default Task;
