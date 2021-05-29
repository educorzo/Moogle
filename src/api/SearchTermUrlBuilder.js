
export function completeSearch (url, searchTerm) {
  return searchUrl(url, searchTerm, ['album', 'artist', 'track'])
}

export function onlyArtistSearch (url, searchTerm) {
  return searchUrl(url, searchTerm, ['artist'])
}

function searchUrl (url, searchTerm, filters) {
  const encodedSearchTerm = encodeURIComponent(searchTerm)
  let completeUrl = url + 'search?q=' + encodedSearchTerm

  if (filters.length > 0) {
    completeUrl += '&type='

    filters.forEach(filter => {
      completeUrl += filter + ','
    })
    completeUrl = completeUrl.substring(0, completeUrl.length - 1)
  }

  return completeUrl
}
