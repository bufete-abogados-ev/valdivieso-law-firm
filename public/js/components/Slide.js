
function Slide({
    title       = '',
    section     = '',
    pathImg     = '',
    content     = '',
    darken      = true  
}){

    const style = darken ? 'background:#00000080;' : ''

    return /*html*/`
        <div class="w100pc posR ovfH" style="min-height:25em">
            <div class="w100pc h100pc posA T0" style="background: url('${pathImg}');
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;
            background-attachment: fixed;">
            </div>
            <div class="w100pc h100pc posA T0" style="${style}"></div>
            <div class="w100pc h100pc posR">
                ${MainText()}
                ${ content ? `
                    <div class="fs1_5em pd1em pdL2em">
                        ${content}
                    </div>` : ''}
            </div>
        </div>
    `

    function MainText(){

        if(!title && !section) return ''

        return /*html*/`
            <div class="fs1_5em fwB pdT1em pdL2em">
                ${ title    ? `<p class="ls0_2em fs1_5em coWhite">${title}</p>` : ''}
                ${ section  ? `<p class="ls0_2em fs2em coWhite">${section}</p>` : ''}
            </div>`
    }
}

export {
    Slide
}