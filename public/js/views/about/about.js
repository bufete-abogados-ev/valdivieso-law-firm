import { Slide } from "../../components/Slide.js"
import { Title } from "../../components/Title.js"


function About(){
    return`
        <div class="w100pc dpF fdC g1em co5d6162">
            ${Slide({title:'E&V',section:'SOBRE NOSOTROS',pathImg:'img/icons/about/background.jpg',content:AddSlide()})}
            ${MissionAndVision()}
            ${Slide({pathImg:'img/icons/about/background2.jpg',content:Values()})}
        </div>
    `


    function MissionAndVision(){

        const mission_and_vision = [
            {id:'Misión', text: 'Ser la firma de Derecho Penal Económico y de la Empresa, Compliance y Litigación más importante del país y reconocida internacionalmente.' },
            {id:'Visión', text: 'Brindar a nuestros clientes un servicio de excelencia, con un equipo de profesionales altamente calificados, que les permita alcanzar sus objetivos y metas.' }
        ]

        return /*html*/`
            <div class="dpF aiFS g2em fdCC pd3em pd1emC fs1_4em">
                ${mission_and_vision.map( ({id,text}) => /*html*/`
                    <div class="dpF fdC g1em w50pc w100pcC trns0_5s posR">
                        ${Title(id)}
                        <p class="fs1em">${text}</p>
                    </div>
                ` ).join('')}
            </div>
        `

    }  
    
    
    function AddSlide(){
        return /*html*/`
            <div class="dpF fdC g1em aiFS w50pc pdB2em w100pcC">
                <div class="coWhite fs1_1em">
                    <p>Nos especializamos en Derecho Penal Económico y de la Empresa, así como en Compliance. Hace quince años, comenzamos nuestras actividades con el objetivo de mejorar los estándares de práctica y los niveles de satisfacción del cliente.</p>
                    <p>Nuestra larga experiencia explica nuestra alta tasa de éxito. Creemos en la integridad empresarial, lo que nos ha permitido celebrar ser la primera empresa en Perú certificada con el Sistema de Gestión Antisoborno ISO 37001: 2016, por BASC.</p>
                </div>
                <a class="pd0_5-2em bga88c44 bN coWhite ho-coEVt ho-bgWhite trns0_5s br0_5em hoP" 
                style="border: 1px solid #a88c44;"
                href="/contact">ASESORÍA</a>
            </div>
        `
    }

    function Values(){

        const allValues = [
            {name:'Liderazgo'        , img: '', description:'Somos líderes en Derecho Penal Económico y de la Empresa, Compliance y Litigación.'},
            {name:'Integridad'       , img: '', description:'Actuamos con honestidad, transparencia y ética profesional.'},
            {name:'Compromiso'       , img: '', description:'Nos comprometemos con nuestros clientes y con la sociedad.'},
            {name:'Excelencia'       , img: '', description:'Buscamos la excelencia en todo lo que hacemos.'},
            {name:'Innovación'       , img: '', description:'Innovamos en la prestación de nuestros servicios.'},
            {name:'Trabajo en equipo', img: '', description:'Trabajamos en equipo para alcanzar los objetivos de nuestros clientes.'},
        ]

        return /*html*/`
            <div class="w100pc dpF fdC g1_5em coWhite aiC pdB3em">
                <h2>VALORES</h2>
                <div class="dpG gtcR3-1fr gtcR1-1frC g3em fwW jcC pd1em">
                    ${allValues.map( value => CardValue(value)).join('')}
                </div>
            </div>
        `

        function CardValue({name,img,description}){
            return /*html*/`
                <div class="dpF fdC g1em aiC fsh0">
                    <p class="txtC fs1_1em fwB">${name}</p>
                    <p class="txtC">${description}</p>
                </div>
            `
        }
    }
}

export {
    About
}