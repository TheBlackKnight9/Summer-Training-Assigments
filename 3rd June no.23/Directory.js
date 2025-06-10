import fs from 'node:fs'
fs.mkdir('logs', { recursive: true }, (err) => {
  if (err) return console.log(err);

  fs.writeFile('logs/log1.txt', 'Log created', (err) => {
    if (err) return console.log(err);
    console.log(' log1.txt created in logs/');
  });
});

fs.readdir('./logs', (err, files) => {
  if (err) return console.log(err);
  console.log('Files in logs folder:');
  files.forEach(file => console.log( file));
});


