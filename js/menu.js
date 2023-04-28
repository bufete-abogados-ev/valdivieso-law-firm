

function Menu(){

    const items = [
        {name: 'Inicio'     , url: '#inicio'},
        {name: 'Nosotros'   , url: '#nosotros'},
        {name: 'Servicios'  , url: '#servicios'},
        {name: 'Equipo'     , url: '#equipo'},
        {name: 'Clientes'   , url: '#clientes'},
        {name: 'Contacto'   , url: '#contacto'},
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
        return /*html*/`
            <li class="menu-item" onmouseover="efect_hover(this)" onmouseout="efect_hover(this,'out')">
                <a href="${url}">${name}</a>
            </li>`
    }
}


window.close_nav = () => {
    const layer_main_menu = document.getElementById('layer_main_menu')
    layer_main_menu.classList.remove('activeMenu')
}

window.efect_hover = (elemLi,hover='') => {
    const a_href = elemLi.querySelector('a')
    if(hover == 'out') a_href.style.color = ''
    else a_href.style.color = '#fff'
    
}


export {
    Menu
}