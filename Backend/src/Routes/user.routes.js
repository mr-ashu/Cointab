const express = require("express");
const User = require("../Schema/user.schema")

const app = express.Router();
 

app.get("/", async (req, res) => {
    try {
        let u = await User.find()
        res.send(u)
    } catch (er) {
        res.status(404).send(er.message)
    }
}) 
 

app.post("/", async (req, res) => {
 
    try {
     
     let pdt=await User.create(
        { ...req.body}
     )
     res.send(pdt)
    
    } catch (e) {
       res.status(404).send(e.message)
    }
 })
 
 app.delete("/:id", async (req, res) => {
     let {id}=req.params;
     try {
         let u = await User.findByIdAndDelete({_id:id})
         res.send(u)
     } catch (e) {
         res.status(404).send(e.message)
     }
 });
  


module.exports = app;