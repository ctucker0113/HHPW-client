import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/items`, {
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

export {
    getAllItems
}