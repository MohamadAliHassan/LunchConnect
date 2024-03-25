// fetchHelper.js

import sessionService from "./sessionService";

export default function fetchHelper(url, method, body) {
  const fetchOptions = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (method.toLowerCase() !== "get") {
    fetchOptions.body = JSON.stringify(body);
  }

  const token = sessionService.getToken();

  if (token !== null) {
    fetchOptions.headers.authorization = `${token}`;
  }

  // only add /api if the url does not start with it
  // (quick for sloppy calls in the rest of the code)
  url.slice(0, 4) != '/api' && (url = '/api' + url);

  return fetch(url, fetchOptions);
}
