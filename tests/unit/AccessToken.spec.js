import AccessToken from '@/core/AccessToken.js'

describe('Access Token', () => {
  describe('when the uri has not token', () => {
    it('AccessToken is considered empty', () => {
      const currentLocation = { hash: '#expires_in=200' }
      const accessToken = new AccessToken(currentLocation)

      expect(accessToken.isEmpty()).toBeTruthy()
    })
  })

  describe('when the uri has token', () => {
    it('AccessToken is not considered empty', () => {
      const currentLocation = { hash: '#access_token=ABC&expires_in=200' }
      const accessToken = new AccessToken(currentLocation)

      expect(accessToken.Token).toEqual('ABC')
      expect(accessToken.isEmpty()).toBeFalsy()
    })
  })
})
