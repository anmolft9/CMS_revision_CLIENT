import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAction } from "../../pages/categories/CategoryAction";

export const CategoryTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("here");
    dispatch(getCategoriesAction());
  }, []);

  return <div>CategoryTable</div>;
};
