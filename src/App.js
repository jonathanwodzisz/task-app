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
        day: 'Feb 5th at 2:30om',
        reminder: true,
      },
      {
        id: 2,
        text: 'School',
        day: 'Feb 6th at 1:30om',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food',
        day: 'Feb 5th at 2:30am',
        reminder: false,
      }
    ])
  return (
    <div className="container">
      <Header title="Task" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
