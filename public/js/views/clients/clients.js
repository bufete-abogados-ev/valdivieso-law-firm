
const viewClients = {}

viewClients.Clients = []
viewClients.year = ''
window.viewClients = viewClients

async function Clients(){

    const { data } = await Conn.toFile('clients')

    viewClients.Clients = data

    return /*html*/`
        <div class="dpF fdC w100pc pd2em fs1_2em g2em">
            <div class="dpF fdC g1em">
                <p class="fs1_5em fwB">CASOS DE ÉXITO</p>
                <p class="fs1_3em co5d6162">Nuestra eficiencia profesional es superior al noventa por ciento (90%). Desde el inicio de nuestras actividades profesionales hemos satisfecho a plenitud los intereses de nuestros clientes en múltiples casos. Dada la trascendencia personal o empresarial de los asuntos penales, y las exigencias del secreto profesional (artículos 10 y 11 del Código de Ética de los Colegios de Abogados del Perú), no consideramos conveniente difundir información sobre nuestros casos en general.</p>
            </div>
            ${CalendarClient()}
        </div>
    `

    function CalendarClient(){

        return /*html*/`
            <div class="dpF fdC g1em co5d6162 fs1_3em">
                <p>Antes bien, entre los asuntos que per se adquirieron gran connotación pública y han concluido a satisfacción de nuestros clientes, podemos mencionar los siguientes:</p>
                <div class="dpF fdC w100pc pd0_5em">
                    ${get_year_uniqs().map((year,index) => CardYear(year,index)).join('')}
                </div>
            </div>
        `


        function CardYear(year,index){

            const clients = viewClients.Clients.filter(client => client.year === year.toString())

            const boderTop = index > 0 ? 'bT0' : ''

            return /*html*/`<div class="dpF fdC w100pc ba88c44 ${boderTop} hoP bB0">
                <div class="dpF g1em pd0_5em ba88c44 bTN bL0 bR0 fs0_9em" onclick="expand_client(${year})">
                    <div class="dpF fdC fsh0 w1_5em">
                        <img id="icon_year_${year}" class="w100pc h100pc" src="img/icons/clients/plus.svg" alt="imgplusless">
                    </div>
                    <p>${year}</p>
                </div>
                <div id="client_content_${year}" class="client_content Mh0em trns0_5s ovfH">
                    <div class="dpF fdC w100pc pd2em fs0_9em">
                        ${clients.map( ({text,file}) => {
                            return `<div class="dpF aiC g0_5em bgEV coWhite pd0_7em cardYear jcSB fdCC br0_5em"
                                    onclick="openPDF('${file}')"
                                    onmouseover="download_hover(this,'hover')"
                                    onmouseout="download_hover(this)">
                                        <p>${text}</p>
                                        ${ImgDownload(file)}
                                    </div>`
                        }).join('')}
                    </div>
                </div>
            </div>`


            function ImgDownload(file=''){
                if(!file) return ''
                return `
                    <div class="h2em fsh0 dpF aiC jcC">
                        <img class="w100pc h100pc" src="img/icons/clients/download.svg" alt="download">
                    </div>`
            }
        }

    }
}


function get_year_uniqs(){
    const dates = []
    viewClients.Clients.forEach(client => {
        if(!dates.includes(client.year)){
            dates.push(client.year)
        }
    })
    return dates
}

function close_year(){
    if(viewClients.year === '') return
    const   elemContent = document.getElementById(`client_content_${viewClients.year}`),
            container   = elemContent.parentElement,
            iconYear    = document.getElementById(`icon_year_${viewClients.year}`)
    elemContent.expand(false)
    iconYear.src = 'img/icons/clients/plus.svg'
    viewClients.year = ''
    setTimeout(()=> container.changeClass({add:'bB0'}),0)
}


window.expand_client = (year) => {
    const   elemContent = document.getElementById(`client_content_${year}`),
            container   = elemContent.parentElement,
            iconYear    = document.getElementById(`icon_year_${year}`)

    const oldTag = viewClients.year
    close_year()
    if(oldTag === year ) return
    viewClients.year = year
    iconYear.src = 'img/icons/clients/less.svg'
    elemContent.expand()
    setTimeout(()=>container.changeClass({rem:'bB0'}),0)
}

window.openPDF = (nameFile='') => {
    if(nameFile==='') return swal('','No hay ningún archivo subido para este caso.','error')
    window.open(`files/${nameFile}`,"_blank");
}

window.download_hover = (elem,hover='') => {
    const img = elem.querySelector('img')
    if(!img) return
    if(hover === 'hover') img.src = 'img/icons/clients/download_hover.svg'
    else img.src = 'img/icons/clients/download.svg'
}



export {
    Clients
}