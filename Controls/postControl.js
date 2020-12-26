const { response } = require( "express" );
const Post = require( "../DataBase/models/postModel" );


//////<<<<<------------------------------------------------``

const registerPost = async ( request, response = response ) =>
{

    try 
    {
        
        post = new Post( request.body );

        await post.save(); 

        return response.status( 200 ).json( { ok : true, msg : "Register Post ok" } );  

    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : "Please contact the administrator" } );
    };

};

//////---------------------------------------------->>>>>

module.exports = { registerPost };