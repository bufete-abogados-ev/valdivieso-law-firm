
function Contact(){
    return /*html*/`
        <div class="dpF fdC w100pc fs1_2em" 
            style="background:url('img/icons/contact/background.jpg');background-repeat:no-repeat;background-size:cover;">
            <div class="dpF w100pc fdCC"  style="background:#80808066;">
                ${FormContact()}
                ${Info()}
            </div>
            <div id="progress_bar"></div>
        </div>
    `

    function FormContact(){

        const inputs = [
            {label:'Nombre'     , id:'name'    , type:'text'    , placeholder:'Nombre'},
            {label:'Email'      , id:'email'   , type:'email'   , placeholder:'Email'},
            {label:'Teléfono'   , id:'phone'   , type:'number'  , placeholder:'Teléfono'},
        ]

        return /*html*/`
            <div class="posR w50pc w100pcC showFormContact">
                <div class="dpF fdC aiC g2em w100pc h100pc pdT4em pdB2em pdB0C">
                    <div class="dpF fdC coWhite fwB w17em">
                        <p class="ls0_2em fs1_6em">E&V</p>
                        <p class="fs1_2em fs2em">Contáctanos</p>
                    </div>
                    <div class="dpF fdC aiC g1em w17em">
                        ${inputs.map(({label,id,type,placeholder}) => /*html*/`
                            <div class="w100pc dpF fdC g0_2em coWhite posR">
                                <label for="${id}">${label}</label>
                                <div class="dpF fdC">
                                    <input id="${id}" type="${type}" placeholder="${placeholder}" 
                                    class="w100pc br0_5em ol0 pd0_5em bN" 
                                    onfocus="expand_line(this)" 
                                    onblur="expand_line(this,false)" />
                                    <div class="linea"></div>
                                </div>
                            </div>
                        `).join('')}
                        <div class="w100pc dpF fdC g0_2em coWhite">
                            <label>Mensaje:</label>
                            <textArea class="w100pc mh5em br0_5em ol0 pd0_5em bN" 
                            style="resize: vertical;"
                            onfocus="expand_line(this)" 
                            onblur="expand_line(this,false)"></textArea>
                            <div class="linea"></div>
                        </div>
                    </div>
                    <div class="w17em dpF jcFE">
                        <button class="pd0_5-1em bga88c44 bN coWhite ho-coEVt ho-bgWhite trns0_5s br0_5em hoP">ENVIAR</button>
                    </div>
                </div>
            </div>
        `
    }

    function Info(){

        const infoContact = [
            {text:'Dirección'       , paragraph: ['Calle Infante de la Torre 164 - Oficina', '101, San Borja, Lima, Perú']},
            {text:'Central'         , paragraph: ['+51 920660097']},
            {text:'Área Comercial'  , paragraph: ['+51 1 4800201 Anexo 1001']},
            {text:'E-mail'          , paragraph: ['bufetedeabogadosvaldivieso@gmail.com']},
            {text:'Horario'         , paragraph: ['08:00 Hrs. - 20:00 Hrs.']},
        ]

        return `
            <div class="dpF fdC g2em w50pc w100pcC bgWhite bgTransparentC coWhiteC pd7-1-7-4em showInfoContact">
                ${infoContact.map(info => CardInfo(info)).join('')}
            </div>
        `

        function CardInfo({text, paragraph}){
            return `
                <div class="dpF g1em aiFS">
                    ${Icon()}
                    <div class="dpF fdC g0_4em">
                        <p class="fs1_2em fwB">${text}</p>
                        <div class="dpF fdC">
                            ${paragraph.map(p => `<p style="word-break: break-word;">${p}</p>`).join('')}
                        </div>
                    </div>
                </div>
            `
        }
    }

    function Icon(){
        return `<div class="w3em h3em bgBlue fsh0">

        </div>`
    }
}

window.expand_line = (elem,active=true) =>{
    if(active) elem.parentElement.querySelector('.linea').style='width:100%;'
    else elem.parentElement.querySelector('.linea').style='width:0%;'
}

export {
    Contact
}