

module.exports = function makeUpdateUserPatch({
    updateUserDb,
    Joi,
    ValidationError
}) {
    return async function UpdateUserPatch({
        updateData, id
    }) {
        
        validateUpdateData(updateData);
        const update = makeUpdateQuery(updateData, id);
        console.log("updatequery",update.updateQuery);
        return await updateUserDb({ updateQuery: update.updateQuery, updateParams: update.updateParams });

    }

    function makeUpdateQuery(updateData, id) {
        let updateParams = [];
        let updateQuery = "";
        let paramsIndex = 2;
        Object.entries(updateData).forEach(([key, value], index) => {
            updateQuery += `${key} =?`;
            updateParams.push(value);
            paramsIndex++;
            if (index < Object.entries(updateData).length - 1) {
                updateQuery += ', ';
            }
        });
        updateQuery += ' WHERE id = ?';
        updateParams.push(id);
        return {
            updateQuery,
            updateParams
        }
    }

    function validateUpdateData(validateData) {

        console.log("validatedata", validateData);
        for (let key in validateData) {
            console.log("key", key)
            if (key == 'id')
                validateId({ id: validateData[key] });
            else if (key == 'name')
                validateName({ name: validateData[key] });
            else if (key == 'emailAddress')
                validateEmailAddress({ emailAddress: validateData[key] });
            else if (key == 'contactNo')
                validateContactno({ contactNo: validateData[key] });
            else if(key == 'userName')
            validateUserName({ userName: validateData[key] });
        }

    }

    function validateId({ id }) {
        console.log("id validateId", id)
        const schema = Joi.object({
            id: Joi.string().guid({ version: 'uuidv4' }).required(),
        });
        const { error } = schema.validate({ id });
        if (error) {
            console.log(error.details[0].message)
            throw new ValidationError(error.details[0].message);
        }
    }

   

    function validateEmailAddress({ emailAddress }) {
        const schema = Joi.object({
            emailAddress: Joi.string().email().required(),
        });
        const { error } = schema.validate({ emailAddress });
        if (error) {
            console.log(error.details[0].message)
            throw new ValidationError(error.details[0].message);
        }
    }

    function validateName({ name }) {
        console.log()
        const schema = Joi.object({
            name: Joi.string().required(),
        });
        const { error } = schema.validate({ name });
        if (error) {
            console.log(error.details[0].message)
            throw new ValidationError(error.details[0].message);
        }
    }

    function validateContactno({ contactNo }) {
        const schema = Joi.object({
            contactNo: Joi.number().integer().min(1000000000).max(9999999999).required(),
        });
        const { error } = schema.validate({ contactNo });
        if (error) {
            console.log(error.details[0].message)
            throw new ValidationError(error.details[0].message);
        }
    }

    function validateUserName({ userName }) {
        console.log()
        const schema = Joi.object({
            userName: Joi.string().required(),
        });
        const { error } = schema.validate({ userName });
        if (error) {
            console.log(error.details[0].message)
            throw new ValidationError(error.details[0].message);
        }
    }

}