const { Router } = require( "express" );
const router = Router();
const { check } = require("express-validator");
const { ValidatorMidd } = require("../Middleware/validadorDatos.js");
const { Login, Register, updateLiked } = require("../Controls/authControl.js");

//////<<<<<------------------------------------------------``

router.post( 
    
    "/", 
    [
        check( "email","Email is required" ).isEmail(),
        check( "password","Password is required - Must have at least 5 characters" ).isLength( { min : 5 } ),
        ValidatorMidd
    ], 
    Login

);


router.post( 
    
    "/register", 
    [
        check( "name","Name is required - Must have at least 3 characters" ).isLength( { min : 3 } ),
        check( "email", "Email is required" ).isEmail(),
        check( "password","Password is required - Must have at least 5 characters" ).isLength( { min : 5 } ),
        ValidatorMidd
    ] 
    , Register 
);


router.put( "/", [], updateLiked );


//////---------------------------------------------->>>>>

module.exports = router;