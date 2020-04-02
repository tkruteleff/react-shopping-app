import React from 'react';

import ShoppingApp from './Containers/ShoppingApp/ShoppingApp';
import { Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Switch>
        <Route path="/" exact component={ShoppingApp} />
      </Switch>
    </div>
    
  );
}

export default App;
