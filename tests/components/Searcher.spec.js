import { render, fireEvent, waitFor } from '@testing-library/vue'
import Searcher from '@/components/Searcher.vue'
import store from '@/Store'

describe('Searcher', () => {
  describe('On click magnifiying glass', () => {
    it('returns artists, albums and tracks', async () => {
      const { getByPlaceholderText, getByAltText } = render(Searcher, { store: store })
      const input = getByPlaceholderText('Search some music')
      const magnifiyingGlass = getByAltText('search icon')

      await fireEvent.update(input, 'Metallica')
      await fireEvent.click(magnifiyingGlass)

      await waitFor(() => {
        expect(store.state.searchTerm).toBe('Metallica')
      })
    })
  })
})
