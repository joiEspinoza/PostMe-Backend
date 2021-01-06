const { Router } = require( "express" );
const router = Router();
const { check } = require("express-validator");
const { ValidatorMidd } = require("../Middleware/validadorDatos.js");
const { registerPost, getPost, deletePost, updateLike, deletePosts } = require("../Controls/postControl.js");

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

router.delete( "/delposts", [], deletePosts );

router.delete( "/:id", [], deletePost );


//////---------------------------------------------->>>>>

module.exports = router;