import { render, fireEvent, waitFor } from '@testing-library/vue'
import App from '@/App.vue'
import store from '@/Store'
import ApiStub from './support/ApiStub'
import SpotifyResponse from './support/SpotifyResponse'

describe('Basic search', () => {
  it('returns artists, albums and tracks', async () => {
    const api = { api: new ApiStub(SpotifyResponse) }
    const { getByText, getByPlaceholderText, getAllByText } = render(App, { provide: api, store: store })
    const input = getByPlaceholderText('Search some music')

    await fireEvent.update(input, 'Metallica')
    await fireEvent.keyUp(input, { key: 'Enter' })

    await waitFor(() => {
      // Artists
      getAllByText('Metallica')
      getAllByText('SaD - Symphony and Metallica')

      // Albums
      getByText('Garage Inc.')
      getByText('Metallica the album')

      // Tracks
      getByText('Metallica the album')
      getByText('Enter Sandman')
    })
  })

  describe('and there is an error', function () {
    it('shows a friendly message', async () => {
      const api = {
        api: new ApiStub({
          error: {
            status: 400,
            message: 'Unexpected search'
          }
        })
      }

      const { getByText, getByPlaceholderText } = render(App, { provide: api })
      const input = getByPlaceholderText('Search some music')

      await fireEvent.update(input, 'Metallica')
      await fireEvent.keyUp(input, { key: 'Enter' })

      await waitFor(() => {
        getByText('Ups, there were an error: "Unexpected search".')
      })
    })

    describe('because token has expired', function () {
      it('shows a message for redirection', async () => {
        const api = {
          api: new ApiStub({
            error: {
              status: 401,
              message: 'Access token expired'
            }
          })
        }

        const { getByText, getByPlaceholderText } = render(App, { provide: api })
        const input = getByPlaceholderText('Search some music')

        await fireEvent.update(input, 'Metallica')
        await fireEvent.keyUp(input, { key: 'Enter' })

        await waitFor(() => {
          getByText('Your session has expired. Click')
          const link = getByText('here')
          expect(link.href).toContain('/')
        })
      })
    })
  })
})
