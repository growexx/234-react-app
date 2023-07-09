import React from 'react';
import { FaTimes } from 'react-icons/fa'

function Task({ task, onToggle, onDelete }) {
    return (
        <div key={task._id} className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task._id)}>
            <h3>
                {task.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task._id)} />
            </h3>
            <p>{task.day}</p>
            <h4 className={`${(task.status === 'To Do') ? 'todo' : (task.status === 'Done') ? 'done' : 'inprogress' }`}>
                {task.status}
            </h4>
        </div>
    )
}

export default Task;
