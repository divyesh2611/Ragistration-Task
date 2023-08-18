module.exports = function makeGetAllUser({
    getAllUserDb,
}){
    return async function getAllUser(){
        
        return await getAllUserDb();;   
    }

}