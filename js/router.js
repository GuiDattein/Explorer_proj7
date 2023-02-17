 export class Router {
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event //checar se está acontecendo algum evento - se não pega um evento da wndow
        event.preventDefault() //evitar que a propriedade realize o procedimento padrão
    
        window.history.pushState({}, "", event.target.href) //salvar o historico
    
        this.handle()
    }

    handle(){
        const { pathname } = window.location 
        const route = this.routes[pathname] || this.routes["/home"] || this.routes[404]
        
        fetch(route).then(data => data.text()).then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}