import React, { useState } from 'react';


export const TaskCreator = props => {

    const [newTaskName, setnewTaskName] = useState('');
    const updateNewTaskValue = evt => setnewTaskName(evt.target.value);

    const createNewTask = (evt) => {
        evt.preventDefault();
        if (newTaskName !== '') {
            props.callback(newTaskName);
            setnewTaskName('');
        }
    }
    return (

        <form className="my-1 p-4 d-flex" onSubmit={createNewTask}>
            <input
                type="text"
                className="form-check mx-2"
                value={newTaskName}
                onChange={updateNewTaskValue}
            />

            <button className="btn shadow-1 small rounded-1 outline opening txt-blue" >
                <span className="outline-text">Add</span>
            </button>
        </form>


    )
}