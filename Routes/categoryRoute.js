const { Router } = require( "express" );
const router = Router();
const { check } = require("express-validator");
const { registerCategory, getCategory } = require("../Controls/categoryControl.js");
const { ValidatorMidd } = require("../Middleware/validadorDatos.js");

//////<<<<<------------------------------------------------``


router.post( 
    
    "/",
    [
        check( "category","Category is required").notEmpty(),
        ValidatorMidd
    ],
    registerCategory
    
);


router.get( "/", [], getCategory );


//////---------------------------------------------->>>>>

module.exports = router;