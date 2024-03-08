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

  const parentCat = categories.filter(({ parentId }) => !parentId);
  const childrenCat = categories.filter(({ parentId }) => parentId);
  // console.log(parentCat, childrenCat);

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
          {parentCat.length > 0 &&
            parentCat.map((item) => (
              <>
                <tr key={item._id} style={{ backgroundColor: "#9ED2C6" }}>
                  <td>{item.status}</td>
                  <td>{item.name}</td>
                  <td>{item.parentId ? "children" : "parent"}</td>
                  <td>
                    <Button variant="danger">Delete</Button>{" "}
                    <Button variant="info">Edit</Button>
                  </td>
                </tr>
                {childrenCat.map(
                  (cat) =>
                    cat.parentId === item._id && (
                      <tr key={cat._id}>
                        <td>{cat.status}</td>
                        <td>{cat.name}</td>
                        <td>{cat.parentId ? "children" : "parent"}</td>
                        <td>
                          <Button variant="danger">Delete</Button>{" "}
                          <Button variant="info">Edit</Button>
                        </td>
                      </tr>
                    )
                )}
              </>
            ))}
        </tbody>
      </Table>
    </Row>
  );
};
