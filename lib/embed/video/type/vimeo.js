import BaseType from '../type'
import {VimeoAPIVideo} from "./vimeo/vimeoAPI";
import {VimeoOembedVideo} from "./vimeo/vimeoOembed";

const CSS = require('!css-loader!postcss-loader!sass-loader!./vimeo.scss').toString()

export class VimeoVideo extends BaseType {
  get css() {
    return CSS
  }

  get posterImageUrl() {
    if (this.element.videoPrivateId) {
      return new VimeoOembedVideo(this.element).posterImageUrl(this.width, this.height)
    } else {
      return new VimeoAPIVideo(this.element).posterImageUrl()
    }
  }

  get src() {
    if (this.element.videoPrivateId) {
      return new VimeoOembedVideo(this.element).src
    } else {
      return new VimeoAPIVideo(this.element).src
    }
  }

  get iframe() {
    return `
      <style>${CSS}</style>
      <div class="wrapper">
        <iframe
          src="${this.src}"
          width="${this.width}"
          height="${this.height}"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
    `
  }
}
