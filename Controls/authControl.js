const { response } = require( "express" );
const User = require( "../DataBase/models/userModel" );
const bcryptjs = require( "bcryptjs" );

//////<<<<<------------------------------------------------``

const Register = async ( request, response = response ) =>
{
    
    try 
    {
        const { email, password } = request.body;

    ////////////////////// VALIDACION EMAIL //////////////////////

        let user = await User.findOne( { email } );

        if( user )
        {
            return response.status( 400 ).json( { ok : false, msg : "Email already exists" } );  
        };

    ////////////////////////////////////////////////////////////////


    ////////////////////// ENCRIPTACION EMAIL //////////////////////

        user = new User( request.body );

        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync( password, salt );
    
    ////////////////////////////////////////////////////////////////


    ////////////////////// GUARDAR USUARIO - CONFIRMACION //////////////////////

        await user.save(); 

        response.status( 200 ).json( { ok : true, msg : "Registration completed", ...request.body } ); 

    ////////////////////////////////////////////////////////////////

    } 
    catch( error ) 
    {
        console.log( error );
        response.status( 500 ).json( { ok : false, msg : "Please contact the administrator" } );    
    };
    
};


const Login = async ( request, response = response ) =>
{
    
    try 
    {

        const { email, password } = request.body;

    ////////////////////// VALIDACION EMAIL //////////////////////

        let user = await User.findOne( { email } );

        if( !user )
        {
            response.status( 400 ).json( { ok : false, msg : "Access denied - wrong email or password" } );  
        };

    /////////////////////////////////////////////////////////////////



    ////////////////////// VALIDACION PASSWORD //////////////////////

        const validPassword = bcryptjs.compareSync( password, user.password );

        if( !validPassword )
        {
            return response.status( 400 ).json( { ok : false, msg : "Access denied - wrong email or password" } );
        };

    /////////////////////////////////////////////////////////////////


        response.status( 200 ).json( { ok : true, msg : "Access granted", userLogged : { uid : user.id, name : user.name, logged : true } } ); 

    } 
    catch( error ) 
    {
        console.log( error );
        response.status( 500 ).json( { ok : false, msg : "Please contact the administrator" } );    
    };

};

//////---------------------------------------------->>>>>

module.exports = { Login, Register };