import React from 'react';

import './ListItems.css'
import Button from '../UI/Button';

const ListItems = (props) => {

    console.log(props)

    const fullLists = props.allItems.map((fullList, index) => (
        <>
            <h1 key={fullList.listId}>{fullList.listName}</h1>
            {fullList.map(items => (
                <li key={items.id}>
                    {items.checked ? (<label><s>{items.name} {items.amount}</s></label>) : (<p>{items.name} {items.amount}</p>)}
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
                </li>
            ))}
        </>
        )
    );

    /*const listItems = props.allItems.map((item, index) => (
        <>
            <li key={item.items.id}>
                {item.items.checked ? (<label><s>{item.items.name} {item.items.amount}</s></label>) : (<p>{item.items.name} {item.items.amount}</p>)}
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
            </li>
        </>
    ));*/

    return (
        <div className="list-items-top">
            <p style={{textAlign: "center"}}>Name Amount</p>
            <div className="list-items">
                <ul>
                    {fullLists}
                </ul>
            </div>
        </div>
    );
};

export default ListItems;