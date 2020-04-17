export function fetchJSON(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
