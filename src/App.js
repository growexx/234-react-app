// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/Tasklist';
import AddTask from './components/AddTask';
import  Footer from './components/Footer';
import  About from './components/About';
import React, { useState, useEffect } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const res = await fetchTasks()
      setTasks(res)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/api/tasks/v1')
    const data = await res.json()
    return data;
  }

  // To Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/api/tasks/v1', { method: 'POST', body: JSON.stringify(task), headers: { 'content-type': 'application/json' } })
    const data = await res.json()
    setTasks([...tasks, { ...data?.data }])
  }

  // To delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}/v1`, { method: 'DELETE' })
    setTasks(tasks.filter(task => task._id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskIndex = tasks.findIndex(task => task._id === id)

    const res = await fetch(`http://localhost:5000/api/tasks/${id}/v1`, { method: 'PUT', body: JSON.stringify({ reminder: !tasks[taskIndex].reminder }), headers: { 'content-type': 'application/json' } })
    const data = await res.json()

    setTasks(tasks.map(task => (task._id === id) ? {
          ...task,
          reminder: data?.data?.reminder
        }
      : task)
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />
        <Routes>
          <Route path='/' element={
            <>
            {showAddTask && <AddTask onAdd={addTask} />}

            {
              (tasks && tasks.length) ?
              <TaskList tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> :
              <h4>No Task Found....</h4> 
            }
            </>
          } />
          <Route path='/about' Component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
