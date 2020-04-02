import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';

const AddList = (props) => {
    const [enteredListNameText, setEnteredListNameText] = useState('')

    const addListHandler = (event) => {
        event.preventDefault();

        const newList = {
            id: Math.random().toString(),
            listName: enteredListNameText + " " + new Date().toLocaleString(),
            dateCreated: new Date().toLocaleString(),
            dateClosed : "",
            active: true
        };

        setEnteredListNameText('');

        props.onAddNewList(newList)
    }

    const listNameChangedHandler = event => {
        setEnteredListNameText(event.target.value)
    }

    return (
        <div>
            <Modal
                activator={({ setShow }) => (
                   <Button
                    clicked={() => setShow(true)}>
                        Add a new List
                    </Button> 
                )}>
                <form onSubmit={addListHandler}>
                    <input placeholder="List name" type="text" value={enteredListNameText} onChange={listNameChangedHandler}/><br/>
                    <button type="submit">Create a new list</button>
                </form>
            </Modal>
        </div>
    )
}

export default AddList;