const Diplome = require('../model/DiplomeModel')
const mongoose = require('mongoose')
//get all Diplome

const getDiplomes = async (req,res)=>{
    const diplomes = await Diplome.find({}).sort({createdAt: -1})
    res.status(200).json(diplomes)
}

//get a single Diplome form

const getDiplome = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such Diplome'})
    }
    const diplome = await Diplome.findById(id)
    if (!diplome){
        return res.status(404).json({error : 'No such Diplome'})
    }
    res.status(200).json(diplome)
}

//post new formation
const createDiplome = async(req,res)=>{
    const {name,image,desc} = req.body
    try{
       const diplome = await Diplome.create({name,image,desc})
        res.status(200).json(diplome)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Update 
const updateDiplome = async (req, res) => {
    try {
      const updatedDiplome = await Diplome.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedDiplome) return res.status(404).json({ error: 'Formation not found' });
      res.status(200).json(updatedDiplome);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  
    
    // supprimer formation
  
    const deleteDiplome = async (req, res) => {
      try {
        const diplome = await Diplome.findByIdAndDelete(req.params.id);
        if (!diplome) return res.status(404).json({ error: 'No such Diplome' });
        res.status(200).json({ message: 'Formation deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    };
    
    
    


module.exports = {
    getDiplome,
    getDiplomes,
    createDiplome,
    deleteDiplome,
    updateDiplome
}