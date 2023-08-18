const dbMethods = require('../data-access');
const Joi = require('joi');


const exceptions = require('../exceptions');


const makeCreateUser = require('./create-user');
const createUser = makeCreateUser({
    createUserDb: dbMethods.userDbMethods.createUsers,
    Joi,
    ValidationError: exceptions.ValidationError
})
const makeUpdateUserPatch = require('./update-user');
const UpdateUserPatch = makeUpdateUserPatch({
    updateUserDb: dbMethods.userDbMethods.updateUsers,
    Joi,
    ValidationError: exceptions.ValidationError
})
const makeDeleteUser = require('./delete-user');
const deleteUser = makeDeleteUser({
    deleteUserDb: dbMethods.userDbMethods.deleteUsers,
    Joi,
    ValidationError: exceptions.ValidationError
})

const makeGetAllUser = require('./get-all-user');
const getAllUser = makeGetAllUser({
    getAllUserDb: dbMethods.userDbMethods.getAllUsers,
})

module.exports = Object.freeze({
    createUser,
    deleteUser,
    UpdateUserPatch,
    getAllUser,
})
