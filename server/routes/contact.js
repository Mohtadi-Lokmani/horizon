const express =require("express")
const Contact = require('../model/ContactModel')
const router = express.Router()
const{
    getContact,
    getContacts,
    createContact,
    deleteContact
}=require("../controllers/contactController")


// get qll equipes members
router.get("/",getContacts)

//get a single member

router.get("/:id",getContact)

//post a new member
router.post("/",createContact)

//delete message
router.delete("/:id",deleteContact)

module.exports = router;