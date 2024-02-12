const notesCtrl ={};

notesCtrl.getNotes =(req, res) => res.json({ message: []})
notesCtrl.createNotes = (req, res) => res.json({ message: 'Notes saved'})
notesCtrl.getNote = (req, res) => res.json({ title: 'Me encontraste'})
notesCtrl.updateNote =(req, res) => res.json({message: 'Notes updated'})
notesCtrl.deleteNote =(req, res) => res.json({message: 'Notes deleted'})

module.exports = notesCtrl;