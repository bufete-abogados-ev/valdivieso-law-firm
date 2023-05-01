

function addProgress(idBars=[]){
    if(idBars.length == 0) return

    idBars.forEach(bar => {
        window.addEventListener('load', () => advanceBar(bar));
        document.addEventListener('scroll',() => advanceBar(bar), {passive: true});
    });

}

function advanceBar(bar){
    
    const barShow = document.querySelector(`#${bar}`);
    if(!barShow) return

    const   { scrollHeight, clientHeight } = document.scrollingElement,
            HeightScroll                   = scrollHeight - clientHeight,
            advance                        = document.scrollingElement.scrollTop,
            percentAdvance                 = (advance * 100) / HeightScroll
  
    barShow.innerHTML= `<div class="bar w0 h1em fsh0 bgEV w0 trns0_5s"></div>`
    barShow.querySelector('.bar').style.width = `${percentAdvance}%`
}

export {
    addProgress
}