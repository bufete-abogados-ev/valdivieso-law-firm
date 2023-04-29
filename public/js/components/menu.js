import { Router } from "../router.js"

const dataMenu = {}


window.dataMenu = dataMenu

dataMenu.active = '/'

function Menu(){

    const items = [
        {name: 'Inicio'     , url: '/'},
        {name: 'Nosotros'   , url: '/about'},
        {name: 'Servicios'  , url: '/services'},
        {name: 'Equipo'     , url: '/team'},
        {name: 'Clientes'   , url: '/clients'},
        {name: 'Contacto'   , url: '/contact'},
    ]

    const   header = document.querySelector('.header-wrap'),
            style = items.length > 10 ? 'column' : 'row'

    header.style.flexDirection = style

    return /*html*/`
        <ul class="main-menu">
            <li class="btn_close" onclick="close_nav()">
                &#9776
            </li>
            ${items.map( item => Card_li(item)).join('')}
        </ul>`
    
    function Card_li({name,url}){
     
        const border = dataMenu.active=== url ? 'border-bottom: 2px solid #a88c44' : ''

        return /*html*/`
            <li class="menu-item" style="${border}" 
            onclick="menu_goTo('${url}')"
            onmouseover="efect_hover(this)" 
            onmouseout="efect_hover(this,'out')">
                <a>${name}</a>
            </li>`
    }
}

function repaint_menu(){
    const layer_main_menu = document.getElementById('layer_main_menu')
    layer_main_menu.innerHTML   = Menu()
}

window.menu_goTo = (url) => {
    close_nav()
    if(Router.get()===url) return
    dataMenu.active = url
    Router.goTo(url)
    repaint_menu()
}


window.close_nav = () => {
    const layer_main_menu = document.getElementById('layer_main_menu')
    layer_main_menu.classList.remove('activeMenu')
}

window.efect_hover = (elemLi,hover='') => {
    if(window.screen.width > 900) return
    const a_href = elemLi.querySelector('a')
    if(hover == 'out') a_href.style.color = ''
    else a_href.style.color = '#fff'
    
}


export {
    Menu
}