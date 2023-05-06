
const Router = new class{

    constructor(){
        this.content = null
        this.routes = []
        this.currentRoute = null
        this.allParams = {}
    }

    defineRoutes(content,allRoutes){
        this.content = document.getElementById(content);
        this.routes = allRoutes;
    }

    initRouter() {
        this.currentRoute = window.location.pathname;
        const existRoute = this.searchRoute(this.currentRoute);

        this.allParams = this.params(false)

        // Para la ruta actual
        existRoute  ? Router.handleRouter(this.currentRoute, true)
                    : Router.handleRouter('/', true)
        
        this.addPopstate();
    }

    async handleRouter(route, isPopState){
   
        const {component} = this.searchRoute(route) || {};
        
        if(!component) return 
        this.content.innerHTML = await component()
    
        // Actualizar la URL si la llamada no proviene del evento popstate
        if (!isPopState) history.pushState({ path: route }, '', route );
    }

    goTo(rout='/'){
        window.scroll({
            top: 0,
            behavior: 'smooth'
          })
        const [onlyRouter,params] = rout.split('?')
        this.allParams = this.convertParamsToObject(params)
        this.currentRoute = onlyRouter;
        this.handleRouter(rout, false);
    }

    convertParamsToObject(params=""){
        const objectParams = {}
        params = params.split('&')
        params.forEach(param=>{
            const [key,value] = param.split('=')
            objectParams[key] = value
        })
        return objectParams;
    }

    // newUrl(rout='/'){
    //     history.pushState({}, null, rout);
    //     Router.handleRouter(rout, false);
    // }

    params(withRoute=false){
        const   objectReturn    = {},
                params          = window.location.search,
                onlyParams      = params.slice(1).split('&')

        if(withRoute) objectReturn.route = this.currentRoute;

        if(!params) return objectReturn;
 
        onlyParams.forEach(param=>{
            const [key,value] = param.split('=')
            objectReturn[key] = value
        })

        return objectReturn;
    }

    get(){
        return this.currentRoute;
    }

    searchRoute(rout){
        rout = rout.split('?')[0]
        return this.routes.find(route=>route.path===rout);
    }

    addPopstate(){
        // Agregar el manejador para el evento popstate
        window.addEventListener('popstate', function(event) {
            const currentRoute = event.state ? event.state.path : '/';
            if (Router.searchRoute(currentRoute)) Router.handleRouter(currentRoute, true);
            else Router.handleRouter('/', true);
        });
    }

    
}

window.Router = Router;

export {
    Router
}