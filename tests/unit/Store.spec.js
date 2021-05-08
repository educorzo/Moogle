import store from '@/Store'

describe('Store', () => {
  describe('when commiting an update', () => {
    it('update of search results state', () => {
      store.commit('update', { searchResults: 'something' })
      expect(store.state.searchResults).toEqual({ searchResults: 'something' })
    })
  })
})
