import axios from "axios";

const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "admin-user";
const categoryEP = rootUrl + "category";

//axios processor which accepts methods, endpoint and data as a parameter.
const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

///post new admin user
export const postUser = (data) => {
  const options = {
    method: "post",
    url: adminUserEP,
    data,
  };
  return apiProcessor(options);
};

///verify new admin user email account
export const emailVerifyAdminUser = (data) => {
  const options = {
    method: "patch",
    url: adminUserEP + "/verify-email",
    data,
  };
  return apiProcessor(options);
};

///login admin user
export const loginAdminUser = (data) => {
  const options = {
    method: "post",
    url: adminUserEP + "/login",
    data,
  };
  return apiProcessor(options);
};

// CATEGORIES

///fetch categories
export const fetchCategories = (_id) => {
  const options = {
    method: "get",
    url: _id ? categoryEP + "/" + _id : categoryEP,
  };
  return apiProcessor(options);
};

//add category
export const addCategories = (data) => {
  const options = {
    method: "post",
    url: categoryEP,
    data,
  };
  return apiProcessor(options);
};
