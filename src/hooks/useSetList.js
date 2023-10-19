import { useState,useEffect } from "react";


function useSetList() {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Función para crear una nueva tarea
  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);

  };

  // Función para borrar una tarea por índice
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Función para actualizar una tarea por índice
  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Utilizar useEffect para guardar las tareas en el localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    tasks,          // Lista de tareas
    createTask,     // Función para crear una tarea
    deleteTask,     // Función para borrar una tarea
    updateTask      // Función para actualizar una tarea
  };
}




export default useSetList;
