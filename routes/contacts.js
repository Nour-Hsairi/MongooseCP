const express = require ("express");
const router = express.Router();
const Contact= require ("../models/Contact");
const controllers = require("../controllers/contact.controllers");
//test routing
router.get("/hello", (req,res) => {
    res.send("Hello routing");
});
//post contact


//@POST method
//desc post a contact 
//@path : http://localhost:7000/api/contact/
//Params Body
router.post("/",controllers.postContact);
//get all contacts
//get contact by id
//delete contact by id
// update contact by id


//@Method GET 
//@des GET all contacts
//@Path: http://localhost:7000/api/contact/
router.get("/",async(req,res)=>{
try {
    const result= await Contact.find()
    res.send({response:result, message:"Getting contacts successfully "}) 
} catch (error) {
  res.status(400).send({message:"can not get contacts"}); 
}
})


//@Method GET 
//@des GET one contact
//@Path: http://localhost:7000/api/contact/:id
//@Params id
router.get("/:id",async(req,res)=>{
    try {
        const result= await Contact.findOne({_id:req.params.id})
        res.send({response:result, message:"Getting contact successfully "}) 
    } catch (error) {
      res.status(400).send({message:"There is no contact with this id"}); 
    }
    })

//@Method DELETE
//@des delete one contact by id
//@Path: http://localhost:7000/api/contact/:id
//@Params id
router.delete("/:id",async(req,res)=>{
    try {
      const result = await Contact.deleteOne({_id:req.params.id});
      result.n
      ?res.send ({reponse:"user deleted"}) 
      :res.send("There is no user with this id")
    } catch (error) {
      res.send("Not deleted")  
    }
})
//@Method PUT
//@desc update one contact by id
//@Path: http://localhost:7000/api/contact/:id
//@Params id Body
router.put("/:id",async(req,res)=>{
try {
    const result = await Contact.updateOne (
        {_id:req.params.id},
        {$set:{...req.body}}
        );
        result.nModified
        ?res.send({message:"user updated"})
        :res.send({message:"Contact already updated"});
} catch (error) {
  res.status(400).send({message:"there is no user with this id"});  
}
})








 module.exports = router;

