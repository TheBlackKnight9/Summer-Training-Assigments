import fs from 'node:fs'

fs.writeFile('notes.txt', 'This is a note.', (err) => {
  if (err) return console.log(err)
  console.log('notes.txt created.');
});

fs.readFile('notes.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err);
  console.log('File content:', data);
});

fs.appendFile('notes.txt', '\nThis note was updated.', (err) => {
  if (err) return console.log(err);
  console.log('Text appended to notes.txt');
});

