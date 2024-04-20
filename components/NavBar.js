/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Hip Hop Pizza and Wings!</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/Orders/viewAllOrders">
              <Nav.Link>View Orders</Nav.Link>
            </Link>
            <Link passHref href="/Orders/createOrder">
              <Nav.Link>Create An Order</Nav.Link>
            </Link>
            <Link passHref href="/viewRevenue">
              <Nav.Link>View Revenue</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Button variant="danger" onClick={signOut} className="ms-auto">
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
