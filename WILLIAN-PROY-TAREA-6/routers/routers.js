const handleRequest = async (req, res) =>{
    const {url, method} =req

const products = [
        { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
        { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
        { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
    ];

req.on('data',(chunk) =>{
    console.log(chunk.toString())
})

req.on('end', () =>{
    const path = url.split('/') [1]
     const id = url.split('/') [2]
     const products = url.split('/')[3]


    try{
        if(path === 'producto'){
           if(method === 'GET' && !id){
            res.writeHead(200)
            res.end(JSON.stringify(products))
           console.log(" 2 path: " , path)
           }
           if(method === 'GET' && id){
            res.writeHead(200)
            const products = products.find(product) 
            return products.id === parseInt(id)
           }
        }
        res.end(JSON.stringify(products))

    }catch(error){
        console.log(error)
        res.writeHead(200)
        res.end('No encontramos esa ruta') 
    }
})
}
export default handleRequest;




