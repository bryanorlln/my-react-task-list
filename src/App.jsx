import './App.css'
import Header from './components/Header'
import { TaskList } from './components/TaskList.jsx'

function App() {
  return(
    <div className='container'>
    <Header></Header>
    <TaskList></TaskList>
    </div>
  )
  }
  
  
export default App;
