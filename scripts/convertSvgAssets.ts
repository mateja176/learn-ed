import * as fs from 'fs';
import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as svgexport from 'svgexport'; // eslint-disable-line import/no-extraneous-dependencies

const assetsPath = join(__dirname, '..', 'assets');

fs.readdir(assetsPath, { encoding: 'utf-8' }, (err, paths) => {
  if (!err) {
    paths.forEach((path, i) => {
      const data = {
        input: join(assetsPath, path),
        output: `${join(
          __dirname,
          '..',
          'public',
          'img',
          path.replace(/svg$/, 'png'),
        )} 192:`,
      };

      setTimeout(() => {
        svgexport.render(data);
      }, i * 100);
    });
  }
});
