import './App.css'
import Header from './components/Header'
import { Task } from './components/Task';
import { TaskList } from './components/TaskList'
import { useState,useEffect } from 'react'



function App() {

  return (
    <div>
         <Header/>
         <TaskList />
    </div>
  
  )

    
}

export default App
