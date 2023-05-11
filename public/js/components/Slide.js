

function Slide({
    title       = '',
    section     = '',
    pathImg     = '',
    darken      = true  
}){

    const style = darken ? 'background:#00000080;' : ''

    return /*html*/`
        <div class="w100pc posR ovfH" style="min-height:25em">
            <div style="background: url('${pathImg}');
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;
            background-attachment: fixed;">
            </div>
            <div class="w100pc posA h100pc T0" style="${style}">
                <div class="fs1_5em fwB pdT1em pdL2em">
                    <p class="ls0_2em fs1_5em coWhite">${title}</p>
                    <p class="ls0_2em fs2em coWhite">${section}</p>
                </div>
            </div>
        </div>
    `
}

export {
    Slide
}