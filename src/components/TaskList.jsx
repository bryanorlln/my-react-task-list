import { Task } from "./Task";
import { useState,useEffect } from "react";
export const TaskList=()=>{

    
   const [text, setText] = useState("");
   const [list, setList] = useState([]);
   

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('list'));
      setList(storedList);
  }, []);


  const añadir = () => {
    localStorage.setItem('list', JSON.stringify(list));
    const tarea = {texto: text};
    setList([...list, tarea]);
    setText("");

    localStorage.setItem('list', JSON.stringify(list));
  }
 
    return(

        <div>

            <input 
            type="text" 
            onChange={(inputText)=>{
              setText(inputText.target.value);
            }}/>

                <button 
                onClick={añadir}>Añadir</button>
            {
                list.map( (tarea,index) => (
                <Task
                key={index}
                texto={tarea.texto}/>
                ))
            }
        </div>
    )
}


