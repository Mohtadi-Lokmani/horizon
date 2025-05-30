const express =require("express")
const router = express.Router()
const Equipe = require('../model/EquipeModel')

const {
    getEquipe,
    getEquipes,
    createEquipe,
    deleteEquipe,
    updateEquipe
}=require('../controllers/equipeController')


// get all equipes members
router.get("/",getEquipes)

//get a single member

router.get("/:id",getEquipe)


//post a new member
router.post("/",createEquipe)

//delete
router.delete("/:id",deleteEquipe)

//update
router.put("/:id",updateEquipe)

module.exports = router;