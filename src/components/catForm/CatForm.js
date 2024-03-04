import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
// import { Form } from "react-router-dom";
import { CustomInputField } from "../customInputField/CustomInputField.js";

export const CatForm = () => {
  return (
    <Form className="py-5 mb-5">
      <h5 className="mb-3">
        {" "}
        Add new Category
        <hr />
      </h5>
      <Row className="g-2">
        <Col md="2">
          <Form.Check name="status" label="status" type="switch" />
        </Col>
        <Col md="4">
          <Form.Select name="parentId" label="parentId" type="dropdown">
            <option>Parent category?</option>
          </Form.Select>
        </Col>
        <Col md="4">
          <Form.Control type="text" placeholder="Enter category" />
        </Col>
        <Col md="2">
          <Button variant="primary">Add</Button>
        </Col>
      </Row>
    </Form>
  );
};
