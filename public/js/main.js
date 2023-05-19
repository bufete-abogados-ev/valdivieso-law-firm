
import './global.js'
import './protos.js'

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
import { get_path } from './util.js';

const path = get_path()

const Component = {
    '/'        : Home,
    '/about'   : About,
    '/services': Services,
    '/team'    : Team,
    '/clients' : Clients,
    '/contact' : Contact,
    '/profile' : Profile
}[path]

const   section_social  = document.getElementById('section_social'),
        layer_main_menu = document.getElementById('layer_main_menu'),
        content         = document.getElementById('content')

section_social.innerHTML    = Social()
layer_main_menu.innerHTML   = Menu()
content.innerHTML           = await Component()

//añadir el id del div donde se creara una barra de progreso
const idBars = ['progress_bar']
addProgress(idBars)
