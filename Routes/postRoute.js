const { Router } = require( "express" );
const router = Router();
const { check } = require("express-validator");
const { registerPost } = require("../Controls/postControl.js");
const { ValidatorMidd } = require("../Middleware/validadorDatos.js");

//////<<<<<------------------------------------------------``


router.post( 
    
    "/",
    [
        check( "titlePost", "Title is require" ).notEmpty(),
        check( "bodyPost", "Post is required" ).notEmpty(),
        ValidatorMidd
    ],
    registerPost

);










//////---------------------------------------------->>>>>

module.exports = router;