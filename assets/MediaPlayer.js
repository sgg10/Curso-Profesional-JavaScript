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
        this.plugins = config.plugins || []
        this._initPlugins()
    }

    play = () => this.media.play()
    pause = () => this.media.pause()
    mute = () => this.media.muted = true
    unmute = () => this.media.muted = false
    togglePlay = () => this.media.paused ? this.play() : this.pause()
    toggleMute = () => this.media.muted ? this.unmute() : this.mute()

    _initPlugins = () => {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        });
    }
}

export default MediaPlayer