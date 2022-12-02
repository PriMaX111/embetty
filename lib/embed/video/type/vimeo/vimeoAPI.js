export class VimeoAPIVideo {
  constructor(element) {
    this.element = element
  }

  posterImageUrl() {
    return this.element._api(
      `/video/vimeo/${this.element.videoId}-poster-image`
    )
  }

  get src () {
    return `https://player.vimeo.com/video/${this.element.videoId}?autoplay=1#t=${this.element.startAt}`
  }
}
