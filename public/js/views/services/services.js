

function Services(){

    const services = [
        { service: 'solución de controversias y litigación' },
        // { service: 'cumplimiento'                           },
        // { service: 'consultoría'                            },
        // { service: 'litigación'                             },
    ]

    return /*html*/`
        <div class="fb50pc fs1_8em coWhite">
            <div class="services">
                <div class="pd2-4em">
                    <h1>Servicios</h1>
                </div>
            </div>
        </div>
        <div class="fs1_8em coWhite">
            <div class="dpF aiC jcC pd2-4em g1em fwW">
                ${services.map( (service) => articleCard(service)).join('')}
        </div>
        </div>`
    
    function articleCard({service}){
    
        return /*html*/`
        <div class="w24em h35em Mw24em ovfH br0_75em">
            <img
            class="objfC h100pc Mw100pc"
            src="../img/components/service.jpg"
            alt="${service}"
            />
            <div class="card__content | flow">
                <div class="card__content--container | flow">
                    <h2 class="card__title">${service}</h2>
                    <p class="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                    labore laudantium deserunt fugiat numquam.
                    </p>
                </div>
                <button class="card__button">Read more</button>
            </div>
        </div>`
    }
}

export {
    Services
}