/** para cerrar los layers */
window.addEventListener('click', (e) => {
    const layer_main_menu = document.getElementById('layer_main_menu')
    if(e.target == layer_main_menu){
        layer_main_menu.classList.remove('activeMenu')
    }
})
