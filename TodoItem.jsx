import './TodoItem.css';


const TodoItem = (props)=> {
const {text, id, isCompleted} = props;



    return (
        <div key={id} className="TodoItem">
            <input type="checkbox"  checked={isCompleted} onChange={(e)=> props.isCopletedTodo(id, e.target.checked)} />
            <span>{text}</span>
            <button className='delete' onClick={()=> props.delteTodoItem(id)}>Delete</button>
       </div>
    )
}

export default TodoItem;