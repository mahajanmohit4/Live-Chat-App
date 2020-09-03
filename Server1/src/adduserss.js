  
const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let confi = require("./confic");

let ADDCustomers2 = async (user) => {
    try {
        const connection = mysql.createConnection(confi.db_confi);

        await connection.connectAsync();

     
        let sql = "INSERT INTO registration (username,email,phone,password) VALUES(?,?,?,?)";
        let result = await connection.queryAsync(sql,[user.username ,user.email ,user.phone ,user.password]);
        console.log(result);

        console.log("connected .. ");

        await connection.endAsync();
        return result;
    } catch (err) {
        console.log("error chhee");
    }
}

module.exports = {ADDCustomers2};