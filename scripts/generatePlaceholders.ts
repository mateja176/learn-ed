import fs from 'fs-extra';
import imagemin from 'imagemin-pngquant';
import { join } from 'path';

const publicPath = join(__dirname, '..', 'public');
const imgPath = join(publicPath, 'img');

(async () => {
  const paths = await fs.readdir(imgPath);

  paths.forEach((path) => {
    fs.readFile(join(imgPath, path)).then((img) => {
      imagemin({
        quality: [0.01, 0.02],
      })(img).then((buffer) =>
        fs.writeFile(join(publicPath, 'placeholder', path), buffer),
      );
    });
  });
})();
