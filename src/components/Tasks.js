import React from 'react'
import Task from './Task.js'

function Tasks({ tasks, onDelete, onToggle }) {

    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
        </>
    )
}
Tasks.defaultProps = {
    tasks: "hello"
}
export default Tasks
