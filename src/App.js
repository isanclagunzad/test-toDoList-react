import styles from './App.module.css';
import classnames from 'classnames';
import { useState } from 'react';
import { Task } from './Task';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const saveInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      status: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (taskKey) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== taskKey;
    });
    // setTodoList(newTodoList);
    console.log(newTodoList);
  };

  const setComplete = (taskKey) => {
    const complete = { status: true };
    setTodoList(
      todoList.map((task) => {
        const updateTask = { ...task, ...complete };
        return task.id === taskKey ? updateTask : task;
      })
    );
  };

  return (
    <div className={classnames([styles.App, styles.App_header])}>
      <div className={classnames([styles.addTask])}>
        <input onChange={saveInput} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className={classnames([styles.list])}>
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              status={task.status}
              deleteTask={deleteTask}
              setComplete={setComplete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
