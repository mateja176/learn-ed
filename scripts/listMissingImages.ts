// eslint-disable-next-line import/no-extraneous-dependencies
import * as fs from 'fs-extra';
import { join } from 'path';
import { fromPairs, pipe } from 'ramda';

const removeExtension = (path: string) => path.replace(/\.\w+$/, '');

Promise.all([
  fs.readdir(join(__dirname, '..', 'assets')),
  fs.readdir(join(__dirname, '..', 'public', 'img')),
]).then(([svgPaths, pngPaths]) => {
  const svgNames = svgPaths.map(removeExtension);

  const pngRecord = fromPairs(
    pngPaths.map(pipe(removeExtension, (name) => [name, name])),
  );

  svgNames.forEach((name) => {
    if (!pngRecord[name]) {
      // eslint-disable-next-line no-console
      console.log(name);
    }
  });
});
