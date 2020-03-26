import React from 'react';

import './ListItems.css'
import Button from '../UI/Button';

const ListItems = (props) => {

    const fullLists = props.allItems.map((fullList) => (
        <div key={fullList.listId}>
            <h1>{fullList.listName}</h1>
            <p>Name Amount</p>
            <table>
            {fullList.items.map((item) => (
                <tr key={item.id}>
                    {item.checked ? (<><td><s>{item.name}</s></td> <td><s>{item.amount}</s></td></>) : (<><td>{item.name}</td> <td>{item.amount}</td></>)}
                    <td>
                    <Button 
                        value={() => props.increaseAmount(item.id)}
                        label="+" />
                    <Button 
                        value={() => props.decreaseAmount(item.id)}
                        label="-"/>
                    <Button 
                        value={() => props.checkItem(item.id)}
                        label="v"/>
                    <Button 
                        value={() => props.removeItem(item.id)}
                        label="del"/>
                    </td>
                </tr>
            ))}
            </table>
        </div>
        )
    );

    return (
        <div className="list-items">
            {fullLists}
        </div>
    );
};

export default ListItems;