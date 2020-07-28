class AutoPause{

    constructor(){
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player){
        // *Autopause si el video tiene una visibilidad <= al 25% en la pantalla
        this.player = player
        const observer = new IntersectionObserver(this.handleIntersection, {threshold: this.threshold})// handler - config(umbral en porcentaje)
        observer.observe(this.player.media)
        // *Autopause si el usuario cambia de pestaña
        document.addEventListener('visibilitychange', this.handleVisibilityChange)
    }

    handleIntersection(entries){
        //Cuando el observer invoque al handle, le enviara todos los objetos que esta observando (en este caso solo uno)
        const entry = entries[0];
        entry.intersectionRatio >= this.threshold ? this.player.play() : this.player.pause()
        //console.log(entry)
    }

    handleVisibilityChange(){
        const isVisible = document.visibilityState === "visible"
        isVisible ? this.player.play() : this.player.pause()
    }
}

export default AutoPause