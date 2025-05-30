const express =require("express")
const Continue = require('../model/ContinueModel')
const router = express.Router()
const{
    getContinue,
    getContinues,
    createContinue,
    deleteContinue,
    updateContinue
}=require("../controllers/continueControllers")


// get all equipes members
router.get("/",getContinues)

//get a single member

router.get("/:id",getContinue)

router.post("/",createContinue)


router.delete("/:id",deleteContinue)
router.put("/:id",updateContinue)


module.exports = router;