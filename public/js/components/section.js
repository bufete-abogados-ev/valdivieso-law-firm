

function Section(){

    const social = [
        'fa-linkedin-in',
        'fa-twitter',
        'fa-facebook-f',
        'fa-instagram',
        'fa-tiktok',
        'fa-youtube'
    ]

    return /*html*/`
        <div class="social-media-wrap">
            ${social.map( icon => /*html*/`
                <a href="#">
                    <i class="fa-brands ${icon}"></i>
                </a>
            `).join('')}
        </div>`
}

export {
    Section
}