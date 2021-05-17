const fs = require('fs');
const chalk = require('chalk');



const addNotes = (title, body) => {
  let notes = loadNotes();

  let duplicates = notes.find((note) => note.title === title)

  if (duplicates === undefined) {
    notes.push({
      title: title,
      body: body
    })
  } else {
    console.log('Title taken')
  }
  saveNotes(notes)
}



const removeNote = (title) => {
  let notes = loadNotes();

  let trueNote = notes.filter((note) => note.title !== title)

  if (trueNote.length === notes.length) {
    console.log(chalk.inverse.red('Note not found'))
  } else {
    saveNotes(trueNote)
    console.log(chalk.inverse.green('Note removed'))
  }
}



const listNotes = () => {
  let notes = loadNotes();
  console.log(chalk.inverse.bold.yellow('Listed Notes....'))

  notes.forEach( (note) => console.log(chalk.blue(note.title)))
}



const readNote = (title) => {
  let notes = loadNotes()
  let targetNote = notes.find( (note) => note.title === title)

  if(targetNote === undefined) {
    console.log(chalk.inverse.red('Note not found'))
  } else {
    console.log(chalk.inverse(targetNote.body))
  }
}



const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))



const loadNotes = () => {
  try {
    let data = fs.readFileSync('notes.json')
    let parsedData = JSON.parse(data.toString())
    return parsedData;
  } catch (e) {
    return [];
  }
}


module.exports = {
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
