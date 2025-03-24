import axios from "axios";

export const getPresignedUrl = async (fileName) => {
  const res = await axios.get(`/api/s3/presigned-url?fileName=${fileName}`);
  return res.data.url;
};
