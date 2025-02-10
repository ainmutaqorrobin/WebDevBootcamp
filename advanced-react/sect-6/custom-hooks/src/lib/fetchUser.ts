import axios from "axios";

export const fetchUser = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

export const test = () => {
  console.log("test");
};
