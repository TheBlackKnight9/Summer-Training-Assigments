import fs from 'node:fs'
const source = './source';
const backup = './backup';

fs.mkdir(backup, { recursive: true }, (err) => {
  if (err) return console.log(err);

  fs.readdir(source, (err, files) => {
    if (err) return console.log(err);

    files.forEach(file => {
      if (file.endsWith('.txt')) {
        fs.copyFile(path.join(source, file), path.join(backup, file), (err) => {
          if (err) return console.log(err);
          console.log(` Copied: ${file}`);
        });
      }
    });
  });
});
