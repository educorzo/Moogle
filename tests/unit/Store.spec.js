import store from '@/Store'

describe('Store', () => {
  describe('when commiting an update', () => {
    it('update searchterm state', () => {
      store.commit('update', 'Metallica')
      expect(store.state.searchTerm).toBe('Metallica')
    })
  })
})
