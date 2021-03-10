import { render } from '@testing-library/vue'
import Results from '@/components/Results.vue'
import SpotifyResponse from './support/SpotifyResponse'

describe('Results', () => {
  const props = { results: SpotifyResponse }

  it('Shows different albums', async () => {
    const { getByText } = render(Results, { props: props })

    getByText('Metallica the album')
    getByText('Garage Inc.')
  })

  it('Shows different artists', async () => {
    const { getByText, getAllByText } = render(Results, { props: props })

    getAllByText('Metallica')
    getByText('SaD - Symphony and Metallica')
  })

  it('Shows different tracks', async () => {
    const { getByText, getAllByText } = render(Results, { props: props })

    getAllByText('Nothing Else Matters')
    getByText('Enter Sandman')
  })

  describe('and there are not results', () => {
    it('shows a friendly message', async () => {
      const { getByText } = render(Results, {
        props: {
          results: {
            albums: { total: 0 },
            artists: { total: 0 },
            tracks: { total: 0 }
          }
        }
      })

      getByText('No results were found.')
    })
  })
})
