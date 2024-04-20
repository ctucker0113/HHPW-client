import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

// This function creates the template for each Order card and sends it out to the rest of the program.
function OrderCard({ orderObj }) {
  // Formats the date to be more human readable.
  const formattedDate = new Date(orderObj.date).toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{orderObj.name}</Card.Title>
        <p className="card-text bold"><span>{orderObj.phoneNumber} <br /></span></p>
        <p className="card-text bold"><span>{orderObj.email} <br /></span></p>
        <p className="card-text bold"><span>{orderObj.orderTypeId} <br /></span></p>
        <p className="card-text bold"><span>${orderObj.total.toFixed(2)} <br /></span></p>
        <p className="card-text bold"><span>{formattedDate} <br /></span></p>
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    orderTypeId: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
