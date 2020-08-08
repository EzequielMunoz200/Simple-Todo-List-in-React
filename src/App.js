import React, { useState } from 'react';

function App() {


  const [userName, setUserName] = useState('John Doe'); //owner
  const [TaskItems, setTaskItems] = useState([
    { name: 'Task number one', done: true },
    { name: 'Task number two', done: false },
    { name: 'Task number three', done: false },
    { name: 'Task number four', done: true },
    { name: 'Task number five', done: false },
  ])

  const taskTableRows = () => {
    return TaskItems.map(task => (
      <tr key={task.name}>
        <td>{task.name}</td>
      </tr>

    ))
  }
  return (
    <div >
      <h1>Hello world!</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
