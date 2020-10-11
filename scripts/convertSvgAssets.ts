/* eslint-disable import/no-extraneous-dependencies */

import * as fs from 'fs';
import { imageSize } from 'image-size';
import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as svgexport from 'svgexport';

const assetsPath = join(__dirname, '..', 'assets');

fs.readdir(assetsPath, { encoding: 'utf-8' }, (err, paths) => {
  if (!err) {
    paths.forEach((path, i) => {
      const { width, height } = imageSize(join('assets', path));

      const data = {
        input: join(assetsPath, path),
        output: `${join(
          __dirname,
          '..',
          'public',
          'img',
          path.replace(/svg$/, 'png'),
        )} ${width && height ? (width > height ? '192:' : ':192') : '192:192'}`,
      };

      // * without the timeout a significant amount of images are skipped
      setTimeout(() => {
        svgexport.render(data);
      }, i * 100);
    });
  }
});
