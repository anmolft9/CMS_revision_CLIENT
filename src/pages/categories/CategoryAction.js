import { fetchCategories } from "../../helpers/axiosHelper";
import { setCategories } from "./CategorySlice.js";

export const getCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategories();
  console.log(status, categories);
  // console.log(typeof status);

  status === "success" && dispatch(setCategories(categories));
};
