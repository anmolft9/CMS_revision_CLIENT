import axios from "axios";

const apiProcessor = ({ method, url, data }) => {
  try {
    const response = axios({
      method,
      url,
      data,
    });
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
