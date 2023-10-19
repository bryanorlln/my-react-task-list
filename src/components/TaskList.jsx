import { Task } from "./Task";
import { useState} from "react";
import useSetList from "../hooks/useSetList";
//Esta es la lista donde se agregan las tareas 

export const TaskList=(props)=>{
  const { tasks, createTask, deleteTask, updateTask } = useSetList();
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleCreateTask = () => {
      createTask(newTask);
      setNewTask("");
  };

  const handleEditTask = (index) => {
      setEditIndex(index);
      setNewTask(tasks[index]);
  };

  const handleUpdateTask = () => {
      updateTask(editIndex, newTask);
      setEditIndex(null);
      setNewTask("");
  };

  return (
      <div className="container2">
      <input
          type="text"
          placeholder="Nueva Tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
      />

      {editIndex !== null ? (
          <button onClick={handleUpdateTask}>Update</button>
      ) : (
          <button className="btnCreate" onClick={handleCreateTask}>Crear</button>
      )}
      <div className="container3">
      <ul>
          {tasks.map((task, index) => (
          <Task 
          key={index}
          task={task}>
              
          </Task>
          ))}
      </ul>
      </div>
      </div>
  );
  }


