import { useState } from "react";
import Button from "./Components/Button";
import Tasks from "./Components/Tasks";

function App() {
  const [meh, setTasks] = useState([
    {
      id: 1,
      name: "Doctor 1",
      reminder: true,
    },
    {
      id: 2,
      name: "Doctor 2",
      reminder: true,
    },
    {
      id: 3,
      name: "Doctor 3",
      reminder: false,
    },
  ]);

  // deleting task
  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(meh.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      meh.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log("not really", id);
  };

  return (
    <div>
      <h1>Hello?</h1>
      <Button text="add" />
      {meh.length > 0 ? (
        <Tasks tasks={meh} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "There's no task left!"
      )}
    </div>
  );
}

export default App;
