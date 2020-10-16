import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../context/GlobalState";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Task</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="Enter Task"
        ></Input>
      </FormGroup>
      <Button type="submit" className="btn btn-success">
        Submit
      </Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
