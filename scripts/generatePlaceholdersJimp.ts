import * as fs from 'fs-extra';
import Jimp from 'jimp';
import { join } from 'path';

const publicPath = join(__dirname, '..', 'public');
const imgPath = join(publicPath, 'img');

(async () => {
  const paths = await fs.readdir(imgPath);

  paths.slice(0, 1).forEach((path) => {
    Jimp.read(join(imgPath, path)).then((image) => {
      image
        .quality(10)
        .write(join(__dirname, '..', 'public', 'placeholder', path));
    });
  });
})();
