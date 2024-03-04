import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export const CatForm = () => {
  const { categories } = useSelector((state) => state.category);

  return (
    <Form className="py-5 mb-5 border p-3 shadow-lg rounded">
      <h5 className="mb-3">
        {" "}
        Add new Category
        <h r />
      </h5>
      <Row className="g-2">
        <Col md="2">
          <Form.Check name="status" label="status" type="switch" />
        </Col>
        <Col md="4">
          <Form.Select name="parentId" label="parentId">
            <option value="">Parent category?</option>

            {categories.length > 0 &&
              categories.map(
                (item) => !item.parentId && <option>{item.name}</option>
              )}
          </Form.Select>
        </Col>
        <Col md="4">
          <Form.Control name="name" type="text" placeholder="Enter category" />
        </Col>
        <Col md="2">
          <Button variant="primary">Add</Button>
        </Col>
      </Row>
    </Form>
  );
};
