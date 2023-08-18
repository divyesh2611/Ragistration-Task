const useCase = require('../use-cases');
const multer = require('multer');

const makeCreateUserAction = require('./create-users');
const createUserAction = makeCreateUserAction({
    createUser: useCase.createUser,
})
const makeUpdateUserAction = require('./update-users');
const updateUserAction = makeUpdateUserAction({
    updateUserPatch: useCase.UpdateUserPatch,
})
const makeDeleteUserAction = require('./delete-users');
const deleteUserAction = makeDeleteUserAction({
    deleteUser: useCase.deleteUser,
})

const makeGetAllUserAction = require('./get-all-users');
const getAllUserAction = makeGetAllUserAction({
    getAllUser: useCase.getAllUser,
})




module.exports = Object.freeze({
    getAllUserAction,
    createUserAction,
    updateUserAction,
    deleteUserAction,
})