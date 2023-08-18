module.exports = function makeCreateUser({
    createUserDb,
    Joi,
    ValidationError,
}) {
    return async function createUser({
        name, contactNo,emailAddress, userName,ProfilePicture
    }) {
        console.log("creteUserUsecase",name, contactNo,emailAddress, userName,ProfilePicture );
        validateInputData({ name, contactNo,emailAddress, userName });

        //api call to get company id from companyname 

       

        const id = await createUserDb({ name, contactNo,emailAddress, userName,ProfilePicture})
        console.log("id", id);

        return id;
    }
    function validateInputData({ name, contactNo,emailAddress, userName }) {
        const schema = Joi.object({
            name: Joi.string().min(5).required(),
            contactNo: Joi.number().integer().min(1000000000).max(9999999999).required(),
            userName:Joi.string().min(5).required(),
            emailAddress: Joi.string().email().required(),
        });
        const { error } = schema.validate({  name, contactNo,emailAddress, userName });
        if (error) {
            console.log("error", error.details[0].message)
            throw new ValidationError(error.details[0].message);
        }
    }
}