const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let confi = require("./confic");




let ADDCustomers = async () => {
    try {
        const connection = mysql.createConnection(confi.db_confi);

        await connection.connectAsync();

        
        let sql = "INSERT INTO registration (username,email,phone,password) VALUES(?,?,?,?)";
        let result = await connection.queryAsync(sql,["Deepak","deepak@gmail.com","12341234", "deepak"]);
        console.log(result);


        await connection.endAsync();
        return result;
    } catch (err) {
        console.log("error chhee");
    }
}
let ADDCustomers1 = async (username , email, phone ,password) => {
    try {
        const connection = mysql.createConnection(confi.db_confi);

        await connection.connectAsync();

        // let sql = "INSERT INTO USER_INFO VALUES('NULL' , 'DEEPAK', 'MAHAJAN' , 'MUMBAI')";
        // let result = await connection.queryAsync(sql);
        let sql = "INSERT INTO registration (username,email,phone,password) VALUES(?,?,?,?)";
        let result = await connection.queryAsync(sql,[username ,email ,phone ,password]);
        console.log(result);


        await connection.endAsync();
        return result;
    } catch (err) {
        console.log("error chhee");
    }
}

let ADDCustomers2 = async (user) => {
    try {
        const connection = mysql.createConnection(confi.db_confi);

        await connection.connectAsync();

     
        let sql = "INSERT INTO registration (username,email,phone,password) VALUES(?,?,?,?)";
        let result = await connection.queryAsync(sql,[user.name1 ,user.email1 ,user.phone1 ,user.password1]);
        console.log(result);


        await connection.endAsync();
        return result;
    } catch (err) {
        console.log("error chhee");
    }
}

// module.exports = {ADDCustomers2};

// let input = { username : "Deepak" , email : "deepak2@gmail.com" , phone : "1234567890" , password : "deepakmahajan" }

// ADDCustomers1("Mohit" , "m@gmail.com" ,"12342134" ,"mohit");


// ADDCustomers();

// ADDCustomers2(input);


let authenticateUser = async (input) => {
    const connection = mysql.createConnection(confi.db_confi);
    await connection.connectAsync();
    console.log(input);
    let sql = "SELECT * FROM registration  WHERE EMAIL=? AND PASSWORD=?";
    const results = await connection.queryAsync(sql, [
      input.email,
      input.password,
    ]);
    console.log("connected with db..");
    console.log(results);
    await connection.endAsync();
  
    if (results.length === 0) {
      throw new Error("Invalid Credentials");
    }
  };
  

module.exports = {ADDCustomers2 , authenticateUser};
