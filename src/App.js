import Header from './components/Header.js'
import Tasks from './components/Tasks'
import './App.css';
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3002/tasks');
    const data = await res.json();
    return data;
  }
  //Fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3002/tasks/${id}`);
    const data = await res.json();
    return data
  }
  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:3002/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json();

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }
  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:3002/tasks', {
      method: 'POST', headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks, data]);
    //const id = Math.floor(Math.random() * 10000) + 1;
    //const newTask = { id, ...task };
    //setTasks([...tasks, newTask]);

  }
  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3002/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header title="Task" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks onDelete={deleteTask} tasks={tasks} onToggle={toggleReminder} /> : 'No Tasks Yet'}
    </div>
  );
}

export default App;
