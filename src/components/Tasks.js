import React from 'react'
import Task from './Task.js'

function Tasks({ tasks }) {

    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} />))}
        </>
    )
}
Tasks.defaultProps = {
    tasks: "hello"
}
export default Tasks
