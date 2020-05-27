const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

//GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try{
        const contacts = await Contact.find().sort({"name":1});    
            res.json(contacts);
    }   catch(err){
            res.json({message: err});
    }
});

//SUBMITS A CONTACT INFORMATION
router.post('/', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });
    try{
    const savedContact = await contact.save()
    res.redirect('/');
    }catch(err){
        res.json({message: err});
    }
});

//Delete Contact
router.delete('/:contactId', async (req, res) => {
    try{
        const removedContact = await Contact.remove({ _id: req.params.contactId });
        res.json(removedContact);
    }catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
