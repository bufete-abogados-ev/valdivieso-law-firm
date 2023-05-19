window.onServer = window.location.hostname!=='localhost';

window.urlApi = onServer
                ? ''
                : 'http://localhost:3000'

/** para cerrar los layers */
window.addEventListener('click', (e) => {
    const layer_main_menu = document.getElementById('layer_main_menu')
    if(e.target == layer_main_menu){
        layer_main_menu.classList.remove('activeMenu')
    }
})

window.toggle_menu = () => {
    const layer_main_menu = document.getElementById('layer_main_menu')
    if(layer_main_menu.classList.contains('activeMenu')){
        layer_main_menu.classList.remove('activeMenu')
    }else{
        layer_main_menu.classList.add('activeMenu')
    }
}