import { render } from '@testing-library/vue'
import Picture from '@/components/Picture.vue'

describe('Picture', () => {
  it('shows picture', async () => {
    const props = {
      images: [
        {
          height: 640,
          url: 'http/image',
          width: 640
        }
      ],
      name: 'Metallica album cover'
    }
    const { getByAltText } = render(Picture, { props: props })

    const image = getByAltText('Metallica album cover')
    expect(image.src).toContain('http/image')
  })

  describe('and there are not images', () => {
    it('shows "empty" picture', async () => {
      const props = {
        images: [],
        name: 'Metallica album cover'
      }
      const { getByTitle } = render(Picture, { props: props })

      getByTitle('Image unavailable')
    })
  })
})
