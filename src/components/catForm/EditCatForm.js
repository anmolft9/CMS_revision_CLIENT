import React, { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postCategoriesAction } from "../../pages/categories/CategoryAction";
import { CustomModal } from "../modal/Modal";

export const EditCatForm = ({ selectedCategory }) => {
  const dispatch = useDispatch();

  const initialState = {
    status: "inactive",
    parentId: null,
    name: "",
  };
  const [form, setForm] = useState(initialState);

  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    setForm(selectedCategory);
  }, [selectedCategory]);

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

    <CustomModal title="Edit Category">
      <Form
        className="py-5 mb-5 border p-3 shadow-lg rounded"
        onSubmit={handleOnSubmit}
      >
        <h5 className="mb-3">
          {" "}
          Add new Category
          <hr />
        </h5>
        <Row className="g-2">
          <Col md="2">
            <Form.Check
              name="status"
              label="status"
              type="switch"
              checked={form.status === "active"}
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
                      <option
                        value={item._id}
                        selected={item._id === form.parentId}
                      >
                        {item.name}
                      </option>
                    )
                )}
            </Form.Select>
          </Col>
          <Col md="4">
            <Form.Control
              name="name"
              type="text"
              value={form.name}
              placeholder="Enter category"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col md="2">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </CustomModal>
  );
};
