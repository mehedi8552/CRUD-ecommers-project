const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController')
const ProductController = require('../controller/ProductController')
const AuthVerification = require('../Middleware/AuthVerification')



//user rowter
router.post('/UserOTP',UserController.UserOTP);
router.post('/Login/:email',UserController.Login);
router.get('/VarifyOTP/:email/:otp',UserController.VarifyOTP);
router.get('/UserLogOut',AuthVerification,UserController.UserLogOut);


//Product rowter
router.get('/ReadProduct',ProductController.ReadProduct);
router.post('/UpdateProduct',ProductController.UpdateProduct);
router.post('/DeleteProduct/:productId',ProductController.DeleteProduct);
router.post('/CreateProduct',ProductController.CreateProduct);

//Product Details
router.get('/ReadbyProduct/:productId',ProductController.ReadProductById);
router.get('/Readbyremark/:name',ProductController.Readbyremark);




module.exports = router;