import EvRequest from "./request";

const evRequest = new EvRequest({
  baseURL: "/api",
  timeout: 5000,
});

export { evRequest };
