import { Router } from './router.js'

const navHome = document.querySelector('.home')
const navUnive = document.querySelector('.universo')
const navExplo = document.querySelector('.exploracao')
const pages = document.querySelector('#home')


const router = new Router()
router.add('/home', '/pages/home.html')
router.add('/universo', '/pages/universo.html')
router.add('/exploracao', '/pages/exploracao.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

navHome.addEventListener('click', function() {
    toggleHome()
})
navUnive.addEventListener('click', function() {
    toggleUniverso()
})
navExplo.addEventListener('click', function() {
    toggleExploracao()
})


function toggleHome() {
    pages.id = "home"
}
function toggleUniverso(){
    pages.id = "universo"
}
function toggleExploracao(){
    pages.id = "exploracao"
}