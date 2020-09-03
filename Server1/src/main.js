const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express(); 
const cors = require("cors");
app.use(cors());
const adduser = require("./adduser");
const adduserss = require("./adduserss");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
app.use(express.json());

const readdb = require("./readuser");

const multer = require("multer");
app.use(express.urlencoded({ extended: true })); // BODY :: URL ENCODED
const upload = multer(); // BODY :: FORM DATA

app.get("/", async (req, res) => {


    const json = { id: 1, name: "mohit mahajan" };
    res.json(json);
});

// app.get("/adduser", async (req, res) => {

//     try {
//         // http://localhost:3030/adduser?username=Mohit&email=mohit1@gmail.com&phone=1234134&password=mohitmahajan
//         // http://localhost:3030/adduser?username=mauli
//         const username1 = req.query.username;
//         const email1 = req.query.email;
//         const phone1 = req.query.phone;
//         const password1 = req.query.password;
//         // const username = req.query.username;
//         const user = { username : username1 , email : email1 , phone : phone1 , password : password1 };
//         // const user = { username : "Mohit" , email : "mohit1@gmail.com" , phone : "1234234" , password : "asdfasdf" };
//         // const user = {id : "null" , fname : "Mohit" , lname : "Mahajan" , city : "Burhanpur"};
//         console.log(user);
        
//         const add = adduser.ADDCustomers2(user);
//         console.log(add);
//         const json = { massage: "sucess" };
//         res.json(json);

//     } catch (err) {
//         const json = { massage: "fail" };
//         res.json(json);
//     }

// });


app.post("/adduser", async (req, res) => {

    try {
        console.log(req.body)
        const user = req.body;
        const add = await adduserss.ADDCustomers2(user);
        console.log(add);
        const json = { massage: "sucess" };
        res.json(json);

    } catch (err) {
        const json = { massage: "fail" };
        res.json(json);
    }

});

app.post("/auth-user", async (req, res) => {
    try {
      const input = req.body;
      console.log(input);
      await adduser.authenticateUser(input);
      res.json({ opr: true });
    } catch (err) {
      res.json({ opr: false });
    }
  });
  
  app.post("/sample", upload.none(), async (req, res) => {
    res.json(req.body);
  });


app.get("/readalluser", async (req, res) => {  

    const result = await readdb.readAllCustomers();
    // res.json(result);
    res.send(result);
});



app.listen(3030);