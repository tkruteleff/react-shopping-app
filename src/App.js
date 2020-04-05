import React from 'react';

import AddItem from './Components/AddItem/AddItem'
import ShoppingApp from './Containers/ShoppingApp/ShoppingApp';
import { Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Switch>
        <Route path="/additem/:listId" component={AddItem}/>
        <Route path="/" exact component={ShoppingApp} />
      </Switch>
    </div>
    
  );
}

export default App;