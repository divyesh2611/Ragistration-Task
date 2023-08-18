const Table_Name = 'users'
module.exports = function makeUsersDbMethods({
    connection,
    database,
}) {
    return Object.freeze({
        createUsers,
        updateUsers,
        deleteUsers,
        getAllUsers,
    })
    async function createUsers({
        name, contactNo, emailAddress, userName, ProfilePicture
    }) {
        try {
            console.log("data-aceess",name, contactNo, emailAddress, userName, ProfilePicture)
            const result = await connection.execute(`insert into ${database}.${Table_Name} (name,contactno,email,username,profilepic) values (?,?,?,?,?)`, [name, contactNo, emailAddress, userName, ProfilePicture])
            console.log("result",result);
            return ;
        }
        catch (err) {
            console.log(`error:${err}`);
            
        }
    }
    async function updateUsers({
        updateQuery, updateParams
    }) {
        try {
            console.log("dataacees",updateQuery, updateParams)
            await connection.execute(`update ${database}.${Table_Name} set ${updateQuery}`, updateParams);
            return;
        }
        catch (err) {
            console.log(`error:${err}`);
            
        }
    }
    async function deleteUsers({
        id
    }) {
        try {
            const result = await connection.execute(`delete from ${database}.${Table_Name} where id = ? `, [id]);
            console.log("result",result)
            return ;
        }
        catch (err) {
            console.log(`error:${err}`);
            
        }
    }
   
    async function getAllUsers() {
        try {
            const result = await connection.execute(`select * from ${database}.${Table_Name}  `);
            return result[0];
        }
        catch (err) {
            console.log(`error:${err}`);
            
        }
    }
  
   

}