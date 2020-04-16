export function fetchWithNetworkError(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network error occurred while fetching');
    }
  });
}
