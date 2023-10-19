import './App.css'
import Header from './components/Header'
import { Task } from './components/Task';
import { TaskList } from './components/TaskList'
import React, { useState, useEffect } from "react";
import useSetList from './hooks/useSetList';

function App() {
  return(
    <div className='container'>
    <Header></Header>
    <TaskList></TaskList>
    </div>
  )
  }
  
  
export default App;
