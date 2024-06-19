const mongoose = require('mongoose');


const Affan = new mongoose.Schema(
    {
        
        name:{
            type:String,
            required:true
        },

        rollno:{
            type:Number,
            required :true
        },

        Gender:{
            type:String,
            required:true
        }
        


    }
);


module.exports= mongoose.model('AffanModel',Affan)

