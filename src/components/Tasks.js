import React from 'react'

function Tasks({ tasks }) {

    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}
Tasks.defaultProps = {
    tasks: "hello"
}
export default Tasks
