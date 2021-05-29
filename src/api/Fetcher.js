
export default async function fetchResources (url, headers) {
  return fetch(url, {
    headers: headers
  }).then(response => response.json())
    .catch(function (error) {
      return { error: { message: error.message } }
    })
}
