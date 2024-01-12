import axios from "axios";

const rootUrl = process.env.REACT_APP_API_ENDPOINT;
const adminUserEP = rootUrl + "admin-user";

//axios processor which accepts methods, endpoint and data as a parameter.
const apiProcessor = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    console.log(response);
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
