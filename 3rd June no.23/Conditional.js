import fs from 'node:fs'
const time = new Date().toLocaleString();

fs.access('notes.txt', (err) => {
  if (err) {
    
    fs.writeFile('notes.txt', 'This is a note.', (err) => {
      if (err) return console.log(err);
      console.log(' Created notes.txt with default content');
    });
  } else {
    fs.appendFile('notes.txt', `\nChecked at ${time}`, (err) => {
      if (err) return console.log(err);
      console.log('Appended check time');
    });
  }
});

fs.rename('notes.txt', 'updatedNotes.txt', (err) => {
  if (err) return console.log(err);
  console.log('File renamed to updatedNotes.txt');
});


fs.access('updatedNotes.txt',  (err) => {
  if (err) {
    return console.log('updatedNotes.txt does not exist');
  }
  fs.unlink('updatedNotes.txt', (err) => {
    if (err) return console.log(err);
    console.log(' deleted updatedNotes.txt');
  });
});
