import axios from "axios";

/**
 * 비로그인 사용자 공간 생성
 * @param {string} name
 * @returns {Promise<number>} spaceId
 */
export const createGuestSpace = async (name) => {
  const res = await axios.post("/api/spaces/guest", { name });
  return res.data; // 그냥 Long 숫자
};

/**
 * 로그인 사용자 공간 생성
 * @param {string} name
 * @returns {Promise<number>} spaceId
 */
export const createUserSpace = async (name) => {
  const res = await axios.post("/api/spaces", { name });
  return res.data; // 그냥 Long 숫자
};

/**
 * QR 업로드 링크 생성
 * @param {number} spaceId
 * @returns {Promise<string>} uploadUrl
 */
export const createUploadLink = async (spaceId) => {
  const res = await axios.post("/api/uploadlink", { spaceId });
  return res.data.uploadUrl;
};

/**
 * 로그인 사용자 공간 저장 (수정 포함)
 * @param {object} payload
 * @returns {Promise<void>}
 */
export const saveUserSpace = async (payload) => {
  await axios.post("/api/spaces/save", payload);
};
