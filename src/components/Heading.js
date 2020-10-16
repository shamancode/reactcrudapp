import { Container, Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";

import { Link } from "react-router-dom";
import React from "react";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">My Tasks</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-success" to="/add">
              Add Task
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
