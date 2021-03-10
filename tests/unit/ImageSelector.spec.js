import selectImage from '@/core/ImageSelector.js'

describe('Image selector', () => {
  describe('when there are not images', () => {
    it('returns empty url', () => {
      expect(selectImage([], 150)).toBe('')
    })
  })

  describe('when there are images bigger than required height', () => {
    it('returns the smallest image url', () => {
      const images = [
        { height: 300, url: '/too_big' },
        { height: 200, url: '/big' },
        { height: 180, url: '/little_big' }
      ]

      expect(selectImage(images, 150)).toBe('/little_big')
    })
  })

  describe('when there are images smaller than required height', () => {
    it('returns the biggest image url', () => {
      const images = [
        { height: 50, url: '/too_small' },
        { height: 100, url: '/small' },
        { height: 149, url: '/bit_small' }
      ]

      expect(selectImage(images, 150)).toBe('/bit_small')
    })
  })

  describe('when there are images bigger and smaller than required height', () => {
    it('returns the biggest and closest to the required height url', () => {
      const images = [
        { height: 300, url: '/too_big' },
        { height: 100, url: '/small' },
        { height: 200, url: '/big' }
      ]

      expect(selectImage(images, 150)).toBe('/big')
    })
  })

  describe('when there are images including the required height', () => {
    it('returns the url with required height', () => {
      const images = [
        { height: 300, url: '/big' },
        { height: 150, url: '/perfect' },
        { height: 140, url: '/small' }
      ]

      expect(selectImage(images, 150)).toBe('/perfect')
    })
  })
})
