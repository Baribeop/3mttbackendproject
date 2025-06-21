const express = require('express')
// const  cors = require("cors")

const app = express()


app.use(express.json())
// app.use(cors())

const PORT = 8000


app.listen( PORT, ()=> {

    console.log(`Server running on port: ${PORT}`)

})

let dataStore = []

app.get("/home", (req, res)=>{
    return  res.status(200).json({message: "Hello World"})
})



// app.use("api/", routes)


app.get("/all-items", (req, res) =>{

    try {
        const allItems =  dataStore
        
        return res.status(200).json({message: "succss", allItems})
        
    } catch (error) {return res.status(400).json({message: error.message})}

} 
 )



app.post("/add-item",  (req, res) =>{
    try {
        const {name, description} =  req.body

        // if(!id){ return res.status(400).json({message: "please provide item's id"})}

        if(!name){ return res.status(404).json({message: "please provide name of item"})}

        if(!description){ return res.status(404).json({message: "please provide item description"})}


        itemListLength = dataStore.length


        const newItem = {
            'id': itemListLength + 1,
            'name' : name,
            "description" : description
        }

        dataStore.push(newItem)         

        return res.status(200).json({mesaage: 'Succesfully added item', newItem})

    } catch (error) {
        return res.status(400).json({message: error.mesaage})
    }
})


app.get("/item/:id", async(req, res) =>{

    try {
        const {id} = req.params

        console.log(id)
    
        if (!id ) {
            return res.status(404).json({message: "item id is not provided"})
        }

        if(dataStore.length == 0){ return res.status(404).json({message: "no item is found"})}

        const item =  dataStore.filter(item =>{
            // return item.id === id
            return item.id == Number(id)
        })

        if(item.length == 0){ return res.status(404).json({message: "item not found"})}

        return res.status(200).json({message: "success", item})
        
    } catch (error) {return res.status(400).json({message: error.message})}

})


app.delete("/delete-item/:id", async(req, res)=>{
    try {

        const {id} = req.params
        // console.log(id)

        if (!id || id.trim() == ''){return res.status(404).json({message: "item id is not provided"})}

        if(dataStore.length == 0){ return res.status(404).json({message: "no item is found"})}

        const itemIndex=  dataStore.findIndex(item =>{
            // return item.id == Number(id)
            return item.id == Number(id)
        })

        if(itemIndex === -1){ return res.status(404).json({message: "item not found"})}

        // const itemIndex = dataStore.indexOf(findItemById)

        const deleteItem = dataStore.splice(itemIndex, 1)[0]

        return res.status(200).json({message: "successfully deleted item", deleteItem })
        
    } catch (error) {


        return res.status(400).json({message: error.message})
        
    }
})



app.put("/update-item/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const {name, description} = req.body

        if(!id){return res.status(404).json({message: "Id missing"})}

        const itemIndex = dataStore.findIndex(item =>{return item.id == Number(id)})

        if(itemIndex  == -1){return res.status(404).json({message: "item not found"})}

        dataStore[itemIndex] = {"id": id, "name": name, "discription": description}

        return res.status(200).json({message: "Successfully updated an item",  updatedItem : dataStore[itemIndex] })

    } catch (error) {
        return res.status(400).json({message: error.message})
        
    }
})

