import React from 'react';
import TaskForm from '../components/taskForm/TaskForm';
import TasksPending from '../components/tasksPending/TasksPending';

const Home = () => {
    return (
        <>
            <TaskForm />
            <TasksPending />
        </>
    )
}

export default Home
