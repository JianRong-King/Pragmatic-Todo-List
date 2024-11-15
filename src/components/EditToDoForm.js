import React, {useState} from 'react';

export const EditToDoForm    = ({editTodo, task}) => { // takes in addTodo as a prop
        const [value, setValue] = useState(task.task);
        const handleSubmit = e => {
            e.preventDefault();

            editTodo(value, task.id);

            setValue(''); // clear the input field after submitting
        }

    return (
        <form className = 'TodoForm' onSubmit={handleSubmit}>
            <input type = "text" className = 'todo-input'
            value= {value}
            placeholder= 'Update Task' 
            onChange ={e => setValue(e.target.value)} // showing in the text box
            />

            <button type='submit' className = "todo-btn" >
                Update Task
            </button>  
        </form>
    )
}