import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [editTask, setEditTask] = useState(null);

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            if (editTask !== null) {
                // Update task
                const updatedTasks = tasks.map((task, index) =>
                    index === editTask ? taskInput : task
                );
                setTasks(updatedTasks);
                setEditTask(null);
            } else {
                // Add new task
                setTasks([...tasks, taskInput]);
            }
            setTaskInput('');
        }
    };

    const handleEditTask = (index) => {
        setTaskInput(tasks[index]); // Populate input with the task to edit
        setEditTask(index); // Store the index of the task being edited
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="todo-list">
            <h1>Stuff I Need To Do:</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button className="add-button" onClick={handleAddTask}>
                    {editTask !== null ? 'Edit Task' : 'Add Task'}
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <div className="button-container">
                            <button className="edit-button" onClick={() => handleEditTask(index)}>Edit</button>
                            <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;