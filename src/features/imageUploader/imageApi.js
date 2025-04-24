// features/imageUploader/imageApi.js
import axios from "axios";

// Presigned URL 요청
export const getPresignedUrl = async (fileName) => {
  const res = await axios.get(`/api/s3/presigned-url?fileName=${fileName}`);
  return res.data.url;
};

// S3 업로드
// 이렇게 바꾸면 돼
export const uploadToS3 = async (presignedUrl, file) => {
  const ext = file.name.split('.').pop().toLowerCase();
  let contentType = "application/octet-stream";
  if (ext === "png") contentType = "image/png";
  else if (["jpg", "jpeg"].includes(ext)) contentType = "image/jpeg";
  else if (ext === "webp") contentType = "image/webp";
  else if (ext === "svg") contentType = "image/svg+xml";
  else if (ext === "glb") contentType = "model/gltf-binary";
  else if (ext === "gltf") contentType = "model/gltf+json";

  const res = await fetch(presignedUrl, {
    method: "PUT",
    headers: {
      "content-type": contentType, // 소문자로!
    },
    body: file,
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("업로드 실패 😢", text);
    throw new Error("S3 업로드 실패");
  }
};









