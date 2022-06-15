import Header from "./Components/Header";
import Button from "./Components/Button";
import Tasks from "./Components/Tasks";
import { useState } from "react";

function App() {
  const [meh, setTasks] = useState([
    {
      id: 1,
      name: "Doctor 1",
    },
    {
      id: 2,
      name: "Doctor 2",
    },
    {
      id: 3,
      name: "Doctor 3",
    },
  ]);
  return (
    <div className="Apapun">
      <h1>Hello?</h1>
      <Header title={1} />
      <Button color="steelBlue" text="Add no thanks" />
      <Tasks tasks={meh} />
    </div>
  );
}

export default App;
