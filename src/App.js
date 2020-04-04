import React, { useState } from 'react';

import AddItem from './Components/AddItem/AddItem';
import ListItems from './Components/ListItems/ListItems';

const App = () => {
  const [shoppingItems, setShoppingItems] = useState([{
    listId: 1,
    listName: "Test List",
    active: true,
    items: [
      {
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
      },
    ]}]);

  const addNewItemHandler = (newItem) => {
    setShoppingItems([...shoppingItems, newItem])
    //*setShoppingItems((prevShoppingList) => prevShoppingList.concat(newItem));
  };

  const increaseAmountHandler = (id) => {
    console.log(id)
    const updatedList = [...shoppingItems];
    console.log(updatedList[0].items[id])
    /*updatedList[0].items[id].amount = updatedList[0].items[id].amount + 1;
    setShoppingItems(updatedList);*/
  };
  
  const decreaseAmountHandler = (index) => {
    const updatedList = [...shoppingItems];
    updatedList[index].items[index].amount = updatedList[index].items[index].amount - 1;
    setShoppingItems(updatedList);
  };

  const checkItemHandler = (index) => {
    console.log('[CheckHandler] log')
    const updatedChecked = [...shoppingItems];
    updatedChecked[index].items[index].checked = true;
    setShoppingItems(updatedChecked);
  };

  const removeItemHandler = (index) => {
    const removeItem = [...shoppingItems];
    removeItem.splice(index, 1);
    setShoppingItems(removeItem);
    console.log('[RemoveHandler] log', shoppingItems);

  };

  return (
    <div>
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

export default App;
