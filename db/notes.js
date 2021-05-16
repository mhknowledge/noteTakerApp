const util = require('util');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Notes {
    read(){
        return readFile('db/db.json', 'utf8');
    }
    write(newNotes){
        return writeFile('db/db.json', JSON.stringify(newNotes));
    }
    getNotes(){
        return this.read().then(notes =>{
            let notesArray
            try {
                notesArray = [].concat(JSON.parse(notes))
            } catch (error) {
                notesArray = []
            }
        return notesArray
        })
    }
    addNote(note){
        //concat
        let title = note.title
        let text = note.text
        const newNote = {title, text, id:uuidv4()}
        return this.getNotes().then(notes => {
            let noteArray = notes
            noteArray.push(newNote)
            this.write(noteArray)
        })
    }
    
}
module.exports=new Notes()