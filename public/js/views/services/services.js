import { Slide } from "../../components/Slide.js"
import { Title } from "../../components/Title.js"
import { Router } from "../../router.js"

const viewServices = {}

function Services(){

    const {id} = Router.allParams

    viewServices.services = [
        { idService: '1' ,name: 'SOLUCIÓN DE CONTROVERSIAS Y LITIGACIÓN', img: 'service', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.' },
        { idService: '2' ,name: 'CUMPLIMIENTO'                          , img: 'service', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.' },
        { idService: '3' ,name: 'CONSULTORIA'                           , img: 'service', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.' },
        { idService: '4' ,name: 'LITIGACIÓN'                            , img: 'service', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in labore laudantium deserunt fugiat numquam.' },
    ]

    const section = !id ? 'SERVICOS' : viewServices.services.find(service => service.idService === id).name

    return /*html*/`
            ${Slide({title:'E&V',section,pathImg:'img/components/services.jpg'})}
            ${Body()}
        `


    function Body(){

        if(!id) return AllServices()

        return /*html*/`
            <div class="dpF fdC pd2-4em g3em fs1_2em g1emC">
                ${InfoService()}
                ${OtherServices()}
            </div>
        `
    }

    function InfoService(){
        return /*html*/`
            <div class="dpF g1em fdCC aiCC">
                <div class="dpF fdC g1em co5d6162">
                    <p class="fs1_2em">Caro & Asociados cuenta con un equipo altamente especializado con más de dieciséis años de experiencia en el ejercicio profesional y docencia del derecho penal económico y de la empresa en nuestro país. En la actualidad, a este equipo hemos incorporado, de forma permanente, profesionales con basta experiencia en otras ramas del derecho, por lo que ofrecemos un nuevo enfoque multidisciplinario y estándar en la solución de controversias, en el que se brinda un asesoramiento jurídico interdisciplinario de alto valor añadido para el desenvolvimiento óptimo de sus actividades, procurando así una sólida, seria y muy eficaz asesoría pre-procesal y defensa corporativa en todas las fases de una contienda, ya sea ésta de naturaleza civil, comercial, administrativo, arbitral o constitucional.</p>
                    <p class="fs1_5em fwB">${section}</p>
                    <div class="dpF fdC g1em pdL1em fs1_2em">
                        <p>En Caro & Asociados ofrecemos la asesoría y acompañamiento en las diferentes fases de negociación previas a una acción judicial, así como también una vez instaurada ésta, analizando para ello en forma minuciosa todos los aspectos de cada caso que se nos confía.</p>
                        <p>Toda actividad humana supone la asunción de riesgos, generando la necesidad de mitigarlos y/o eliminarlos. En ese sentido, el área de solución de controversias ofrece los servicios en la prevención, manejo y solución de conflictos de cualquier naturaleza, sea esta civil, comercial, administrativo, arbitral o constitucional, entre otros.</p>
                        <p>En la prevención, asesoramos identificando posibles contingencias, ofreciéndoles alternativas que mitiguen el riesgo e implementando las que resulten más acorde para cada cliente.</p>
                    </div>
                    <div class="dpF fdC g1em fs1_2em">
                        <p class="fs1_4em fwB">EQUIPO</p>
                        <div class="dpF fdC g0_5em">
                            <p>Dr. Dino Carlos Caro Coria</p>
                            <p class="coEV fwB">Director General</p>
                        </div>
                        <div class="dpF fdC g0_5em">
                            <p>Maria Alejandra Quintana Gallardo</p>
                            <p class="coEV fwB">Directora del área de Solución de Controversias y Litigios</p>
                        </div>
                    </div>
                </div>
                <div class="dpF fdC g2em w40pc fsh0 w100pcC">
                    <div class="w100pc dpF jcC aiC" style="align-self:start">
                        <img class="w100pc h100pc objfC" src="img/icons/services/service.jpg" alt="service">
                    </div>
                    <button class="pd0_5-2em bga88c44 bN coWhite ho-coEVt ho-bgWhite trns0_5s br0_5em hoP" 
                    style="align-self:center;border: 1px solid #a88c44;"
                    onclick="Router.goTo('/contact')">ASESORÍA</button>
                </div>
            </div>
        `
    }

    function OtherServices(){
        return /*html*/`
            <div class="dpF fdC g1em">
                ${Title('OTROS SERVICIOS')}
                <div class="fs0_8em">
                    ${AllServices({except:id})}
                </div>
            </div>
        `
    }
    
}

function AllServices({except = ''}={}){

    const services = [...viewServices.services]

    if(except) {
        const index = services.findIndex(service => service.idService === except)
        if(index!==-1) services.splice(index,1)
    }


    return /*html*/`
        <div class="dpF aiC jcC pd2-4em g1em fwW fs1em coWhite">
            ${services.map( (service) => articleCard(service)).join('')}
        </div>`

    function articleCard({idService,name,text,img}){

        return /*html*/`
        <div class="w24em h35em ovfH br0_75em posR hoP" style="background: url('img/components/${img}.jpg');background-repeat: no-repeat;background-size: cover;"
            onmouseover="show_hide_more_info(this)" onmouseout="show_hide_more_info(this,'out')">
            <div class="layerDark dpF fdC g0_75em h100pc jcFE pd1_2em trns0_5s">
                <p class="fs1_4em fwB fs1_2em">${name}</p>
                <div class="moreInfo dpF fdC g1_5em Mh0em trns0_5s ovfH">
                    <p class="fs1_2em">${text}</p>
                    <div class="dpF asFS fdC jcC" 
                    onmouseover="expand_line_white(this)" 
                    onmouseout="expand_line_white(this,false)"
                    onclick="Router.goTo('/services?id=${idService}')">
                        <div class="dpF aiC g0_5em">
                            <p class="fs1_1em">Más información</p>
                            <div class="dpF aiC jcC w2em pdT0_3em">
                                <img class="w100pc h100pc" src="img/icons/services/arrow_right.svg" alt="arrow_right">
                            </div> 
                        </div>
                        <div class="lineaWhite"></div>
                    </div>
                </div>
            </div>
        </div>`
    }
}

window.show_hide_more_info = (card,action = 'in') => {
    const   moreInfo        = card.querySelector('.moreInfo'),
            layerDark       = card.querySelector('.layerDark')

    if(action === 'in') {
        layerDark.style.background = '#00000090'
        moreInfo.expand()
    }else{
        layerDark.style.background = ''
        moreInfo.expand(false)
    }
}

window.expand_line_white = (elem,active=true) =>{
    if(active) elem.querySelector('.lineaWhite').style='width:100%;'
    else elem.querySelector('.lineaWhite').style='width:0%;'
}


export {
    Services
}