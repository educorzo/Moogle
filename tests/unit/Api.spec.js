import Api from '@/core/Api.js'
import AccessToken from '@/core/AccessToken'

describe('Api', () => {
  const spotifyURL = 'www.spotify.com/webApi/'
  const accessToken = new AccessToken({ hash: '#access_token=ABC&expires_in=200' })

  describe('when searching', () => {
    it('respond a result', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ albums: 'Place In The Sun' })
        })
      )

      const api = new Api(spotifyURL, accessToken)
      const result = await api.search('tania bowra')

      expect(global.fetch.mock.calls[0][0]).toBe('www.spotify.com/webApi/search?q=tania%20bowra&type=album,artist,track')
      expect(global.fetch.mock.calls[0][1]).toStrictEqual({ headers: { Authorization: 'Bearer ABC' } })
      expect(result.albums).toBeDefined()
    })

    describe('and there is an error in the http', () => {
      it('respond with a error object', async () => {
        global.fetch = jest.fn(() => Promise.reject(new Error('Internet is down')))

        const api = new Api(spotifyURL, accessToken)
        const result = await api.search('tania bowra')

        expect(result.error.message).toBe('Internet is down')
      })
    })

    describe('and the search term is empty', () => {
      it('return empty result', async () => {
        const api = new Api(spotifyURL, accessToken)
        const result = await api.search('')

        expect(result).toStrictEqual({})
      })
    })

    describe('and the search term is whitespaces', () => {
      it('return empty result', async () => {
        const api = new Api(spotifyURL, accessToken)
        const result = await api.search('  ')

        expect(result).toStrictEqual({})
      })
    })
  })
})
