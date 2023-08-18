module.exports = function makeGetAllUserAction({
    getAllUser,

}) {
    return async function getAllUserAction(req, res) {
        try {
            const result = await getAllUser();
            res.status(200).send(result);
        }
        catch (e) {
            console.log("error", e);
            res.status(400).send(`${e} user is not geted`);
        }

    }


}