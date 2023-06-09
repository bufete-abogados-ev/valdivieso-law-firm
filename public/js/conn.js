
class ConectorClass {

    constructor(){}

    async toJson(api, json) {
    
        const destiny = `${urlApi}/${api}`;
        let res = await fetch(destiny, {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(json),
        });
        const data = await res.json();
        console.log(data)
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

    //para archivos json
    async toFile(namaFile='') {
        const path = `js/data/${namaFile}.json`
        const res = await fetch(path)
        return await res.json()
        
    }
    
}


const Conn = new ConectorClass()
window.Conn = Conn

export { Conn }