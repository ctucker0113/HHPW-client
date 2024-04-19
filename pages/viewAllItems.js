import React, { useState, useEffect } from 'react';
import ItemCard from '../components/itemCard';
import { getAllItems } from '../apiCalls/ItemAPICalls';

function ShowItems() {
  const [items, setItems] = useState([]);

  const displayAllItems = () => {
    getAllItems().then(setItems);
  };

  useEffect(() => {
    displayAllItems();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {items.map((item) => (
          <ItemCard key={item.ID} itemObj={item} onUpdate={displayAllItems} />
        ))}
      </div>
    </div>
  );
}

export default ShowItems;
