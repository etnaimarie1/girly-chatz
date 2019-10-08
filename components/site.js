import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

export function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        GIRLY CHATZ with
        <img
          src="https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_E_red-512.png"
          width="20px"
          alt="logo"
        />
        tnai
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>

          
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="What are you looking for ?"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
