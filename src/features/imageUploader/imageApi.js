// features/imageUploader/imageApi.js
import axios from "axios";

// Presigned URL 요청
export const getPresignedUrl = async (fileName) => {
  const res = await axios.get(`/api/s3/presigned-url?fileName=${fileName}`);
  return res.data.url;
};

// S3 업로드
export const uploadToS3 = async (presignedUrl, file) => {
  console.log("file.name", file.name); // 꼭 .jpg, .png 등 확장자 붙어야 함
  console.log("file.type", file.type);
  const ext = file.name.split('.').pop().toLowerCase();
  let contentType;
  console.log(ext)
  if (ext === "png") contentType = "image/png";
  else if (["jpg", "jpeg"].includes(ext)) contentType = "image/jpeg";
  else if (ext === "webp") contentType = "image/webp";
  else if (ext === "svg") contentType = "image/svg+xml";
  else if (ext === "glb") contentType = "model/gltf-binary";
  else contentType = "application/octet-stream";
console.log('contentType: ', contentType)
  await axios.put(presignedUrl, file, {
    headers: {
      "Content-Type": contentType,
    },
  });
};
