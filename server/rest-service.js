const express = require('express');
const controllers = require('./controllers');
const router = express.Router();
const multer = require('multer');
const path = require('path')


const storage = multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,'uploads/');
    },
    filename:(req,file,cd)=>{
        const uniqueSuffix = Date.now()+'-'+Math.round(Math.random()*1E9);
        const extname = path.extname(file.originalname);
        cd(null,file.fieldname+'-'+uniqueSuffix+extname);
    }
})
const upload = multer({storage})

function init(){
    initUsersRoutes();
}
function initUsersRoutes(){
    router.post('/users',upload.single('profile'),(req,res)=>{
        controllers.createUserAction(req,res);
    })
    router.get('/users',(req,res)=>{
        controllers.getAllUserAction(req,res);
    })
    router.delete('/users/:id',(req,res)=>{
        controllers.deleteUserAction(req,res);
    })
    router.patch('/users/:id',(req,res)=>{
        controllers.updateUserAction(req,res);
    })
}
init();
module.exports = router;