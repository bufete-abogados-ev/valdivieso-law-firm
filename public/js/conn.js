
class ConectorClass {

    constructor(){}

    async toJson(api, json) {
    
        const destiny = `${urlApi}/${api}`;
        let res = await fetch(destiny, {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(json),
        });
        let data = await res.json();
        return data;
    }
    
    async toFD(api,FormData) {
        
        const destiny = `${urlApi}/${api}`
        
        const res = await fetch( destiny, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' } ,
                body: JSON.stringify(Object.fromEntries(FormData.entries()))
            })
        const data = await res.json();
        console.log(data)
        return data;
    }
}


const Conn = new ConectorClass()
window.Conn = Conn

export { Conn }