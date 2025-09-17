export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com';
  const API_KEY = '52332038-e4c0548d3264099870d60baa2';
  const END_POINT = '/api/';
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(`${BASE_URL}${END_POINT}`, { params }).then(res => {
    return res.data.hits;
  });
}
