const { response } = require( "express" );
const Category = require( "../DataBase/models/categoryModel" );
const Post = require( "../DataBase/models/postModel" );

//////<<<<<------------------------------------------------``

const registerCategory = async ( request, response = response ) =>
{

    try 
    {

        const { categoryTitle } = request.body;
        
        let newCategory = await Category.findOne( { categoryTitle } );

        if( newCategory )
        {
            return response.status( 400 ).json( { ok : false, msg : "Category already exists" } );
        };

        newCategory = new Category( request.body );

        await newCategory.save(); 

        return response.status( 200 ).json( { ok : true, msg : "Register Category" } );

    } 
    catch( error ) 
    {
        console.log( error );
        response.status( 500 ).json( { ok : false, msg : "Please contact the administrator" } );    
    };

};


const getCategory = async ( request, response = response ) =>
{

    try 
    {

        const categories = await Category.find().populate( "user", ( "_id","name" ) );

        return response.status( 200 ).json( { ok : true, msg : "Get Categories", categories } ); 
        
    } 
    catch( error ) 
    {
        console.log( error );
        response.status( 500 ).json( { ok : false, msg : "Please contact the administrator" } );    
    };

};


const deleteCategory = async ( request, response = response ) =>
{
    
    try 
    {
        const { categoryId } = request.body;

        const result = await Category.findByIdAndDelete( categoryId );
      
        if( !result )
        {
            return response.status( 400 ).json( { ok : false, msg : "Post dont found" } );
        };

        return response.status( 200 ).json( { ok : true, msg : "Delete Category", categoryId } );

    }
    catch( error ) 
    {
        console.log( error );
        response.status( 500 ).json( { ok : false, msg : "Please contact the administrator" } );    
    };
};

//////---------------------------------------------->>>>>

module.exports = { registerCategory, getCategory, deleteCategory };