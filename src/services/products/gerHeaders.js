export default function getHeaders(accessToken) {
    if (accessToken) {
      return {
        'content-type': 'application/json',
      };
    }
    return {
      'content-type': 'application/json',
    };
  }