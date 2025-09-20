const express = require('express');
const router = express.Router();
var fetchUser = require('../middleware/fetchUser');
const Note = require('../models/Note');
const { body, validationResult, check } = require('express-validator');


// ROUTE 1 get alll the notes GEt "/api/auth/fetchallnotes". No login required

router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {


        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
});


// ROUTE 2 add anew  notes using post "/api/auth/addnote".login required

router.post('/addnote', fetchUser, [
    body('title', 'Enter a title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {


        const { title, description, tag } = req.body;
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
});

// ROUTE 3 update an exixting notes using put "/api/auth/updatenote". login required
router.put('/updatenote/:id', fetchUser, [
   
], async (req, res) => {
 const { title, description, tag } = req.body;
//  create a newNote object
const newNote = {};
if(title){newNote.title = title};
if(description){newNote.description = description};
if(tag){newNote.tag = tag};
try {
    


// finr the note to be updated and update it 
let note = await Note.findById(req.params.id);
if(!note){return res.status(404).send("Not found")}

if(note.user.toString() !==req.user.id){
    return res.status(401).send("Not Allowed");
}
note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
res.json({note});

} catch (error) {
     console.error(error.message);
        res.status(500).send("Some error occurred");
}
})

// ROUTE 4 delete an existing note using DELETE "/api/notes/deletenote/:id". login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
  try {
    // find the note to be deleted
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).send("Not found");

    // allow deletion only if user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    // delete the note
    await Note.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Note has been deleted", note: note });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});


module.exports = router;