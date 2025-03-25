import React, { useState } from "react";
import { getPresignedUrl, uploadToS3 } from "./imageApi";

const uploadTypes = [
  { label: "로고", value: "assets/logo" },
  { label: "배너", value: "assets/banner" },
  { label: "아이콘", value: "assets/icon" },
  { label: "메뉴얼", value: "assets/manual" },
  { label: "Home 섹션", value: "assets/section/home" },
  { label: "Shop 섹션", value: "assets/section/shop" },
];

const ImageUploader = () => {
  const [uploadType, setUploadType] = useState(uploadTypes[0].value);
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !uploadType) return;

    const extension = file.name.split(".").pop();
    const baseName = file.name.split(".")[0];
    const fileName = `${uploadType}/${baseName}.${extension}`;

    try {
      const presignedUrl = await getPresignedUrl(fileName);
      await uploadToS3(presignedUrl, file);

      const finalUrl = presignedUrl.split("?")[0];
      setUploadedUrl(finalUrl);
      console.log("업로드 성공:", finalUrl);
    } catch (error) {
      console.error("업로드 실패", error);
    }
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>📤 이미지 업로더</h3>

      <label>
        이미지 용도:
        <select value={uploadType} onChange={(e) => setUploadType(e.target.value)} style={{ marginLeft: "0.5rem" }}>
          {uploadTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </label>

      <div style={{ marginTop: "1rem" }}>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={!file} style={{ marginLeft: "1rem" }}>
          업로드
        </button>
      </div>

      {uploadedUrl && (
        <div style={{ marginTop: "1rem" }}>
          <p>✅ 업로드 완료!</p>
          <img src={uploadedUrl} alt="업로드된 이미지" style={{ maxWidth: "200px" }} />
          <p style={{ fontSize: "0.8rem", wordBreak: "break-all" }}>{uploadedUrl}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
