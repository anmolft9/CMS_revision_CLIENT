import { addCategories, fetchCategories } from "../../helpers/axiosHelper";
import { setCategories } from "./CategorySlice.js";
import { toast } from "react-toastify";

export const getCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategories();

  status === "success" && dispatch(setCategories(categories));
};

//post categories
export const postCategoriesAction = (data) => async (dispatch) => {
  const promisePending = addCategories(data);
  toast.promise(promisePending, { pending: "Please wait.. !! " });
  const { status, message } = await promisePending;
  // console.log(status, categories);
  toast[status](message);
  status === "success" && dispatch(getCategoriesAction());
};
