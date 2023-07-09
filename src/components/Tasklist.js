import React from 'react';
import Task from './Task';

function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <>
        {tasks.map(task => (<Task key={task._id} task={task} onToggle={onToggle} onDelete={onDelete} />))}
        </>
    )
}

export default TaskList;
