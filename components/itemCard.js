import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
// import AddItemToOrder API call once it is written

// This function creates the template for each Item card and sends it out to the rest of the program.
function ItemCard({ itemObj }) {
//   const addItemToOrder = () => {
//     if (window.confirm(`Add ${itemObj.Name} to your order?`)) {
//       // add item to order then show order screen
//     }
//   };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{itemObj.name}</Card.Title>
        <p className="card-text bold"><span>${itemObj.price} <br /></span></p>
        <Link href={`/events/addItemToOrder/${itemObj.id}`} passHref>
          <Button variant="info">Add Item to Order</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
};

export default ItemCard;
