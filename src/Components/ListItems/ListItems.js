import React from 'react';

import './ListItems.css'
import Button from '../UI/Button';

const ListItems = (props) => {

    const listItems = props.allItems.map((item, index) => (
        <p key={item.listId}>{item.listName}</p>
        /*<li key={item.id}>
            {item.checked ? (<label><s>{item.name} {item.amount}</s></label>) : (<p>{item.name} {item.amount}</p>)}
             <div>
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
             </div>
        </li>*/
    ));

    return (
        <div className="list-items-top">
            <p style={{textAlign: "center"}}>Name Amount</p>
            <div className="list-items">
                <ul>
                    {listItems}
                </ul>
            </div>
        </div>
    );
};

export default ListItems;