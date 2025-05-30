const express =require("express")
const Entreprise = require('../model/EntrePriseModel')
const router = express.Router()
const{
    getEntrePrise,
    getEntrePrises  ,
    createEntre,
    deleteEntre,
    updateEntre
    
}=require("../controllers/entreprisecontroller")


// get qll equipes members
router.get("/",getEntrePrises)

//get a single member

router.get("/:id",getEntrePrise)
router.post("/",createEntre)
router.delete("/:id",deleteEntre)
router.put("/:id",updateEntre)

module.exports = router;