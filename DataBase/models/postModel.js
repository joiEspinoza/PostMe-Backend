const { Schema, model } = require( "mongoose" );

//////<<<<<------------------------------------------------``

const postSchema = Schema(

    {
        titlePost : { type : String, required : true },

        bodyPost : { type : String, required : true },
        
        likePost : { type : Number, required : true },

        datePost : { type : String, required : true },

        user : { type : Schema.Types.ObjectId, ref : "User", required : true }

    }

);

//////---------------------------------------------->>>>>

module.exports = model( "Post", postSchema );