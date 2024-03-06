import { addCategories, fetchCategories } from "../../helpers/axiosHelper";
import { setCategories } from "./CategorySlice.js";

export const getCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategories();
  // console.log(status, categories);
  // console.log(typeof status);

  status === "success" && dispatch(setCategories(categories));
};

//post categories
export const postCategoriesAction = (data) => async (dispatch) => {
  const { status, categories } = await addCategories(data);
  console.log(status, categories);
  status === "success" && dispatch(getCategoriesAction());
};
