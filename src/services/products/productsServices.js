import { genericFormService, genericGetService } from "./generics";
import getHeaders from "./gerHeaders";

export function getProductService() {
  return genericGetService("/products");
}

export function getProductPostService(postData) {
  const headers = getHeaders();
  return genericFormService(
    "post",
    `http://localhost:3001/products`,
    headers,
    postData
  );
}
