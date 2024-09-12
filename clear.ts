import fs from 'fs';
import path from 'path';

const directories = ['./compressed-files', './files'];

directories.forEach((dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(dir, file), (err) => {
        if (err) throw err;
      });
    }
  });
});
