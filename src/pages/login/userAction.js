import { toast } from "react-toastify";
import { loginAdminUser } from "../../helpers/axiosHelper";
import { setAdminUser } from "./userSlice";

export const loginUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);

  toast.promise(resultPromise, { pending: "Please wait...." });

  const { status, message, user, accessJWT, refreshJWT } = await resultPromise;
  console.log(resultPromise);

  toast[status](message);
  console.log(status, message, user);

  if (status === "success") {
    sessionStorage.setItem("accessToken", accessJWT);
    localStorage.setItem("refreshToken", refreshJWT);
    dispatch(setAdminUser(user));
  }
};

//logout action , passing the empty object to set the state as empty when logged out

export const adminLogout = () => (dispatch) => {
  dispatch(setAdminUser({}));
};
