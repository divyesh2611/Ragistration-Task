module.exports = function makeDeleteUser({
    deleteUserDb,
    Joi,
    ValidationError
}) {
    return async function deleteUser({
        id
    }) {
        console.log("id",id)
        validateInputDate({ id });

        const result = await deleteUserDb({ id })
        return result;
    }
    function validateInputDate({ id }) {
        const schema = Joi.object({
            id: Joi.number().required()
        });
        const { error } = schema.validate({ id });
        if (error) {
            console.log(error.details[0].message)
            throw new ValidationError(error.details[0].message);
        }
    }
}