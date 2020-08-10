import React, { useState } from 'react';

//imports components
import { TaskRow } from './components/TaskRow';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { VisibilityControl } from './components/VisibilityControl';

function App() {


  const [userName, setUserName] = useState('John Doe'); //owner
  const [taskItems, setTaskItems] = useState([
    { name: 'Task number one', done: true },
    { name: 'Task number two', done: false },
    { name: 'Task number three', done: false },
    { name: 'Task number four', done: true },
    { name: 'Task number five', done: false },
  ]);

  const [showCompleted, setShowCompleted] = useState(true)


  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)))

  const taskTableRows = (doneValue) =>
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ))

  return (
    <div>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator callback={createNewTask} />
      <table className="table striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>
      <div className="txt-center p-4">
        <VisibilityControl
          description="Completed Tasks"
          isChecked={showCompleted}
          callback={checked => setShowCompleted(checked)}
        />
      </div>

      {
        showCompleted && (
          <table className="table striped">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;
