
function Home(){

    setTimeout(() => {
        const slider = document.querySelector('#slider');
        const sliderSection = document.querySelectorAll('.slider_section');
        const sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    }, 0);

    return`
        <div class="h100vh">
            ${Carrosel()}
        </div>
        ${Home_about()}
    `

    function Carrosel(){
        return /*html*/`
            <div class="w100pc h100pc posR dpF aiC ovfH">
                <div id="slider" class="dpF h100pc w100pc" style="margin-left: -100%;transition: all 1s;">
                    <div class="slider_section w100pc h100pc fsh0 dpF aiC jcC">
                        <img class="posA T0 w100pc h100pc objfC" src="img/hero.jpg" />
                        <p class="coWhite fs1_5em posR">1</p>
                    </div>
                    <div class="slider_section w100pc h100pc fsh0 dpF aiC jcC">
                        <img class="posA T0 w100pc h100pc objfC" src="img/hero.jpg" />
                        <p class="coWhite fs1_5em posR">2</p>
                    </div>
                    <div class="slider_section w100pc h100pc fsh0 dpF aiC jcC">
                        <img class="posA T0 w100pc h100pc objfC" src="img/hero.jpg" />
                        <p class="coWhite fs1_5em posR">3</p>
                    </div>
                    <div class="slider_section w100pc h100pc fsh0 dpF aiC jcC">
                        <img class="posA T0 w100pc h100pc objfC" src="img/hero.jpg" />
                        <p class="coWhite fs1_5em posR">4</p>
                    </div>
                </div>
                <div id="button_left" onclick="prev()"  
                class="posA h10em w5em L0 fsh0 dpF aiC jcC coWhite hoP" 
                    style="background: #00000080;">
                    <img src="img/icons/home/arrow_left.svg" alt="arrow_right">
                </div>
                <div id="button_right" onclick="next()" 
                class="posA h10em w5em R0 fsh0 dpF aiC jcC coWhite hoP" 
                    style="background: #00000080;">
                    <img src="img/icons/home/arrow_right.svg" alt="arrow_right">
                </div>
            </div>
        `
    }

    function Home_about(){
        return /*html*/`
            <div class="dpF g1em pd2em co5d6162 fs1_2em fdCC">
                <div class="dpF fdC g1em w50pc w100pcC">
                    <div class="fs1_5em fwB">
                        <p class="ls0_2em coEV">E&V</p>
                        <p class="ls0_2em">QUIENES SOMOS</p>
                        <div class="h0_5em w5em fsh0 bgEV mgT0_5em"></div>
                    </div>
                    <p class="fs1_2em">Somos una firma especializada en Derecho Penal Económico y de la Empresa, y Compliance. Iniciamos nuestras actividades hace 16 años para mejorar los estándares de la práctica y, con ello, los niveles de satisfacción del cliente. Nuestra experiencia e industria explican la alta tasa de casos de éxito. Apostamos por la integridad empresarial, por ello somos la primera firma de abogados del Perú en obtener el ISO 37001:2016, Sistema de Gestión Antisoborno, certificado por BASC.</p>
                    <div class="fs1_3em pd0_5-2em bga88c44 bN coWhite ho-coEVt ho-bgWhite trns0_5s br0_5em hoP asFS"
                    style="border: 1px solid #a88c44;"
                    onclick="menu_goTo('/about')">
                        VER MÁS
                    </div>
                </div>
                <div class="dpF aiC jcC w50pc w100pcC fsh0">
                    <img class="w100pc h100pc objfC" src="img/icons/services/service.jpg">
                </div>
            </div>
        `
    }
}


window.next = () => {
    let sliderSectionFirst = document.querySelectorAll('.slider_section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(() => {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500);
}

window.prev = () => {
    let sliderSection = document.querySelectorAll('.slider_section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(() => {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}

export {
    Home
}