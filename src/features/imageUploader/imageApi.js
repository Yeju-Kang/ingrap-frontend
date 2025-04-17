// features/imageUploader/imageApi.js
import axios from "axios";

// Presigned URL 요청
export const getPresignedUrl = async (fileName) => {
  const res = await axios.get(`/api/s3/presigned-url?fileName=${fileName}`);
  return res.data.url;
};

// S3 업로드
export const uploadToS3 = async (presignedUrl, file) => {
  // 확장자로 Content-Type 명시 지정
  const ext = file.name.split('.').pop().toLowerCase();
  let contentType;

  if (ext === "png") contentType = "image/png";
  else if (["jpg", "jpeg"].includes(ext)) contentType = "image/jpeg";
  else if (ext === "webp") contentType = "image/webp";
  else if (ext === "svg") contentType = "image/svg+xml";
  else if (ext === "glb") contentType = "model/gltf-binary";
  else contentType = "application/octet-stream";

  await axios.put(presignedUrl, file, {
    headers: {
      "Content-Type": contentType,
    },
  });
};
