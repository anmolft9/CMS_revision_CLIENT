import { fetchCategories } from "../../helpers/axiosHelper";

export const getCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategories();
  console.log(status, categories);
};
