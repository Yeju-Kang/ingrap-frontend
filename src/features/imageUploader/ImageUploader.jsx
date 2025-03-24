import React, { useState } from "react";
import { getPresignedUrl } from "./imageApi";
import axios from "axios";

const ImageUploader = ({ onUploadComplete }) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const fileName = `assets/logo-${Date.now()}-${file.name}`;
    const presignedUrl = await getPresignedUrl(fileName);

    // S3에 직접 업로드
    await axios.put(presignedUrl, file, {
      headers: { "Content-Type": file.type },
    });

    const fileUrl = presignedUrl.split("?")[0];
    onUploadComplete(fileUrl); // 저장된 URL을 상위로 전달
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
};

export default ImageUploader;
