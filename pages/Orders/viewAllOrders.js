import React, { useState, useEffect } from 'react';
import OrderCard from '../../components/orderComponents/orderCard';
import { getAllOrders } from '../../apiCalls/OrderAPICalls';

function ShowOrders() {
  const [orders, setOrders] = useState([]);

  const displayAllOrders = () => {
    getAllOrders().then(setOrders);
  };

  useEffect(() => {
    displayAllOrders();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {orders.map((order) => (
          <OrderCard key={order.ID} orderObj={order} onUpdate={displayAllOrders} />
        ))}
      </div>
    </div>
  );
}

export default ShowOrders;
