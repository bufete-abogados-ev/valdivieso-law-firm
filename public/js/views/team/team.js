import { Slide } from "../../components/Slide.js"
import { Conn } from "../../conn.js"
import { navigateTo } from "../../util.js"

const viewTeam = {}

viewTeam.tag = ''
viewTeam.teams = []

window.viewTeam = viewTeam

async function Team(){

    const { data } = await Conn.toFile('teams')

    viewTeam.teams  = data

    return `
        <div class="dpF fdC pdB6em">
            ${Slide({title:'E&V',section:'EQUIPO',pathImg:'img/icons/team/background.jpg'})}
            ${navTeam()}
            <div id="content_nav" class="dpNC posR ovfH"></div>
        </div>
    `
}

function navTeam({repaint=false} = {}){

    const types = [
        {id:'founder'       ,name:'SOCIO FUNDADOR'},
        {id:'partners'      ,name:'SOCIOS'},
        {id:'seniors'       ,name:'ABOGADOS SENIOR'},
        {id:'mains'         ,name:'ABOGADOS PRINCIPALES'},
        {id:'associates'    ,name:'ABOGADOS ASOCIADOS'},
        {id:'consultants'   ,name:'CONSULTORES'},
    ]

    if(repaint){
        document.getElementById('team_tags').innerHTML = ContentTags()
        return
    }

    return /*html*/`
        <div id="team_tags" class="dpF g1em w100pc jcC fs1_2em pd1em pdT3em fwW g0C">
            ${ContentTags()}
        </div>
    `	


    function ContentTags(){

        return  types.map(type => {
                const   {id, name}  = type,
                        _class      = id === viewTeam.tag ? 'bgEV coWhite ba88c44' : 'bgWhite co5d6162'

                return /*html*/`
                    <div id="team_${id}" class="dpF fdC w11em w100pcC">
                        <div 
                        class="${_class} dpF aiC h4_4em h3emC jcC hoP ba88c44 pd1em txtC w100pc br0_5emC ho-bgc0b0b063C bC0B0B033C coBlackC bNC"
                        onclick="paint_team('${id}')">
                            ${name}
                        </div>
                        <div id="team_content_${id}"  class="team_content Mh0em trns0_5s ovfH"></div>
                    </div>
                `
            }).join('')

    }
}

function Content({isNav=false}={}){
    const   _class = isNav ? 'dpF jcC fwW' : 'dpF dpFC fdC aiC'
    return /*html*/`
        <div class="${_class} posR g1em pd1em showFormContact trns0_5s">
            ${viewTeam.teams.filter(user=>user.type===viewTeam.tag).map(user=> cardTeam(user)).join('')}
        </div>
    `
}

function cardTeam({id,name,description,img,type}={}){
    return /*html*/`
        <div class="w25em dpF fdC g1em">
            <div class="w100pc h30em hoP" onclick="select_profile('${id}')">
                <img class="w100pc h100pc" src="img/users/luz.jpg" alt="${name}" style="object-fit:cover">
            </div>
            <div class="dpF fdC g0_5em pd1em pdB2em">
                <p class="fs1_4em fwB coEV txtC">${name}</p>
                <div class="fs1_3em txtC co5d6162">${description}</div>
            </div>
        </div>
    `
}

function close_team(){
    if(viewTeam.tag === '') return
    const elemContent = document.getElementById(`team_content_${viewTeam.tag}`)
    elemContent.expand(false)
    viewTeam.tag = ''
}

window.paint_team = (id) => {
    expand_team(id)
}

window.select_profile = (id) => {
    navigateTo(`/profile?id=${id}`)
}


window.expand_team = (id) =>{

    const  content_nav = document.getElementById('content_nav')
   
    const oldTag = viewTeam.tag

    close_team()

    if(oldTag === id ) return
    viewTeam.tag = id
    navTeam({repaint:true})
    const elemContent     = document.getElementById(`team_content_${id}`)
    elemContent.innerHTML = Content()
    content_nav.innerHTML = Content({isNav:true})
 
    const heightContGen = content_nav.firstElementChild.getBoundingClientRect().height
    content_nav.firstElementChild.style.top = `-${heightContGen}px`
        
    elemContent.expand()
    const heightCont = elemContent.firstElementChild.getBoundingClientRect().height
    elemContent.firstElementChild.changeClass({add:'dpN',rem:'dpF'})
    elemContent.firstElementChild.style.top = `-${heightCont}px`

    setTimeout(() => {
        content_nav.firstElementChild.style.top = `0px`
        elemContent.firstElementChild.style.top = `0px`
    }, 0);

    
}

// function moveScrollToElem(toElem, top, box = window){
//     if(typeof(toElem)==='string') toElem = document.getElementById(toElem);
//     if(toElem) box.scrollTo(0,toElem.offsetTop + (top));
// }


// window.expand_team = (id) =>{

//     const   isCel           = window.innerWidth<=550,
//             placeContent    = isCel ? `team_content_${id}` : 'content_nav',
//             content_nav     = document.getElementById('content_nav'),
//             elemContent     = document.getElementById(placeContent)
//     content_nav.innerHTML = ''
//     if(!isCel){
//         viewTeam.tag = id
//         navTeam({repaint:true})
//         elemContent.innerHTML = Content({isNav:true})

//         // const   elemToShow  = content_nav.firstElementChild,
//         //         top         = elemToShow.getBoundingClientRect().height
//         // console.log(elemContent)
//         // elemToShow.style.top=`-${top}px`
//         // setTimeout(() => {
//         //     elemToShow.classList.remove('dpN')
//         //     elemToShow.classList.add('dpF')
//         //     elemToShow.style.top=`0px`
//         // }, 500);
//         return
//     }

//     const oldTag = viewTeam.tag

//     close_team()

//     if(oldTag === id ) return
//     viewTeam.tag = id
//     elemContent.innerHTML = Content()

    

//     elemContent.expand()
// }


export {
    Team
}