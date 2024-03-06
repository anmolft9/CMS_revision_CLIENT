import React, { useEffect } from "react";
import { Table, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../pages/categories/CategoryAction.js";

export const CategoryTable = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);
  // console.log(categories.length);

  useEffect(() => {
    // console.log("here");
    dispatch(getCategoriesAction());
  }, []);

  return (
    <Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((item, i) => (
              <tr>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>{item.parentId ? "children" : "parent"}</td>
                <td>
                  <Button variant="danger">Delete</Button>{" "}
                  <Button variant="info">Edit</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Row>
  );
};
