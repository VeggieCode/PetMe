const connection = () => {
  const customFetch = (endpoint, options) => {
    const fetchOptions = options;
    const defaultHeader = {
      accept: 'application/json',
    };

    const controller = new AbortController();
    fetchOptions.signal = controller.signal;

    fetchOptions.method = options.method || 'GET';
    fetchOptions.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    fetchOptions.body = JSON.stringify(options.body) || false;
    if (!options.body) delete fetchOptions.body;
    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) => (res.ok
        ? res.json()
        // eslint-disable-next-line prefer-promise-reject-errors
        : Promise.reject({
          err: true,
          status: res.status || '00',
          statusText: res.statusText || 'Ocurrió un error',
        })))
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    const customOptions = options;
    customOptions.method = 'POST';
    return customFetch(url, customOptions);
  };

  const put = (url, options = {}) => {
    const customOptions = options;
    customOptions.method = 'PUT';
    return customFetch(url, customOptions);
  };

  const del = (url, options = {}) => {
    const customOptions = options;
    customOptions.method = 'DELETE';
    return customFetch(url, customOptions);
  };

  return {
    get,
    post,
    put,
    del,
  };
};

export default connection;
