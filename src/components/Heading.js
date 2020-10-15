import { Container, Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";

import { Link } from "react-router-dom";
import React from "react";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">My Team</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
