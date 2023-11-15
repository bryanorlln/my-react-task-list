import { useState, useEffect } from "react";

/* Hook Personalizado donde almacena las tareas  */
function useSetList() {
  const [tasks, setTasks] = useState([]);
  const [subrayados, setSubrayados] = useState([]);


  const createTask = (newTask) => {
    if (newTask.trim() !== ""){
    setTasks([...tasks, newTask]);
    setSubrayados([...subrayados, false ]);
    console.log("Send data to register");
  }else{
    console.log('Enter a task');
  }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedSubrayados = subrayados.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setSubrayados(updatedSubrayados);
  };

  const editTask = (index, newDescription) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newDescription;
    setTasks(updatedTasks);
  };

  const toggleSubrayado = (index) => {
    const updatedSubrayados = [...subrayados];
    updatedSubrayados[index]= !updatedSubrayados[index];
    setSubrayados(updatedSubrayados);
  };


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const storedSubrayados = JSON.parse(localStorage.getItem("subrayados")) || [];
    setTasks(storedTasks);
    setSubrayados(storedSubrayados);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("subrayados", JSON.stringify(subrayados));
  }, [tasks, subrayados]);

  return {
    tasks,
    subrayados,
    createTask,
    deleteTask,
    editTask,
    toggleSubrayado
  };
}

export default useSetList;