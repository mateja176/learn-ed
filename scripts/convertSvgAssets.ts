/* eslint-disable import/no-extraneous-dependencies */

import * as fs from 'fs';
import { join } from 'path';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as svgexport from 'svgexport';

const assetsPath = join(__dirname, '..', 'assets');

fs.readdir(assetsPath, { encoding: 'utf-8' }, (err, paths) => {
  if (!err) {
    paths.forEach((path, i) => {
      const input = join(assetsPath, path);
      const output = join(
        __dirname,
        '..',
        'public',
        'img',
        path.replace(/svg$/, 'png'),
      );
      const data = {
        input,
        output: `${output} pad 200:200`,
      };

      // * without the timeout a significant amount of images are skipped
      setTimeout(() => {
        svgexport.render(data);
      }, i * 100);
    });
  }
});
