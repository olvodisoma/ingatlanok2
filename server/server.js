import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import {configDb} from './configDb.js'

const db=mysql.createConnection(configDb);
const app=express();

app.use(express.json())
app.use(cors())

//1.az ingatlanokat megjelenítő API - get kérés

app.get('/',(request,response)=>{
    db.query('SELECT realestates.id,categories.name,imageUrl,createAt FROM realestates,categories WHERE categories.id=realestates.categoryId;',(error,results)=>{
        if(error){
            console.log("Hiba",error)
        }
        else{
            console.log(response.send(results))
        }
    })
})


//2.a kiválasztott ingatlan eladójának adatait megjelenítő API - get kérés

app.get(`/:id`,(request,response)=>{
    const {id} = request.params
    db.query('SELECT sellers.name,phone,imageUrl,area,rooms FROM sellers,realestates WHERE sellers.id=realestates.sellerId AND realestates.id=?',(id),(error,results)=>{
        if(error){
            console.log('Hiba',error)
        }
        else{
            response.send(results)
        }
    })
})

app.listen(5000,() => console.log('server listening on port 5000...'))