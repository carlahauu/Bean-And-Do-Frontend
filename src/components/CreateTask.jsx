import React, { useState } from 'react';
import '../styles/CreateFirstTask.css';
import axios from 'axios';

function CreateTask(props) {
    const [title, setTitle] = useState('');

    const handleAddTask = async () => {
        try {
            const newTask = { title };

            const response = await axios.post(`/api/task-lists/${localStorage.getItem('taskListId')}/tasks/create`, newTask);

            if (props.onTaskAdded) {
                props.onTaskAdded();
            }

        } catch (error) {
            console.error('Failed to create task:', error);
        }
    };

    return (
        <div className='createFirstTaskContainer'>
            <input
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='enter task name!'
            />
            <div className="firstTaskButton">
                <button className='cancelButton' onClick={props.handleCancel}>cancel</button>
                <button className='createFirstTaskBtn' onClick={handleAddTask}>add task!</button>
            </div>
        </div>
    );
}

export default CreateTask;
