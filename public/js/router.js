
const Router = new class{

    constructor(){
        this.content = null
        this.routes = []
        this.currentRoute = null
    }

    defineRoutes(content,allRoutes){
        this.content = document.getElementById(content);
        this.routes = allRoutes;
    }

    initRouter() {
        this.currentRoute = window.location.pathname;
        const existRoute = this.searchRoute(this.currentRoute);

        // Para la ruta actual
        existRoute  ? Router.handleRouter(this.currentRoute, true)
                    : Router.handleRouter('/', true)
        
        this.addPopstate();
    }

    handleRouter(route, isPopState){
   
        const {component} = this.searchRoute(route) || {};
        
        if(!component) return 
        this.content.innerHTML = component()
      
        // Actualizar la URL si la llamada no proviene del evento popstate
        if (!isPopState) history.pushState({ path: route }, '', route );
    }

    goTo(rout='/'){
        const onlyRouter = rout.split('?')[0]
        this.currentRoute = onlyRouter;
        this.handleRouter(rout, false);
    }

    params(){
        const   objectReturn    = {},
                params          = window.location.search,
                onlyParams      = params.slice(1).split('&')

        objectReturn.route = this.currentRoute;

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