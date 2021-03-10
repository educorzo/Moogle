import { render } from '@testing-library/vue'
import Card from '@/components/Card.vue'
import SpotifyResponse from './support/SpotifyResponse'

describe('Card renders', () => {
  describe('Artist', () => {
    it('with relevant information', async () => {
      const props = { card: SpotifyResponse.artists.items[0] }
      const { getByText, getByAltText } = render(Card, { props: props })

      const image = getByAltText('Metallica members photo')
      getByText('Metallica')
      getByText('Popularity: 85')
      expect(image.src).toContain('https://i.scdn.co/image/c1fb4d88de092b5617e649bd4c406b5cab7d3ddd')
    })
  })

  describe('Album', () => {
    it('with relevant information', async () => {
      const props = { card: SpotifyResponse.albums.items[1] }
      const { getByText, getByAltText } = render(Card, { props: props })

      const image = getByAltText('Garage Inc. album cover')
      getByText('Metallica')
      getByText('Garage Inc.')
      getByText('1998')
      expect(image.src).toContain('https://i.scdn.co/image/ab67616d00001e0275e6375e11550746705a9645')
    })
  })

  describe('Track', () => {
    it('with relevant information', async () => {
      const props = { card: SpotifyResponse.tracks.items[0] }
      const { getByText, getByAltText } = render(Card, { props: props })

      const image = getByAltText('Nothing Else Matters track picture')
      getByText('Nothing Else Matters')
      getByText('Metallica')
      getByText('Runtime: 00:06:28')
      expect(image.src).toContain('https://i.scdn.co/image/ab67616d00001e02cf84c5b276431b473e924802')
    })
  })
})
