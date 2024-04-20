import axiosInstance from "./config";

export function axiosErrorHelper(error) {
  const err = error;
  const { response } = err;
  console.log("errorin", error);
  const { data, status, statusText } = response;
  let errors = {};
  if (status === 400 && data && Object.keys(data).length > 0) {
    errors = data;
  } else {
    errors.nonFieldErrors = [statusText, "Please try later"];
  }
  return errors;
}

export async function genericGetService(apiPath) {
  try {
    return { data: await axiosInstance.get(apiPath) };
  } catch (error) {
    return { errors: axiosErrorHelper(error) };
  }
}

export const genericFormService = async (
  action,
  APIEndpoint,
  headers,
  postData
) => {
  try {
    return {
      data: await axiosInstance[action](APIEndpoint, postData, { headers }),
    };
  } catch (errors) {
    return { errors: axiosErrorHelper(errors) };
  }
};
