
import './global.js'

import { Router     } from "./router.js";
import { Menu       } from "./components/menu.js"
import { Section    } from "./components/section.js"
import { Home       } from './views/home/home.js';
import { About      } from './views/about/about.js';
import { Services   } from './views/services/services.js';
import { Team       } from './views/team/team.js';
import { Clients    } from './views/clients/clients.js';
import { Contact    } from './views/contact/contact.js';

Router.defineRoutes('content',[
    {path: '/'          , component: Home},
    {path: '/about'     , component: About},
    {path: '/services'  , component: Services},
    {path: '/team'      , component: Team},
    {path: '/clients'   , component: Clients},
    {path: '/contact'   , component: Contact}
])
  
Router.initRouter();

const   section_social  = document.getElementById('section_social'),
        layer_main_menu = document.getElementById('layer_main_menu')

section_social.innerHTML    = Section()
layer_main_menu.innerHTML   = Menu()


window.toggle_menu = () => {
    const layer_main_menu = document.getElementById('layer_main_menu')
    if(layer_main_menu.classList.contains('activeMenu')){
        layer_main_menu.classList.remove('activeMenu')
    }else{
        layer_main_menu.classList.add('activeMenu')
    }
}
