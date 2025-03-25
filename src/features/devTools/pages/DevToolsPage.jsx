import React from "react";
import ImageUploader from "../../imageUploader/ImageUploader";

const DevToolsPage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🛠️ 개발자 도구 페이지</h1>

      <section>
        <h2>📤 이미지 업로드 테스트</h2>
        <ImageUploader />
      </section>
    </div>
  );
};

export default DevToolsPage;
