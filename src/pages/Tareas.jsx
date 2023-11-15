import '../App.css'
import Header from '../components/Header.jsx';
import { TaskList } from '../components/TaskList.jsx';

function Tareas(){
    
    return(
    <div className='container'>  
    <Header></Header>
    <TaskList></TaskList>
    </div>
        
    )
}

export default Tareas;
