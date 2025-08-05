import React from 'react'
import '../styles/Home.css'
import Timer from '../components/Timer'
import TodoList from '../components/TodoList'

function Home() {
  return (
    <div className='homeContainer'>
        <Timer />
        <TodoList />
    </div>
  )
}

export default Home