const { Schema, model } = require( "mongoose" );

//////<<<<<------------------------------------------------``

const userSchema = Schema(

    {
        name : { type : String, required : true },

        email : { type : String, required : true, unique : true },
        
        password : { type : String, required : true },

        postsLiked : { type : Array, require : true }

    }

);

//////---------------------------------------------->>>>>

module.exports = model( "User", userSchema );