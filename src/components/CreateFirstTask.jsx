import React, {useState} from 'react'
import '../styles/CreateFirstTask.css'
import axios from 'axios'

function CreateFirstTask(props) {
    const [title, setTitle] = useState('');

    const handleCreate = () => {
        try {
            const newTaskList = {
                title
            };

            console.log(title)

            axios.post('/api/task-lists', newTaskList)
                .then(response => {
                    const taskListId = response.data.id;
                    localStorage.setItem('taskListId', taskListId);
                    axios.post(`/api/task-lists/${taskListId}/tasks/create`, newTaskList)
                        .then(() => props.onTaskAdded())
                })
                .catch(error => {
                    console.error('Error creating task list or task:', error);
                });

        } catch (error) {
            console.error('Failed to create task list:', error);
        }
    };
    
  return (
    <div className='createFirstTaskContainer'>
        <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='enter task name!'></input>
        <div className="firstTaskButton">
            <button className='cancelButton' onClick={props.handleCancel}>cancel</button>
            <button className='createFirstTaskBtn' onClick={handleCreate}>create first task!</button>
        </div>
    </div>
  )
}

export default CreateFirstTask