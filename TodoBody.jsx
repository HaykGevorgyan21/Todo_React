import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoHeader from '../TodoHeader/TodoHeader'
import './TodoBody.css';
import TodoFooter from '../TodoFooter/TodoFooter';


const TodoBody = ()=> {
    const [newTodo, setNewTodo] = useState("");

    const [todos, setTodos] = useState([]);
    console.log(todos);
  
     function createTodo (text ){

          const newTodo =  {
            id:Math.random(),
            text: text,
            isCompleted: false
        }
        setNewTodo(newTodo);
    }

    function addTodo(){
        setTodos([...todos, newTodo]);

    }
    

    const isCopletedTodo = (id, bool)=> {
        const completedTodos = todos.map((todo)=>{
            if(id === todo.id){
                return {...todo, isCompleted: bool}
            }
            return todo;
        })
        setTodos(completedTodos);
    }

    function deleteCopleted(){
        const finalTodos = todos.filter((todo)=>{
            return todo.isCompleted === false;
        });
        setTodos(finalTodos);
    }

    function delteTodoItem(id){
        const deleted = todos.filter((todo)=> {
              return  todo.id !== id;
        });
        setTodos(deleted);
    }


    return (
      <>
        <TodoHeader createTodo={createTodo} addTodo={addTodo}/>
        <div className='TodoBody'>
        
             {
                todos.map((todo)=>{
                    return <TodoItem key={todo.id}
                                     id={todo.id} text={todo.text} 
                                     isCompleted={todo.isCompleted} 
                                     isCopletedTodo={isCopletedTodo}
                                     delteTodoItem={delteTodoItem}
                                     />
                 })
             }
        </div>
        <TodoFooter todos={todos} deleteCopleted={deleteCopleted}/>
      </>
    )
}


export default TodoBody;