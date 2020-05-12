const video = document.querySelector("video")
const button = document.querySelector('button')

/** 
* ?Antes del es6+
function MediaPlayer(config){
this.media = config.video
}
MediaPlayer.prototype.play = () => this.media.play()
MediaPlayer.prototype.pause = () => this.media.pause()
MediaPlayer.prototype.togglePlay = () => video.paused ? MediaPlayer.prototype.play() : MediaPlayer.prototype.pause()
*/

class MediaPlayer{
constructor(config){
this.media = config.video
}

play = () => this.media.play()
pause = () => this.media.pause()
togglePlay = () => this.media.paused ? this.play() : this.pause()
}

const player = new MediaPlayer({video: video});

button.onclick = () => player.togglePlay();