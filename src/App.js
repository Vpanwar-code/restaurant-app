import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'; 

function App() {
  return (
    <div>
      <Fragment>
        <Cart/>
        <Header/>
        <main>
        <Meals/>
        </main>
        
      </Fragment>
    </div>
  );
}

export default App;
