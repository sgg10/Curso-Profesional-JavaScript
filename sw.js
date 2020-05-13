const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;
    //get
    if(request.method !== 'GET') return

    //Buscar en cache
    event.respondWith(cachedResponse(request))

    //Actualizar el cache
    // ? Esto evitara que al actualizar el contenido de los scripts o paginas, el navegador no se quede con una version vieja
    event.waitUntil(updateCache(request))
})

async function precache(){
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/index.css',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/BigBuckBunny.mp4'
    ])
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request) //Si no hay nada que coincida en la cache, retorna lo que devuelva en navegador
}

async function updateCache(request){
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}