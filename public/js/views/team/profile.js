import { Router } from "../../router.js"


const viewProfile = {}

window.viewProfile = viewProfile

async function Profile(){

    const {id} = Router.allParams
  
    if(!id) Router.goTo('/team')

    const { data } = await Conn.toFile('teams')
    const profile = data.find( item => item.id == id)
    
    viewProfile.profile = profile

    return /*html*/`
        <div class="dpF g2em pd3em fdCC aiCC g1emC">
            ${ProfileImage()}
            ${Information()}
        </div>
    `
    
    function ProfileImage(){

        return /*html*/`
            <div class="w30pc fsh0 w100pcC">
                <img class="w100pc" src="img/users/luz.jpg" alt="profile">
            </div>
        `
    }

    function Information(){

        const {name,subTitle='',phone='',mail=''} = profile

        return /*html*/`
            <div class="dpF fdC g1em w100pc fs1_3em co5d6162">
                <div class="dpF fdC g0_4em">
                    <p class="fs1_5em fwB">${name}</p>
                    <p class="fs1_3em fwB coEV">${subTitle}</p>
                </div>
                <div class="dpF fdC g0_4em fs1_1em">
                    <div>
                        <p>${phone}</p>
                    </div>
                    <div>
                        <p>${mail}</p>
                    </div>
                    <div class="dpF fdC g1em mgT1em">
                        ${get_study_information().map( study => CardInformation(study)).join('')}
                    </div>
                </div>
            </div>
        `
    
        function CardInformation({name,value}={}){
            return /*html*/`
                <div class="dpF fdC g0_75em">
                    <p class="fs1_2em fwB">${name}</p>
                    <div class="dpF fdC g0_2em pdL1em">
                        ${value.map( item => /*html*/`
                            <div class="dpF aiC g0_5em">
                                ${point()}
                                <p>${item}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `
        }
    }
}

function get_study_information(){

    const arraybyInfo = []

        const allInfoToShow =[
            "professionTitles",
            "masters",
            "specializations",
            "graduates",
            "Investigation",
            "publications",
            "WorkExperience",
            "Certifications",
            "Memberships"
        ]

        const nameShow = {
            professionTitles    :"Grados y títulos obtenidos",
            masters             :"Estudios de maestría",
            specializations     :"Estudios de especialización",
            graduates           :"Diplomados",
            Investigation       :"Trabajos de investigación",
            publications        :"Publicaciones",
            WorkExperience      :"Experiencia Laboral",
            Certifications      :"Certificaciones",
            Memberships         :"Membresías"

        }

    Object.keys(viewProfile.profile).forEach(key => {
        if(allInfoToShow.includes(key)){
            if(viewProfile.profile[key].length > 0){
                arraybyInfo.push({name:nameShow[key],value:viewProfile.profile[key]})
            }
        }
    })

    return arraybyInfo
}



function point(){

    return /*html*/`
        <div class="dpF br50pc fsh0" style="
        width: 0.4em;
        height: 0.4em;
        background: #5d6162;">
        </div>
    `
}

export {
    Profile
}