import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video")
const play = document.querySelector('#play')
const mute = document.querySelector('#mute')

const player = new MediaPlayer({video: video, plugins:[new AutoPlay(), new AutoPause()]})

play.onclick = () => player.togglePlay()
mute.onclick = () => player.toggleMute()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => console.log(error.mesaage))
}