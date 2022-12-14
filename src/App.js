import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  // Show & hide form
  const [addForm, setAddForm] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor appoinement',
      day: 'Sep 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Sep 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Sep 6th at 4:30pm',
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(id, 'Reminder...');
  };

  // Toggle form
  const toggleForm = () => {
    setAddForm(!addForm);
  };
  return (
    <div className="container">
      <Header onClick={toggleForm} showForm={addForm} />
      {addForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'You have No Tasks'
      )}
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Header
//         title={'Something to override default value'} //Using Props
//         second={'Hi Mom ✈'}
//       />
//     </div>
//   );
// }

export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello from class</h1>
//       </div>
//     );
//   }
// }
