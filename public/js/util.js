
function get_path(){
    return window.location.pathname;
}

function get_params(){
    const   objectReturn    = {},
    params          = window.location.search,
    onlyParams      = params.slice(1).split('&')

    if(!params) return objectReturn;

    onlyParams.forEach(param=>{
        const [key,value] = param.split('=')
        objectReturn[key] = value
    })

    return objectReturn;
}

function navigateTo(path){
    window.location = path
}

export {
    get_path,
    get_params,
    navigateTo
}