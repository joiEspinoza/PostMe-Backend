const { Router } = require( "express" );
const router = Router();
const { check } = require("express-validator");
const { registerPost, getPost, deletePost, updateLike } = require("../Controls/postControl.js");
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

router.get( "/", [], getPost );

router.put( "/",[], updateLike );

router.delete( "/:id", [], deletePost );


//////---------------------------------------------->>>>>

module.exports = router;