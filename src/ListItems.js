import React from 'react';

import './ListItems.css'
import Button from './Button';

const ListItems = (props) => {

    const listItems = props.allItems.map((item, index) => (
        <li key={item.id}>
            <label>{item.name} {item.amount}</label>
            <Button 
                increased={() => props.increaseAmount(index)}
                decreased={() => props.decreaseAmount(index)}
                checked={() => props.checkItem(item.id)}
                removed={() => props.removeItem(item.id)}/>
        </li>
    ))

    return (
        <ul className="list-items">
            {listItems}
        </ul>
    );
};

export default ListItems;