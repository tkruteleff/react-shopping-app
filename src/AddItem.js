import React, { useState } from 'react';

import './AddItem.css';

const AddItem = (props) => {
    const[enteredNameText, setEnteredNameText] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');

    const addItemHandler = (event) => {
      event.preventDefault();
  
      const newItem = {
        id: Math.random().toString(),
        name: enteredNameText,
        amount: enteredAmount
      };

      setEnteredNameText('');
      setEnteredAmount('');

      props.onAddNewItem(newItem)
    }
  
    const nameChangedHandler = event => {
        setEnteredNameText(event.target.value)
    }

    const amountChangedHandler = event => {
      setEnteredAmount(event.target.value)
    }

    return (
        <form onSubmit={addItemHandler} className="add-item">
            <input placeholder="Item name" type="text" value={enteredNameText} onChange={nameChangedHandler} /><br />
            <input placeholder="Amount" type="number" value={enteredAmount} onChange={amountChangedHandler} />
            <button type="submit">Add grocery to list</button>
        </form>
    )
};

export default AddItem;