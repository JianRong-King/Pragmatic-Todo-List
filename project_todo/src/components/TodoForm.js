import React, {useState} from 'react';

export const TodoForm = ({addTodo}) => {
        const [value, setValue] = useState('');
        const handleSubmit = e => {
            e.preventDefault();

            addTodo(value);

            setValue(''); // clear the input field after submitting
        }

    return (
        <form className = 'TodoForm' onSubmit={handleSubmit}>
            <input type = "text" className = 'todo-input'
            value={value}
            placeholder= 'What is the task today?' 
            onChange ={e => setValue(e.target.value)}
            />
            <button type='submit' className = "todo-btn" >
                Add Task
            </button>
        </form>
    )
}

// form element is used to create an HTML form for user input
// grouping input by fields, serves as a container for form controls // text fields, checkboxes, radio buttons, buttons, etc.) that allow users to input data.

// In this example we are using form
// which holds a input type of text and a button
// form is a jsx element