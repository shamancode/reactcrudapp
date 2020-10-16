import { Button, ListGroup, ListGroupItem } from "reactstrap";
import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users);
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex">
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <Button onClick={() => removeUser(user.id)} color="danger">
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Tasks Yet</h4>
      )}
    </ListGroup>
  );
};
