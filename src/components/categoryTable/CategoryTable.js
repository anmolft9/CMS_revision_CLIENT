import React, { useEffect, useState } from "react";
import { Table, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoriesAction,
  getCategoriesAction,
} from "../../pages/categories/CategoryAction.js";
import { EditCatForm } from "../catForm/EditCatForm.js";
import { setModalShow } from "../../pages/systemState/SystemSlice.js";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState({});

  const { categories } = useSelector((state) => state.category);
  // console.log(categories.length);

  useEffect(() => {
    // console.log("here");
    dispatch(getCategoriesAction());
  }, []);

  const handleOnEdit = (cat) => {
    setSelectedCategory(cat);
    dispatch(setModalShow());
  };

  const handleOnDelete = (_id) => {
    // console.log(id);
    dispatch(deleteCategoriesAction(_id));
  };
  // console.log(selectedCategory);

  const parentCat = categories.filter(({ parentId }) => !parentId); //filter all the category with parent id
  const childrenCat = categories.filter(({ parentId }) => parentId); ////filter all the category with children id
  // console.log(parentCat, childrenCat);

  return (
    <Row>
      <EditCatForm selectedCategory={selectedCategory} />
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
                <tr key={item._id} class="table-primary">
                  <td
                    class={
                      item.status === "active" ? "text-success" : "text-danger"
                    }
                  >
                    {item.status}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.parentId ? "children" : "parent"}</td>
                  <td>
                    <Button variant="danger">Delete</Button>{" "}
                    <Button variant="info" onClick={() => handleOnEdit(item)}>
                      Edit
                    </Button>
                  </td>
                </tr>
                {childrenCat.map(
                  (cat) =>
                    cat.parentId === item._id && (
                      <tr key={cat._id}>
                        <td
                          class={
                            cat.status === "active"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {cat.status}
                        </td>
                        <td>{cat.name}</td>
                        <td>{cat.parentId ? "children" : "parent"}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleOnDelete(cat._id)}
                          >
                            Delete
                          </Button>{" "}
                          <Button
                            variant="info"
                            onClick={() => handleOnEdit(cat)}
                          >
                            Edit
                          </Button>
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
