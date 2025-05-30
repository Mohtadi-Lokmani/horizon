const Continue = require('../model/ContinueModel');
const mongoose = require('mongoose');

// Get all Continues
const getContinues = async (req, res) => {
    try {
        const continues = await Continue.find({}).sort({ createdAt: -1 });
        res.status(200).json(continues);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single Continue
const getContinue = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Continue' });
    }
    const continu = await Continue.findById(id);
    if (!continu) {
        return res.status(404).json({ error: 'No such Continue' });
    }
    res.status(200).json(continu);
};

// Create a new Continue
const createContinue = async (req, res) => {
    const { name, image, formateur, empl } = req.body;
    try {
        const newContinue = await Continue.create({ name, image, formateur, empl });
        res.status(201).json(newContinue);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Update 
const updateContinue = async (req, res) => {
    try {
      const updatedContinue = await Continue.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedContinue) return res.status(404).json({ error: 'Formation not found' });
      res.status(200).json(updatedContinue);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  
    
    // supprimer formation
  
    const deleteContinue = async (req, res) => {
      try {
        const continu = await Continue.findByIdAndDelete(req.params.id);
        if (!continu) return res.status(404).json({ error: 'No such Diplome' });
        res.status(200).json({ message: 'Formation deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    };
    
    

module.exports = {
    getContinue,
    getContinues,
    createContinue,
    deleteContinue,
    updateContinue
};
