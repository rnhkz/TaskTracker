import Task from './Task'

const tasks = ({tasks, onDelete, onToggle}) =>{
    return(
        <>
            {tasks.map((task) =>
                <Task key={task.key} task={task} onDelete={onDelete} onToggle={onToggle}/>
            )}
        </>
    )
}

export default tasks;