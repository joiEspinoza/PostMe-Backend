const { response } = require( "express" );
const Post = require( "../DataBase/models/postModel" );


//////<<<<<------------------------------------------------``

const registerPost = async ( request, response = response ) =>
{

    try 
    {
        
        post = new Post( request.body );

        await post.save(); 

        return response.status( 200 ).json( { ok : true, msg : "Register Post ok", post } );  

    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : "Please contact the administrator" } );
    };

};


const getPost = async ( request, response = response ) =>
{

    try 
    {
        const posts = await Post.find().populate( "user", ( "_id","name" ) );

        return response.status( 200 ).json( { ok : true, msg : "getPost", posts } );
    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : "Please contact the administrator" } );
    };

};


const updateLike = async ( request, response = response ) =>
{

    try 
    {
        const newLikePost = request.body.likePost;

        const id = request.body._id;

        await Post.findByIdAndUpdate( id, { likePost : newLikePost }, { new : true } );

        return response.status( 200 ).json( { ok : true, msg : "Update Like" } );
    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : "Please contact the administrator" } );
    };
    
};


const deletePost = async ( request, response = response  ) =>
{
    try 
    {

        const postId = request.params.id;

        const post = await Post.findByIdAndDelete( postId );

        if( !post )
        {
            return response.status( 400 ).json( { ok : false, msg : "Post dont exist" } );
        };

        return response.status( 200 ).json( { ok : true, msg : "Post removed successfully" } );

    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : "Please contact the administrator" } );  
    };
};


//////---------------------------------------------->>>>>

module.exports = { registerPost, getPost, updateLike, deletePost };