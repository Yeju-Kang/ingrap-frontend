import apiClient from "../../api/apiClient";

/**
 * 비로그인 사용자 공간 생성
 * @param {string} name - 생성할 공간 이름
 * @returns {Promise<number>} - 생성된 space ID
 */
export const createGuestSpace = async (name) => {
  const res = await apiClient.post("/spaces/guest", { name });
  return res.data;
};

/**
 * 로그인 사용자 공간 생성
 * @param {string} name - 생성할 공간 이름
 * @returns {Promise<number>} - 생성된 space ID
 */
export const createUserSpace = async (name) => {
  const res = await apiClient.post("/spaces", { name });
  return res.data;
};

/**
 * QR 업로드 링크 생성
 * @param {number} spaceId - 공간 ID
 * @returns {Promise<string>} - 업로드용 URL
 */
export const createUploadLink = async (spaceId) => {
  const res = await apiClient.post("/uploadlink", { spaceId });
  return res.data.uploadUrl;
};

/**
 * 로그인 사용자 공간 저장 (수정 포함)
 * @param {object} payload - 저장할 공간 데이터
 */
export const saveUserSpace = async (payload) => {
  await apiClient.post("/spaces/save", payload);
};

/**
 * 공간 상세 정보 조회
 * (별도 조회용 — redux와 별도로 사용하는 경우)
 * @param {number} spaceId - 공간 ID
 * @returns {Promise<object>} - 공간 상세 데이터
 */
export const getSpaceDetail = async (spaceId) => {
  const res = await apiClient.get(`/spaces/${spaceId}`);
  return res.data;
};
