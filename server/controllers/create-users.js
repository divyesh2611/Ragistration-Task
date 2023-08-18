module.exports = function makeCreateUserAction({
    createUser,
}) {
    return async function createUserAction(req, res) {
        try {
            console.log("req", req.body)
            const file = req.file;
            console.log("file",file);
            const name = req.body.name;
            const contactNo = req.body.contactno;
            const userName = req.body.username;
            const emailAddress = req.body.emailaddress;
           

           
            

            const id = await createUser({ name, contactNo,emailAddress, userName,ProfilePicture:file.originalname })
            res.status(200).json({
                message: "user is created successfully !!",
                userid: id,
            });
            res.end();
        }
        catch (e) {
            console.log("error", e);
            res.send(`${e} user is not created`);
        }

    }

}