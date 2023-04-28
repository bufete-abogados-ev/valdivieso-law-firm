import { Menu } from "./menu.js"
import { Section } from "./section.js"

const   section_social  = document.getElementById('section_social'),
        btn_menu        = document.getElementById('btn_menu'),
        layer_main_menu = document.getElementById('layer_main_menu')

section_social.innerHTML = Section()
layer_main_menu.innerHTML = Menu()


btn_menu.addEventListener('click', () => {
    const layer_main_menu = document.getElementById('layer_main_menu')
    if(layer_main_menu.classList.contains('activeMenu')){
        layer_main_menu.classList.remove('activeMenu')
    }else{
        layer_main_menu.classList.add('activeMenu')
    }
})




/** para cerrar los layers */

window.addEventListener('click', (e) => {
    const layer_main_menu = document.getElementById('layer_main_menu')
    if(e.target == layer_main_menu){
        layer_main_menu.classList.remove('activeMenu')
    }
})
