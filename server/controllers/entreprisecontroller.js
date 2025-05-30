const Entreprise = require('../model/EntrePriseModel')
const mongoose = require('mongoose')


//get all EntrePrise

const getEntrePrises = async (req,res)=>{
    const entreprises = await Entreprise.find({}).sort({createdAt: -1})
    res.status(200).json(entreprises)
}

//get a single EntrePrise form

const getEntrePrise = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such EntrePrise'})
    }
    const entreprise = await Entreprise.findById(id)
    if (!entreprise){
        return res.status(404).json({error : 'No such EntrePrise'})
    }
    res.status(200).json(entreprise)
}

//post new formation
const createEntre = async(req,res)=>{
    const {name,image,desc} = req.body
    try{
       const entrePrise = await Entreprise.create({name,image,desc})
        res.status(200).json(entrePrise)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Update 
const updateEntre = async (req, res) => {
  try {
    const updatedEntreprise = await Entreprise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEntreprise) return res.status(404).json({ error: 'Formation not found' });
    res.status(200).json(updatedEntreprise);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


  
  // supprimer formation

  const deleteEntre = async (req, res) => {
    try {
      const entreprise = await Entreprise.findByIdAndDelete(req.params.id);
      if (!entreprise) return res.status(404).json({ error: 'No such EntrePrise' });
      res.status(200).json({ message: 'Formation deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  
  


module.exports = {
    getEntrePrise,
    getEntrePrises,
    createEntre,
    deleteEntre,
    updateEntre
    
}