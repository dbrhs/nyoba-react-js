import { FaTimes } from "react-icons/fa";
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.name} <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>Pass this: {task.id}</p>
    </div>
  );
};

export default Task;
