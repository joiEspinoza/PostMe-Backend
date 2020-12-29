const { response } = require( "express" );
const Category = require( "../DataBase/models/categoryModel" );

//////<<<<<------------------------------------------------``

const registerCategory = async ( request, response = response ) =>
{

    try 
    {
        const { category } = request.body;
        
        let newCategory = await Category.findOne( { category } );

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

//////---------------------------------------------->>>>>

module.exports = { registerCategory, getCategory };