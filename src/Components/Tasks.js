import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((apapun) => (
        <Task key={apapun.id} task={apapun} />
      ))}
    </div>
  );
};

export default Tasks;
