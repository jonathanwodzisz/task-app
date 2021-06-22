import Header from './components/Header.js'
import Tasks from './components/Tasks'
import './App.css';
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food',
        day: 'Feb 5th at 2:30am',
        reminder: false,
      }
    ])
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header title="Task" />
      {tasks.length > 0 ? <Tasks onDelete={deleteTask} tasks={tasks} /> : 'No Tasks Yet'}
    </div>
  );
}

export default App;
