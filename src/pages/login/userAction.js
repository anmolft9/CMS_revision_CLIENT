import { toast } from "react-toastify";
import { loginAdminUser } from "../../helpers/axiosHelper";
import { setAdminUser } from "./userSlice";

export const loginUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);

  toast.promise(resultPromise, { pending: "Please wait...." });

  const { status, message, user } = await resultPromise;
  console.log(resultPromise);

  toast[status](message);
  console.log(status, message, user);

  status === "success" && dispatch(setAdminUser(user));
};
