
import './global.js'
import './protos.js'

import { Router     } from './router.js';
import { Menu       } from './components/menu.js'
import { Social     } from './components/social.js'
import { Home       } from './views/home/home.js';
import { About      } from './views/about/about.js';
import { Services   } from './views/services/services.js';
import { Team       } from './views/team/team.js';
import { Clients    } from './views/clients/clients.js';
import { Contact    } from './views/contact/contact.js';
import { Profile    } from './views/team/profile.js';
import { addProgress } from './components/bar.js';

Router.defineRoutes('content', [
    { path: '/'         , component: Home },
    { path: '/about'    , component: About },
    { path: '/services' , component: Services },
    { path: '/team'     , component: Team },
    { path: '/clients'  , component: Clients },
    { path: '/contact'  , component: Contact },
    { path: '/profile'  , component: Profile}
])
  
Router.initRouter();

const   section_social  = document.getElementById('section_social'),
        layer_main_menu = document.getElementById('layer_main_menu')

section_social.innerHTML    = Social()
layer_main_menu.innerHTML   = Menu()


window.toggle_menu = () => {
    const layer_main_menu = document.getElementById('layer_main_menu')
    if(layer_main_menu.classList.contains('activeMenu')){
        layer_main_menu.classList.remove('activeMenu')
    }else{
        layer_main_menu.classList.add('activeMenu')
    }
}


//añadir el id del div donde se creara una barra de progreso
const idBars = ['progress_bar','progress_team']

addProgress(idBars)



//verifica si esta visible un elemento (tal vez sirva)
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}