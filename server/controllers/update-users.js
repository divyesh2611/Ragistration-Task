module.exports = function makeUpdateUserAction({
    updateUserPatch,
  
}) {
    return async function updateUserAction(req, res) {
        try {
            const updateData = req.body;
            const id = +req.params.id;
                await updateUserPatch({ updateData, id });
                res.status(204).send('user id updated');
            
        }
        catch (e) {
            console.log("error", e);
            res.status(400).send(`${e} user is not updated`);
        }

    }

}