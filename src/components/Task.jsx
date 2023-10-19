import useSetList from "../hooks/useSetList";
import { useState } from "react";

export const Task =(props)=>{    
    const {task,index}=props;
    const [subrayado, setSubrayado]=useState(false);
    
    const toggleSubrayado =()=>{
        setSubrayado(!subrayado);
    }
return(
    <>
    <li key={index}>
        <input type="checkbox" checked={subrayado} onChange={toggleSubrayado} />
        <label className={subrayado ? 'subrayado' : ''}>{task}</label>
        <button className="btnlist" onClick={() => deleteTask(index)}>Del</button>
        <button className="btnlist" onClick={() => handleEditTask(index)}>Agg</button>
    </li>
    </>
)

}

    