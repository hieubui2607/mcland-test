import axiosClient from "./axiosClient";

const uploadApi = {
  upload(data, config) {
    const url = "/uploads/photos";
    return axiosClient.post(url, data, config);
  },
};
export default uploadApi;
