import React from 'react';
import Button from './Button';
import './App.css';

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
  <nav>
    <Button
        title="to the collection"
        type="button"
        onClick={() => console.log()}/>
    <Button
        title="shop all the bags"
        type="button"
        onClick={() => console.log()}/>
    <Button
        title="pre-orders"
        type="button"
        onClick={() => console.log()}/>
  </nav>
        </>
  );
}

export default App;



