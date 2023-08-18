module.exports = function makeDeleteUserAction({
    deleteUser,
}){
    return async function deleteUserAction(req,res){
        try{
            const id = req.params.id;
            const result = await deleteUser({id});
            res.status(200).send("user is deleted");
        }
        catch(e){
            console.log("error");
            res.send(`${e} user is not deleted`);
        }

    }

   
}