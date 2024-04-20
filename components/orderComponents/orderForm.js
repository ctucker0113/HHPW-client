import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';
import { createOrder, updateOrder } from '../../apiCalls/OrderAPICalls';

const initialState = {
  name: '',
  orderType: '',
  phoneNumber: '',
  email: '',
};

function OrderForm({ orderObj }) {
  const [formInput, setFormInput] = useState(initialState);

  const router = useRouter();

  // const { user } = useAuth();

  useEffect(() => {
    if (orderObj && orderObj.id) {
      setFormInput(orderObj); // Populate form if orderObj is provided and has an id
    }
  }, [orderObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderObj && orderObj.id) {
      updateOrder(formInput).then(() => router.push('/viewAllOrders'));
    } else {
      createOrder(formInput).then(() => router.push('/Orders/viewAllOrders'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{orderObj && orderObj.id ? 'Update' : 'Create'} Order</h2>

      {/* ORDER NAME INPUT */}
      <FloatingLabel controlId="floatingInput1" label="Order Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Order Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* ORDER TYPE INPUT */}
      <FloatingLabel controlId="floatingSelect" label="Order Type" className="mb-3">
        <Form.Select
          name="orderType"
          value={formInput.orderType}
          onChange={handleChange}
          required
        >
          <option value="">Select Order Type</option>
          <option value="Phone">Phone</option>
          <option value="Online">Online</option>
          <option value="In Person">In Person</option>
        </Form.Select>
      </FloatingLabel>

      {/* PHONE NUMBER INPUT */}
      <FloatingLabel controlId="floatingInput2" label="Phone Number" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={formInput.phoneNumber}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* EMAIL INPUT */}
      <FloatingLabel controlId="floatingInput3" label="Email" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Email"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON */}
      <Button type="submit">{orderObj && orderObj.id ? 'Update' : 'Create'} Order</Button>
    </Form>
  );
}

OrderForm.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number, // You should include id since you are checking for it
    name: PropTypes.string,
    orderType: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
  }),
};

OrderForm.defaultProps = {
  orderObj: initialState,
};

export default OrderForm;
