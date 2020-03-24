import React from 'react';

import './ListItems.css'
import Button from '../UI/Button';

const ListItems = (props) => {

    const listItems = props.allItems.map((item, index) => (
        <li key={item.id}>
            {item.checked ? (<p><s>{item.name} {item.amount}</s></p>) : (<p>{item.name} {item.amount}</p>)}
            <Button 
                value={() => props.increaseAmount(index)}
                label="+" />
            <Button 
                value={() => props.decreaseAmount(index)}
                label="-"/>
            <Button 
                value={() => props.checkItem(index)}
                label="v"/>
            <Button 
                value={() => props.removeItem(index)}
                label="del"/>
        </li>
    ));

    return (
        <div className="list-items">
            <ul>
                {listItems}
            </ul>
        </div>
    );
};

export default ListItems;