import styles from './App.module.css';
export const Task = (props) => {
    return (
        <div data-id={props.id} className={props.status && styles.Complete}>
            {props.status ? 'true' : 'false'}
            <h1>{props.taskName}</h1>
            <button onClick={() => props.setComplete(props.id)} style={props.status ? {display:'none'} : {display:'block'}}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}