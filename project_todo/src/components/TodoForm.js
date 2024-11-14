import React from 'react';

export const TodoForm = () => {
    return (
        <form className = 'TodoForm'>
            <input type = "text" className = 'todo-input'

            placeholder= 'What is the task today?' />
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