const { Router } = require( "express" );
const router = Router();
const { check } = require("express-validator");
const { registerCategory, getCategory, deleteCategory } = require("../Controls/categoryControl.js");
const { ValidatorMidd } = require("../Middleware/validadorDatos.js");

//////<<<<<------------------------------------------------``


router.post( 
    
    "/",
    [
        check( "categoryTitle","Title category is required").notEmpty(),
        check( "color", "Color category is required" ).notEmpty(),
        ValidatorMidd
    ],
    registerCategory
    
);

router.get( "/", [], getCategory );

router.delete( "/", [], deleteCategory );


//////---------------------------------------------->>>>>

module.exports = router;