import React, { useState } from 'react';

import AddItem from './AddItem';
import ListItems from './ListItems';

const App = () => {
  const [shoppingItems, setShoppingItems] = useState([
  ]);

  const addNewItemHandler = (newItem) => {
    setShoppingItems((prevShoppingList) => prevShoppingList.concat(newItem));
  };

  return (
    <div>
      <AddItem onAddNewItem={addNewItemHandler}/>
      <p style={{textAlign: "center"}}>Name Amount</p>
      <ListItems allItems={shoppingItems}/>
    </div>
    
  );
}

export default App;
