import { useState } from "react";
import useSetList from "../hooks/useSetList";
import { Task } from "./Task";
import App from "../App";

export const TaskList = (props) => {
  const { tasks, subrayados, createTask, deleteTask, editTask, toggleSubrayado} = useSetList();
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

 // Todos los eventos para los botones Crear, Borrar, Editar
  const handleCreateTask = () => {
    if (editingIndex !== null) {
      
      editTask(editingIndex, newTask);
      setEditingIndex(null);
    } else {
      createTask(newTask);
    }
    setNewTask("");
  };

  const handleEditTask = (index) => {
    
    setEditingIndex(index);
    setNewTask(tasks[index]);
  };

  const handleDeleteTask = (index) => {
    deleteTask(index);
    setNewTask("");
    setEditingIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateTask();
  };
 
  /* contador para las tareas con check */
  const countCompletedTasks = () => {
    return subrayados.filter((subrayado) => subrayado).length;
  };

  return (
    <>
    
    <div className="container2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nueva Tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btnCreate" onClick={handleCreateTask}>
          {editingIndex !== null ? "Guardar" : "Crear"}
        </button>
      </form>
      </div>

      <div className="container3"  >
        
        <ul>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              index={index}
              deleteTask={handleDeleteTask}
              subrayados={subrayados}
              toggleSubrayado={toggleSubrayado}
              editTask={handleEditTask}
            />
          ))}
        </ul>
        
      </div>
      <div className="container4">
        <p>
          Tareas completadas: {countCompletedTasks()} / {tasks.length}
        </p>
      </div>
   
  </>
  );

};


  
