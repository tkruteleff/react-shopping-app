import React, { useState } from 'react';

import AddItem from './AddItem';
import ListItems from './ListItems';

const App = () => {
  const [shoppingItems, setShoppingItems] = useState([
    {
    id: 1,
    name: "Milk",
    amount: 1
  },
  {
    id: 2,
    name: "Banana",
    amount: 2 
  },
  {
    id: 3,
    name: "Juice",
    amount: 3
  }
  ]);

  const addNewItemHandler = (newItem) => {
    setShoppingItems([...shoppingItems, newItem])
    //*setShoppingItems((prevShoppingList) => prevShoppingList.concat(newItem));
  };

  const increaseAmountHandler = (index) => {
    console.log(shoppingItems)
    const updatedList = [...shoppingItems];
    updatedList[index].amount = updatedList[index].amount + 1;
    setShoppingItems(updatedList);
  };
  
  const decreaseAmountHandler = (index) => {
    const updatedList = [...shoppingItems];
    updatedList[index].amount = updatedList[index].amount - 1;
    setShoppingItems(updatedList);
  };

  const checkItemHandler = (id) => {
    console.log('[CheckHandler] log')
  };

  const removeItemHandler = (id) => {
    console.log('[RemoveHandler] log')
  };

  return (
    <div>
      <AddItem onAddNewItem={addNewItemHandler}/>
      <p style={{textAlign: "center"}}>Name Amount</p>
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
