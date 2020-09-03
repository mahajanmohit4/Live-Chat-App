const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express(); //creating instance of the object
const cors = require("cors");
app.use(cors());
const adduser = require("./adduser");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
app.use(express.json())
app.get("/", async (req, res) => {


    const json = { id: 1, name: "mohit mahajan" };
    res.json(json);
});

app.get("/adduser", async (req, res) => {

    try {
       const user = req.query;
        
        await adduser.ADDCustomers2(user);
      
        const json = { massage: "sucess" };
        res.json(json);

    } catch (err) {
        const json = { massage: "fail" };
        res.json(json);
    }

});

app.post("/adduser", async (req, res) => {

    try {
        console.log(req.body)
        const user = req.body;
        const add = adduser.ADDCustomers2(user);
        console.log(add);
        const json = { massage: "sucess" };
        res.json(json);

    } catch (err) {
        const json = { massage: "fail" };
        res.json(json);
    }

});



app.listen(3030);