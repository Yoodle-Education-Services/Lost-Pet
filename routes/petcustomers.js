const express = require('express')
const router = express.Router()
const Petcustomer = require('../models/petcustomers');


//get all
router.get("/", async (req, res) => {
    try {
        var result = await Petcustomer.find().exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

//get one

router.get("/:id", getPetcustomer, (req, res) => {
    res.json(res.petcustomer)
    
});

//

router.post('/add',  async(req, res) => {

const petcustomer = new Petcustomer({

firstName: req.body.firstName,
lastName: req.body.lastName, 
email: req.body.email,
phone: req.body.phone, 
petName:req.body.petName,
breed: req.body.breed,
description:req.body.description,
// moreInfo: req.body.moreInfo, 
location: req.body.location,

})
try {
const newPetcustomer = await petcustomer.save()
res.status(201).json(newPetcustomer)

} catch(err) {
res.status(400).json( { message: err.message})
   }
})


//update
router.patch("/petcustomer/:id",  getPetcustomer, async (req, res) => {
    if (req.body.firstname != null) {
        res.petcustomer.firstName = req.body.name
    }
    try {
        const updatedPetcustomer = await res.petcustomer.save()
        res.json(updatedPetcustomer)
    } catch (err) {
        res.status(400).json({ message: err.message})
        
    }

});


//delete
router.delete("/:id", getPetcustomer, async (req, res) => {
    try {
        await res.petcustomer.remove()
        res.json({ message: 'Deleted petcustomer'})
    } catch (error) {
        res.status(500).json({message: err.message})
        
    }

});


///a general funcion

 async function getPetcustomer(req, res, next) {
     let petcustomer
  try {
    petcustomer = await Petcustomer.findById(req.params.id)
    if (petcustomer == null) {
      return res.status(404).json({ message: 'Cant find petcustomer'})
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }

  res.petcustomer = petcustomer
  next()
 }



module.exports = router
