import React, { useState } from 'react';

import AddItem from '../../Components/AddItem/AddItem'
import AddList from '../../Components/AddList/AddList'
import ListItems from '../../Components/ListItems/ListItems'

const ShoppingApp = () => {
    const [shoppingItems, setShoppingItems] = useState([{
        listId: 1,
        listName: "Test List",
        active: true,
        items: [
          /*{
            id: 1,
            name: "Milk",
            amount: 1,
            checked: false
          },
          {
            id: 2,
            name: "Banana",
            amount: 2,
            checked: false
          },
          {
            id: 3,
            name: "Juice",
            amount: 3,
            checked: false
          },*/
    ]}]);

    const addNewItemHandler = (newItem) => {
        setShoppingItems([...shoppingItems[0].items, newItem])
    };
    
    const increaseAmountHandler = (id) => {
        const elementIndex = shoppingItems[0].items.findIndex(element => element.id === id)
        const updatedList = [...shoppingItems[0].items];
        updatedList[elementIndex] = {...updatedList[elementIndex], amount: updatedList[elementIndex].amount + 1}
        setShoppingItems(updatedList);
    };
      
    const decreaseAmountHandler = (id) => {
        const elementIndex = shoppingItems[0].items.findIndex(element => element.id === id)
        const updatedList = [...shoppingItems[0].items];
        updatedList[elementIndex] = {...updatedList[elementIndex], amount: updatedList[elementIndex].amount -1}
        setShoppingItems(updatedList);
    };
    
    const checkItemHandler = (id) => {
        const elementIndex = shoppingItems[0].items.findIndex(element => element.id === id)
        const updatedChecked = [...shoppingItems[0].items];
        updatedChecked[elementIndex] = {...updatedChecked[elementIndex], checked: !updatedChecked[elementIndex].checked}
        setShoppingItems(updatedChecked);
        console.log(updatedChecked)
    };
    
    const removeItemHandler = (id) => {
        const elementIndex = shoppingItems[0].items.findIndex(element => element.id === id)
        const removeItem = [...shoppingItems[0].items];
        removeItem.splice(elementIndex, 1);
        setShoppingItems(removeItem);
    };

    return (
        <div>
            <AddList />
            <AddItem onAddNewItem={addNewItemHandler}/>
            <ListItems 
                allItems={shoppingItems}
                increaseAmount={increaseAmountHandler}
                decreaseAmount={decreaseAmountHandler}
                checkItem={checkItemHandler}
                removeItem={removeItemHandler}/>
        </div>
    );
}

export default ShoppingApp;