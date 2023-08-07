import { Task } from "./Task";
export const TaskList=()=>{

    const listadoTareas =[
        {texto: "Recoger los paquetes"},
        {texto: "Escoger el material"}
      ]

    return(
        <ul>
            {
                listadoTareas.map(tarea => (
                    <Task texto={tarea.texto}/>
                ))
            }
        </ul>
    )
}

