const { Schema, model } = require( "mongoose" );

//////<<<<<------------------------------------------------``

const categorySchema = Schema(

    {
        
        categoryTitle : { type : String, required : true, unique : true },

        color : { type : String, required : true },

        user : { type : Schema.Types.ObjectId, ref : "User", required : true }

    }

);

//////---------------------------------------------->>>>>

module.exports = model( "Category", categorySchema );