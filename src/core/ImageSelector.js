export default function (images, requiredHeight) {
  if (images.length === 0) {
    return ''
  }

  let bestHeight = images[0].height
  let bestImageUrl = images[0].url

  images.forEach(image => {
    if (bestHeight >= image.height && requiredHeight <= image.height) {
      bestHeight = image.height
      bestImageUrl = image.url
    } else if (bestHeight < image.height) {
      bestHeight = image.height
      bestImageUrl = image.url
    }
  })

  return bestImageUrl
}
