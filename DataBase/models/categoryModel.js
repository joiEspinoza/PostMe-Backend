const { Schema, model } = require( "mongoose" );

//////<<<<<------------------------------------------------``

const categorySchema = Schema(

    {
        
        category : { type : String, required : true, unique : true },

        user : { type : Schema.Types.ObjectId, ref : "User", required : true }

    }

);

//////---------------------------------------------->>>>>

module.exports = model( "Category", categorySchema );