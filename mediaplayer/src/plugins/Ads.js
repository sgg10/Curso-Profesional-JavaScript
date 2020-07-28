import Ads from './ads_config/controller.js'

class AdsPlugin{
    constructor(){
        this.ads = new Ads()
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
        this.currentAd
        this.adsContainer = document.createElement('div')
    }

    run(player){
        this.player = player
        this.player.container.appendChild(this.adsContainer)
        this.media = this.player.media
        this.media.addEventListener('timeupdate', this.handleTimeUpdate)
    }

    handleTimeUpdate(){
        const currentTime = Math.floor(this.media.currentTime)
        if(currentTime % 30 == 0){
            this.renderAd()
        }
    }

    renderAd(){
        if(this.currentAd) return
        const ad = this.ads.getAd()
        this.currentAd = ad
        //Desactivar el Adblocker para mostrar el anuncio
        this.adsContainer.innerHTML =`
        <div class="ads">
        <a class="ads__link" href="${this.currentAd.url}" target="_blank">
            <img class="ads__img" src="${this.currentAd.imageUrl}" />
            <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
            <p class="ads__body">${this.currentAd.body}</p>
            </div>
        </a>
      </div>
        `
        setTimeout(() => {
            this.currentAd = null
            this.adsContainer.innerHTML = ``
        }, 10000)
    }

}

export default AdsPlugin