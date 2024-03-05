import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postCategoriesAction } from "../../pages/categories/CategoryAction";

export const CatForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const { categories } = useSelector((state) => state.category);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "Inactive";
    }
    // console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(postCategoriesAction(form));
  };
  return (
    // Category adding form
    <Form
      className="py-5 mb-5 border p-3 shadow-lg rounded"
      onSubmit={handleOnSubmit}
    >
      <h5 className="mb-3">
        {" "}
        Add new Category
        <h r />
      </h5>
      <Row className="g-2">
        <Col md="2">
          <Form.Check
            name="status"
            label="status"
            type="switch"
            onChange={handleOnChange}
          />
        </Col>
        <Col md="4">
          <Form.Select
            name="parentId"
            label="parentId"
            onChange={handleOnChange}
          >
            <option value="">Parent category?</option>

            {categories.length > 0 &&
              categories.map(
                (item) =>
                  !item.parentId && (
                    <option value={item._id}>{item.name}</option>
                  )
              )}
          </Form.Select>
        </Col>
        <Col md="4">
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter category"
            onChange={handleOnChange}
          />
        </Col>
        <Col md="2">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
