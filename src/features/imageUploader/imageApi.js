// features/imageUploader/imageApi.js
import axios from "axios";

// Presigned URL 요청
export const getPresignedUrl = async (fileName) => {
  const res = await axios.get(`/api/s3/presigned-url?fileName=${fileName}`);
  return res.data.url;
};

// S3 업로드
export const uploadToS3 = async (presignedUrl, file) => {
  await axios.put(presignedUrl, file, {
    headers: {
      "Content-Type": file.type,
    },
  });
};
