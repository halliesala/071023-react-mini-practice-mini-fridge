import FridgeList from "./FridgeList"
import { useState, useEffect } from 'react'

function App() {

  const [fridge, setFridge] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/items')
      .then(data => data.json())
      .then(data => setFridge(data));
    }
    ,
    []
  );

  function toggleExpired(item) {
    console.log(`Inside function toggleExpired; item has id ${item.id}`)
    const URL = `http://localhost:3000/items/${item.id}`;
    const PATCH_OPTIONS = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        is_expired: !item.is_expired,
      })
    };

    fetch(URL, PATCH_OPTIONS)
    .then(data => data.json())
    .then(patchedItem => {
      console.log(patchedItem)
      updateItem(patchedItem)
    })
  }

  function updateItem(updatedItem) {
    // Get index of item to update
    const idx = fridge.findIndex(oldItem => updatedItem.id === oldItem.id)
    // Build updated array
    const updatedFridge = [...fridge.slice(0, idx), updatedItem, ...fridge.slice(idx + 1)]
    // setFridge to that array
    setFridge(updatedFridge)
  }


  return (
    <div className="App">

      <h1>Mini Fridge Inventory</h1>

      <FridgeList fridge={fridge} toggleExpired={toggleExpired}/>

    </div>
  );
}

export default App;
