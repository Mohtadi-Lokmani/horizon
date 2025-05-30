const express =require("express")
const Diplome = require('../model/ContactModel')
const router = express.Router()
const{
    getDiplome,
    getDiplomes,
    createDiplome,
    updateDiplome,
    deleteDiplome
}=require("../controllers/diplomeController")


// get qll equipes members
router.get("/",getDiplomes)

//get a single member

router.get("/:id",getDiplome)

router.post("/",createDiplome)
router.delete("/:id",deleteDiplome)
router.put("/:id",updateDiplome)
module.exports = router;