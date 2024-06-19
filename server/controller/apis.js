const express = require('express');

const AffanModel=require('../Model/Affandata')


const router = express.Router()

router.post('/postdata',async(req,res)=>{
          
   try{
       const Affandetails = new AffanModel(req.body);
       //  const  Affandetails= await new AffanModel({name : , age : , gender : });

       await Affandetails.save();
       res.status(200).json("Data inserted succesfully");
   }
   catch(err){

    console.log(err);
    res.status(500).json("Some error");

   }
    

})



router.get('/data',async(req,res)=>{
          
    try{
         const Affandetails = await AffanModel.find() 
         res.status(200).json(Affandetails)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})


router.get('/data/:roll',async(req,res)=>{
          
    try{
         const rollnum = req.params.roll;
         const Affandetails = await AffanModel.find({rollno:rollnum})  //{rollno:171}
         res.status(200).json(Affandetails)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})



router.put('/updatedata/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const data = req.body;

        // Use findOneAndUpdate to update the document by name
        const updatedAffan = await AffanModel.findOneAndUpdate({ name: name }, data, { new: true });

        if (updatedAffan) {
            res.status(200).json(updatedAffan);
        } else {
            res.status(404).json({ message: 'No data found for this name' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.patch('/updatedata/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const data = req.body;

        // Use findOneAndUpdate to update the document by name
        const updatedAffan = await AffanModel.findOneAndUpdate({ name: name }, { $set: data }, { new: true });

        if (updatedAffan) {
            res.status(200).json(updatedAffan);
        } else {
            res.status(404).json({ message: 'No data found for this name' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.delete('/deletedata/:name',async(req,res)=>{
    try{
        
        const name= req.params.name;

        const deletedaffan = await AffanModel.findOneAndDelete({name:name});
        res.status(200).json("data deleted succesfully")

    }
    catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})
module.exports= router





//GIT 

// git init 
// git add .
// git commit