import React, {useState} from 'react'
import axios from 'axios'

function UpdateTask(props) {

    const [updatedTitle, setUpdatedTitle] = useState(props.taskTitle);

    const handleUpdateTask = () => {
        try {
            const updatedTask = { 
                id: props.taskId, 
                title: updatedTitle
            };

            axios.put(`/api/task-lists/${localStorage.getItem('taskListId')}/tasks/${props.taskId}/update`, updatedTask )
                .then(() => props.onTaskUpdated()); 

        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };


  return (
    <div className='createFirstTaskContainer'>
        <input
            type='text'
            value={updatedTitle}
            onChange={e => setUpdatedTitle(e.target.value)}
            placeholder='enter task name!'
        />
        <div className="firstTaskButton">
            <button className='cancelButton' onClick={props.handleCancel}>cancel</button>
            <button className='createFirstTaskBtn' onClick={handleUpdateTask}>update task!</button>
        </div>
    </div>
  )
}

export default UpdateTask