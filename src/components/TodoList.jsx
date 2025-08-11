import React, {useState, useEffect} from 'react'
import '../styles/TodoList.css'
import CreateFirstTask from './CreateFirstTask';
import axios from 'axios'
import { FaCheck } from "react-icons/fa";
import CreateTask from './CreateTask';
import UpdateTask from './UpdateTask';
import {BarLoader} from 'react-spinners'

function TodoList() {
    const [firstTaskCreated, setfirstTaskCreated] = useState(false);
    const [createFirstTask, setCreateFirstTask] = useState(false); 
    const [addTask, setaddTask] = useState(false); 
    const [updateTask, setUpdateTask] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState(""); 
    const [taskID, setTaskID] = useState(""); 
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("taskListId")) {
            setfirstTaskCreated(true);
        }
    }, []);
      

    useEffect(() => {
        fetchTasks()
    }, [firstTaskCreated]);

    const fetchTasks = () => {
        setLoading(true)
        axios.get(`/api/task-lists/${localStorage.getItem("taskListId")}`)
            .then(res => {
                setTasks(Array.isArray(res.data) ? res.data : res.data.tasks || []);
                setLoading(false); 
            })
            .catch(err => console.error(err));
    };
    

    const createFirstTaskForm = () => {
        setfirstTaskCreated(true);
        setCreateFirstTask(true);
        setaddTask(false); 
    };

    const createTask = () => {
        setaddTask(true);
    }

    const handleUpdateTaskForm = (taskId) => {
        axios.get(`/api/task-lists/${localStorage.getItem('taskListId')}/tasks/${taskId}`, localStorage.getItem('taskListId'), taskId)
            .then(res => {
                setTaskTitle(res.data.title);
                setTaskID(res.data.id); 
                setUpdateTask(true);
            })
    }

    const handleTaskAdded = () => {
        setaddTask(false); 
        setfirstTaskCreated(true);
        setCreateFirstTask(false);
        fetchTasks(); 
    };

    const handleTaskUpdated = () => {
        setUpdateTask(false); 
        setfirstTaskCreated(true);
        setCreateFirstTask(false);
        fetchTasks(); 
    };
      
    const handleFirstTaskCancel = () => {
        setfirstTaskCreated(false);
        setCreateFirstTask(false);
        setfirstTaskCreated(true);
        setCreateFirstTask(false);
    }

    const handleTaskCancel = () => {
        setaddTask(false); 
    }

    const handleUpdateTaskCancel = () => {
        setUpdateTask(false); 
        setaddTask(false); 
    }

    const handleCompleted = (taskId) => {

        axios.delete(`/api/task-lists/${localStorage.getItem('taskListId')}/tasks/${taskId}/delete`, localStorage.getItem('taskListId'), taskId)
            .then(() => fetchTasks())

        axios.put(`/api/task-lists/${localStorage.getItem('taskListId')}/tasks/increment`)
    }
      

  return (
    <div className='todoContainer'>
        <div className="heading">
            <div className="left-line"></div>
            <h2>to-do list</h2>
            <div className="right-line"></div>
        </div>
        {loading ? (
            <div className="loader">
                <BarLoader size="10" color='#4E2A09'/>
                <p>
                    ... loading ...
                    <br></br>
                    could take up to 50 secs
                </p>
            </div>
        ) : (
            <div className="todoItems">
                <div className="todoList">
                        {tasks.map((task, i) => (
                        <div className="todoItem">
                            <div className="editButton" onClick={() => handleUpdateTaskForm(task.id)}>
                                <button>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                            </div>
                            <p key={i}>{task.title}</p>
                            <button onClick={() => handleCompleted(task.id)} className="completedButton">
                                <FaCheck/>
                            </button>
                        </div>
                        ))}
                </div>
                {!firstTaskCreated ? (
                    <div className="noTasks">
                        <p>Start fresh — click the button below to brew your first task and get productive!</p>
                        <button onClick={createFirstTaskForm}>create task</button>
                    </div>
                ) : createFirstTask ? (
                    <CreateFirstTask handleCancel={handleFirstTaskCancel} onTaskAdded={handleTaskAdded}/>
                ) : updateTask ? (
                    <UpdateTask taskId={taskID} taskTitle={taskTitle} handleCancel={handleUpdateTaskCancel} onTaskUpdated={handleTaskUpdated}/>
                ) : !addTask ? (
                    <button className='addTaskBtn' onClick={createTask}>add task!</button>
                ) : (
                    <CreateTask handleCancel={handleTaskCancel} onTaskAdded={handleTaskAdded}/>
                )}
            </div>
        )}
    </div>
  )
}

export default TodoList