const express = require( "express" );
const { connectionDB } = require( "./DataBase/connectionDB" );
require( 'dotenv' ).config();
const cors = require( 'cors' );

//////<<<<<------------------------------------------------``

const serverApp = express();

serverApp.use( express.json() );

serverApp.use( cors() );

serverApp.listen( process.env.PORT, () => 
{ console.log( `Servidor corriendo en puerto ${ process.env.PORT }` ) } );

connectionDB();
console.log( process );
//------------------------------|| Rutas ||-------------------------------//

serverApp.use( express.static( "./public" ) );

serverApp.use( "/api/auth", require( "./Routes/authRoute" ) );

serverApp.use( "/api/post", require( "./Routes/postRoute" ) );

serverApp.use( "/api/category", require( "./Routes/categoryRoute" ) );

//------------------------------------------------------------------------// 