const Equipe = require('../model/EquipeModel')
const mongoose = require('mongoose')
//get all equipes

const getEquipes = async (req,res)=>{
    const equipes = await Equipe.find({}).sort({createdAt: -1})
    res.status(200).json(equipes)
}

//get a single equipe member

const getEquipe = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such member'})
    }
    const equipe = await Equipe.findById(id)
    if (!equipe){
        return res.status(404).json({error : 'No such Memebr'})
    }
    res.status(200).json(equipe)
}

//post
const createEquipe = async(req,res)=>{
    const {name,image,desc} = req.body
    try{
       const equipe = await Equipe.create({name,image,desc})
        res.status(200).json(equipe)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Update 
const updateEquipe = async (req, res) => {
    try {
      const updatedEquipe = await Equipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedEquipe) return res.status(404).json({ error: 'Formation not found' });
      res.status(200).json(updatedEquipe);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  
    
    // supprimer formation
  
    const deleteEquipe = async (req, res) => {
      try {
        const equipe = await Equipe.findByIdAndDelete(req.params.id);
        if (!equipe) return res.status(404).json({ error: 'No such Equipe' });
        res.status(200).json({ message: 'Formation deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    };
    
    




module.exports = {
    getEquipe,
    getEquipes,
    createEquipe,
    deleteEquipe,
    updateEquipe
}