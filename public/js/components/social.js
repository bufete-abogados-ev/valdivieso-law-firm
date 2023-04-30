

function Social(){

    const social = [
        { icon: 'fa-linkedin-in'  , url: 'https://www.linkedin.com/in/bufete-de-abogados-valdivieso-838ba5260/' },
        { icon: 'fa-twitter'      , url: 'https://twitter.com/' },
        { icon: 'fa-facebook-f'   , url: 'https://www.facebook.com/profile.php?id=100089079079081' },
        { icon: 'fa-instagram'    , url: 'https://www.instagram.com/' },
        { icon: 'fa-tiktok'       , url: 'https://www.tiktok.com/@bufetedeabogadosev' },
        { icon: 'fa-youtube'      , url: 'https://www.youtube.com/' },
    ]

    return /*html*/`
        <div class="pd0-4em dpF jcFE aiC h100pc pd0C h100pcC dpFC jcCC aicC">
            ${social.map( s => /*html*/`
                <a href="${s.url}" target="_blank" class="coWhite fs1_4em dpF jcC aiC mg0-0_5em fs1_2emC">
                    <i class="fa-brands ${s.icon}"></i>
                </a>
            `).join('')}
        </div>`
}

export {
    Social
}