import { useRef } from 'react';
import './TodoHeader.css';


const TodoHeader = (props)=> {
    const text = useRef();

    const onTextChange = ()=> {
        props.createTodo(text.current.value);
    }

    const onAdd = ()=> {
        props.addTodo();
        text.current.value = "";
    }

    return (
        <div className='TodoHeader'>
             <input type="text"  ref={text} onChange={onTextChange} />
             <button  onClick={onAdd}>Add</button>
        </div>
    )
}


export default TodoHeader;