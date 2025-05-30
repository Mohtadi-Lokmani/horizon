const Contact = require('../model/ContactModel')
const mongoose = require('mongoose')
//get all contacts
const getContacts = async (req,res)=>{
    const Contacts = await Contact.find({}).sort({createdAt: -1})
    res.status(200).json(Contacts)
}



//get a single equipe member

const getContact = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such contact'})
    }
    const contact = await Contact.findById(id)
    if (!contact){
        return res.status(404).json({error : 'No such contact'})
    }
    res.status(200).json(contact)
}


//create a contact form

const createContact = async (req, res) => {
    const { nom, prenom, email, telephone, message } = req.body;

    try {
        const contact = await Contact.create({ nom, prenom, email, telephone, message });
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

 // supprimer Message
  
 const deleteContact = async (req, res) => {
    try {
      const contact = await Contact.findByIdAndDelete(req.params.id);
      if (!contact) return res.status(404).json({ error: 'No such Diplome' });
      res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

module.exports = {
    getContact,
    getContacts,
    createContact,
    deleteContact
}


