import MediaPlayer from '../../mediaplayer/lib/MediaPlayer,js';
import AutoPlay from '../../mediaplayer/lib/plugins/AutoPlay'
import AutoPause from '../../mediaplayer/lib/plugins/AutoPause'
import Ads from '../../mediaplayer/lib/plugins/Ads.js'

const video = document.querySelector("video")
const play = document.querySelector('#play')
const mute = document.querySelector('#mute')

const player = new MediaPlayer({video: video, plugins:[new AutoPlay(), new AutoPause(), new Ads()]})

play.onclick = () => player.togglePlay()
mute.onclick = () => player.toggleMute()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => console.log(error.mesaage))
}