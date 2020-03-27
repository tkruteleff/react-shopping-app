import React from 'react';

import './ListItems.css'
import Button from '../UI/Button';

const ListItems = (props) => {

    const fullLists = props.allItems.map((fullList) => (
        <div key={fullList.listId}>
            <h1>{fullList.listName}</h1>
            <p>Name Amount</p>
            <table>
                <tbody>
                    {fullList.items.map((item) => (
                        <tr key={item.id}>
                            {item.checked ? (<><td><s>{item.name}</s></td><td><s>{item.amount}</s></td></>) : (<><td>{item.name}</td><td>{item.amount}</td></>)}
                            <td>
                            <Button 
                                btnType="Increase"
                                clicked={() => props.increaseAmount(item.id)}>+</Button>
                            <Button
                                btnType="Decrease" 
                                clicked={() => props.decreaseAmount(item.id)}>-</Button>
                            <Button 
                                btnType="Check"
                                clicked={() => props.checkItem(item.id)}>v</Button>
                            <Button 
                                btnType="Delete"
                                clicked={() => props.removeItem(item.id)}>del</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
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