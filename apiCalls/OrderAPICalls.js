import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createOrder = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

  const updateOrder = (payload) => new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/orders/${payload.id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { 
    getAllOrders,
    createOrder,
    updateOrder
}