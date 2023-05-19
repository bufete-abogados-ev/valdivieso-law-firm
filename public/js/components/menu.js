import { get_path, navigateTo } from "../util.js"

const dataMenu = {}


window.dataMenu = dataMenu

function Menu(){

    dataMenu.active = get_path()

    const items = [
        { name: 'Inicio'     , url: '/' },
        { name: 'Nosotros'   , url: '/about' },
        { name: 'Servicios'  , url: '/services' },
        { name: 'Equipo'     , url: '/team' },
        { name: 'Clientes'   , url: '/clients' },
        { name: 'Contacto'   , url: '/contact' },
    ]

    const   header = document.querySelector('#wrap-header'),
            style = items.length > 10 ? 'column' : 'row'

    header.style.flexDirection = style

    return /*html*/`
        <ul class="dpF jcC g1em fwW hoP fdCIP g0IP jcSCIP w60pcIP h100pcIP mgT0IP ovfAIP bg282424IP w100pcC">
            <li class="dpN pd1emIP bBB8B4B44AIP dpIBIP coWhiteIP fs1_5emIP bg212020IP" onclick="close_nav()">
                &#9776
            </li>
            ${items.map( item => Card_li(item)).join('')}
        </ul>`
    
    function Card_li({name, url}){
     
        const border = dataMenu.active === url ? 'border-bottom: 2px solid #a88c44' : ''

        return /*html*/`
            <li class="dpIB hoP bBWhiteIP pd1emIP" style="${border}" 
            onclick="menu_goTo('${url}')"
            onmouseover="efect_hover(this)" 
            onmouseout="efect_hover(this,'out')">
                <a class="coEV fw400 fs1_5em">${name}</a>
            </li>`
    }
}

window.menu_goTo = (url) => {
    navigateTo(url)
}

window.close_nav = () => {
    const layer_main_menu = document.getElementById('layer_main_menu')
    layer_main_menu.classList.remove('activeMenu')
}

window.efect_hover = (elemLi,hover='') => {
    if(window.innerWidth > 850) return
    const a_href = elemLi.querySelector('a')
    if(hover == 'out') a_href.style.color = ''
    else a_href.style.color = '#fff'
}

export {
    Menu
}