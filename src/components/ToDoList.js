import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="todo-list">
            <h1>Stuff I Need To Do</h1>
            <input
                type="text"
                placeholder="Add a new task"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;