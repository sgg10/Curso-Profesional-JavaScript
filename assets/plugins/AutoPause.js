class AutoPause{

    constructor(){
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this)
    }

    run(player){
        this.player = player
        const observer = new IntersectionObserver(this.handleIntersection, {threshold: this.threshold})// handler - config(umbral en porcentaje)
        observer.observe(this.player.media)
    }

    handleIntersection(entries){
        //Cuando el observer invoque al handle, le enviara todos los objetos que esta observando (en este caso solo uno)
        const entry = entries[0];
        entry.intersectionRatio >= this.threshold ? this.player.play() : this.player.pause()
        //console.log(entry)
    }
}

export default AutoPause