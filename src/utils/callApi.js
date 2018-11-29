export default async (url, options) => {
  const defaultOptions = {
    credentials: 'include',
    headers: {},
  };
  const newOptions = {...defaultOptions, ...options};
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      }
    }
  }

  try {
    let response = await fetch(url, newOptions);
    return response.json();
  } catch (ex) {
    console.log('fetch exception ');
  }
}