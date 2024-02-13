const notesCtrl ={};

const Note = require('../models/Note')


//Listar nota
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find(); //me devuelve un arreglo de toda mi base de datos
    res.json(notes);
}

//crear una nota
notesCtrl.createNotes =  async(req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author

    });
     await newNote.save();
    res.json({ message: 'Notes saved'})
};

//buscar una nota
notesCtrl.getNote = async (req, res) => {
    const DatoNote= await Note.findById(req.params.id);
    res.json(DatoNote)
}

// actualizar nota
notesCtrl.updateNote = async (req, res) => {
    // const {title, content, author, date} = req.body;
    await Note.findOneAndUpdate({ _id:req.params.id } , req.body);
    res.json({message: 'Notes updated'})

}


//eliminar nota
notesCtrl.deleteNote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Notes deleted'})
}


//  res.json()


//  res.json()
//  res.json()
//  res.json()
module.exports = notesCtrl;