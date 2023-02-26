const express = require("express");
const User = require("../Schema/user.schema")

const { default: axios } = require("axios");
const app = express.Router();
 

app.get("/", async (req, res) => {
    let user = await User.find({});
    if (user.length > 0) {
        res.send("User already fetch");
        
    }
    else {
 
        var Data;
        await axios.get("https://randomuser.me/api/?results=100")
            .then((res) => {
                Data = res.data.results;
            })
            .catch((err) => {
                console.log("error in fetching the data");
            })
        await User.insertMany(Data)

        res.send(`${Data.length} - users successfully added in database`);
    }
}) 

app.get("/users", async (req, res) => {
    const {page,limit,gender } = req.query;
 
    const users = gender ? await User.find({ gender: gender }).skip((page - 1) * limit).limit(limit) : await User.find({}).skip((page - 1) * limit).limit(limit)
 
    res.send(users);
})

app.delete("/", async (req, res) => {
    await User.deleteMany({});
    res.send(" All Users Deleted Successfully from database");
})
 
 
  


module.exports = app;