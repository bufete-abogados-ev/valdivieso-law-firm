import { Conn } from "../../conn.js"

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

                <form id="form_email" class="dpF fdC aiC g2em w100pc h100pc pdT4em pdB2em pdB0C" onsubmit="e.preventDefault()">
                    <div class="dpF fdC coWhite fwB w17em">
                        <p class="ls0_2em fs1_6em">E&V</p>
                        <p class="fs1_2em fs2em">Contáctanos</p>
                    </div>
                    <div class="dpF fdC aiC g1em w17em">
                        ${inputs.map(({label,id,type,placeholder}) => /*html*/`
                            <div class="w100pc dpF fdC g0_2em coWhite posR">
                                <label for="${id}">${label}</label>
                                <div class="dpF fdC">
                                    <input id="${id}" name="${id}" type="${type}" placeholder="${placeholder}" 
                                    class="w100pc br0_5em ol0 pd0_5em bN" 
                                    onfocus="expand_line(this)" 
                                    onblur="expand_line(this,false)" />
                                    <div class="linea"></div>
                                </div>
                            </div>
                        `).join('')}
                        <div class="w100pc dpF fdC g0_2em coWhite">
                            <label>Mensaje:</label>
                            <textArea class="w100pc mh5em br0_5em ol0 pd0_5em bN" name="message" 
                            style="resize: vertical;"
                            onfocus="expand_line(this)" 
                            onblur="expand_line(this,false)"></textArea>
                            <div class="linea"></div>
                        </div>
                    </div>
                    <div class="w17em dpF jcFE">
                        <button type="button" class="pd0_5-1em bga88c44 bN coWhite ho-coEVt ho-bgWhite trns0_5s br0_5em hoP"
                        onclick="send_email()">ENVIAR</button>
                    </div>
                </form>
            </div>
        `
    }

    function Info(){

        const infoContact = [
            {text:'Dirección'       , icon:'location'   , size:'w90pc', paragraph: ['Calle Infante de la Torre 164 - Oficina', '101, San Borja, Lima, Perú']},
            {text:'Central'         , icon:'phone'      , size:'w80pc', paragraph: ['+51 920660097']},
            {text:'Área Comercial'  , icon:'comercial'  , size:'w100pc', paragraph: ['+51 1 4800201 Anexo 1001']},
            {text:'E-mail'          , icon:'message'    , size:'w80pc', paragraph: ['bufetedeabogadosvaldivieso@gmail.com']},
            {text:'Horario'         , icon:'time'       , size:'w80pc', paragraph: ['08:00 Hrs. - 20:00 Hrs.']},
        ]

        return `
            <div class="dpF fdC g2em w50pc w100pcC bgWhite bgTransparentC coWhiteC pd7-1-7-4em showInfoContact">
                ${infoContact.map(info => CardInfo(info)).join('')}
            </div>
        `

        function CardInfo({text, paragraph,icon,size}){
            return `
                <div class="dpF g1em aiFS">
                    ${Icon(icon,size)}
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

    function Icon(icon,size){
        return `<div class="w3em h3em fsh0 dpF aiC jcC bgEV pd0_2em br0_5em">
            <img class="${size}" src="img/icons/contact/${icon}.svg" style="object-fit:cover">
        </div>`
    }
}

window.expand_line = (elem,active=true) =>{
    if(active) elem.parentElement.querySelector('.linea').style='width:100%;'
    else elem.parentElement.querySelector('.linea').style='width:0%;'
}

window.send_email = async () => {

    if(!form_complete()) return 

    const form_email = document.getElementById('form_email')
    const form = new FormData(form_email)
    const {send} = await Conn.toFD('sendMail', form )

    const   title   = send ? 'Información enviada' : 'Error al enviar información',
            text    = send ? 'Nos comunicaremos con usted lo más pronto posible' : 'Por favor intente nuevamente',
            icon    = send ? 'success' : 'error'
    swal({
        title,
        text,
        icon,
        button: "Ok",
    });

    form_email.reset()
}

function form_complete(){
    
    const inputs    = document.querySelectorAll('#form_email input')
    const textArea  = document.querySelector('#form_email textArea')
    let fieldEmpty  = null

    inputs.forEach(input => {
        const {value} = input
        if(value == '' && !fieldEmpty) fieldEmpty = input
    })

    if(textArea.value == '' && !fieldEmpty) fieldEmpty = textArea

    if(!fieldEmpty) return true

    swal({
        text:'Por favor complete todos los campos',
        icon:'warning',
        buttons: {
            confirm: {
                text: "OK",
            }
        },
    }).then((confirm) => {
        if (confirm) fieldEmpty.focus()
    });

    return false

}

export {
    Contact
}