import { render, fireEvent, waitFor } from '@testing-library/vue'
import Searcher from '@/components/Searcher.vue'
import ApiStub from './support/ApiStub'
import SpotifyResponse from './support/SpotifyResponse'
import store from '@/Store'

describe('Searcher', () => {
  describe('On click magnifiying glass', () => {
    it('returns artists, albums and tracks', async () => {
      const api = { api: new ApiStub(SpotifyResponse) }
      const { getByPlaceholderText, getByAltText } = render(Searcher, { provide: api, store: store })
      const input = getByPlaceholderText('Search some music')
      const magnifiyingGlass = getByAltText('search icon')

      await fireEvent.update(input, 'Metallica')
      await fireEvent.click(magnifiyingGlass)

      await waitFor(() => {
        expect(store.state.searchResults).toBe(SpotifyResponse)
      })
    })
  })

  describe('On change', () => {
    it('returns autocomplete results', async () => {
      const api = { api: new ApiStub(SpotifyResponse) }
      const { getByPlaceholderText } = render(Searcher, { provide: api, store: store })
      const input = getByPlaceholderText('Search some music')

      await fireEvent.update(input, 'Metallica')

      await waitFor(() => {
        expect(store.state.autoCompleteResults).toBe(SpotifyResponse)
      })
    })

    it('shows autocomplete', async () => {
      const api = { api: new ApiStub(SpotifyResponse) }
      const { getByPlaceholderText, getAllByText } = render(Searcher, { provide: api, store: store })
      const input = getByPlaceholderText('Search some music')

      await fireEvent.update(input, 'Metallica')

      await waitFor(() => {
        getAllByText('Metallica')
        getAllByText('SaD - Symphony and Metallica')
      })
    })
    describe('and there is not results', () => {
      it('does not show anything', async () => {
        const api = { api: new ApiStub({}) }
        const { getByPlaceholderText, queryAllByText } = render(Searcher, { provide: api, store: store })
        const input = getByPlaceholderText('Search some music')

        await fireEvent.update(input, 'Metallica')

        await waitFor(() => {
          const artists = queryAllByText('SaD - Symphony and Metallica')

          expect(artists).toHaveLength(0)
        })
      })
    })
  })
})
