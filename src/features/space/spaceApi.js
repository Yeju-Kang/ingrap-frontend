import axios from "axios";

/**
 * 비로그인 사용자 공간 생성
 * @param {string} name - 생성할 공간 이름
 * @returns {Promise<number>} - 생성된 space ID
 */
export const createGuestSpace = async (name) => {
  const res = await axios.post("/api/spaces/guest", { name });
  return res.data; // Long 숫자 반환
};

/**
 * 로그인 사용자 공간 생성
 * @param {string} name - 생성할 공간 이름
 * @returns {Promise<number>} - 생성된 space ID
 */
export const createUserSpace = async (name) => {
  const res = await axios.post("/api/spaces", { name });
  return res.data; // Long 숫자 반환
};

/**
 * QR 업로드 링크 생성
 * @param {number} spaceId - 공간 ID
 * @returns {Promise<string>} - 업로드용 URL
 */
export const createUploadLink = async (spaceId) => {
  const res = await axios.post("/api/uploadlink", { spaceId });
  return res.data.uploadUrl;
};

/**
 * 로그인 사용자 공간 저장 (수정 포함)
 * @param {object} payload - 저장할 공간 데이터 (예: { spaceId, name, furnitures })
 * @returns {Promise<void>}
 */
export const saveUserSpace = async (payload) => {
  await axios.post("/api/spaces/save", payload);
};

/**
 * 공간 상세 정보 조회 + 가구 데이터 normalize
 * @param {number} spaceId - 공간 ID
 * @returns {Promise<object>} - 공간 상세 데이터
 */
export const getSpaceDetail = async (spaceId) => {
  const res = await axios.get(`/api/spaces/${spaceId}`);

  const normalized = {
    ...res.data,
    furnitures: res.data.furnitures?.map((f) => ({
      type: f.type,
      modelUrl: f.modelUrl || f.model || null,
      color: f.color || "#ffffff",
      position: [f.positionX ?? 0, f.positionY ?? 0, f.positionZ ?? 0],
      rotation: [f.rotationX ?? 0, f.rotationY ?? 0, f.rotationZ ?? 0],
      uuid: Date.now() + Math.random(),
    })) ?? [],
  };

  return normalized;
};
