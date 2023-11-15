import { Link } from "react-router-dom"

export function Menu() {
   return(
    <div>
        
        <ul className="menu">
            <li className="item-menu">
            <Link to={"/"} >Home</Link>
            </li>
            <li className="item-menu">
            <Link to={"/pages/tareas"} >Tareas</Link>
            </li>
            <li className="item-menu">
            <Link to={"/pages/sobrenosotros"} >Sobre Nosotros</Link>
            </li>
        </ul>
    </div>
   ) 

}