export class VimeoOembedVideo {
  constructor(element) {
    this.element = element
  }

  posterImageUrl(width, height) {
    let url = `/video/vimeo/oembed/${this.element.videoId}-poster-image`

    if (this.element.videoPrivateId) {
      url = `${url}?h=${this.element.videoPrivateId}`

      if (width && height) url = `${url}&width=${width}&height=${height}`
    } else {
      if (width && height) url = `${url}?width=${width}&height=${height}`
    }

    return this.element._api(url)
  }

  get src () {
    return `https://player.vimeo.com/video/${this.element.videoId}?h=${this.element.videoPrivateId}&autoplay=1#t=${this.element.startAt}`
  }
}
