const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
let confi = require("./confic");

let readAllCustomers = async () => {
    const connection = mysql.createConnection(confi.db_confi);
    await connection.connectAsync();

    
    let sql = "SELECT * FROM registration ";
    let result = await connection.queryAsync(sql );
    console.log(result);


    await connection.endAsync();
    return result;

}


let readAllCustomers1 = async (ID , USERNAME) => {
    const connection = mysql.createConnection(confi.db_confi);
    await connection.connectAsync();

    
    let sql = "SELECT * FROM registration WHERE ID = ? AND USERNAME = ?";
    let result = await connection.queryAsync(sql , [ID , USERNAME]);
    console.log(result);


    await connection.endAsync();
    return result;

}

let readAllCustomers2 = async (user) => {
    const connection = mysql.createConnection(confi.db_confi);
    await connection.connectAsync();

    
    let sql = "SELECT * FROM registration WHERE ID = ? AND USERNAME = ?";
    let result = await connection.queryAsync(sql , [user.id , user.username]);
    console.log(result);


    await connection.endAsync();
    return result;

}
module.exports = {readAllCustomers};
// readAllCustomers1(1, "Mohit");
// let input = {id : 1 , username : "mohit"}
// readAllCustomers2(input);
// readAllCustomers();
