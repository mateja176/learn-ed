#!/usr/bin/env node

/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */

import program from 'commander';
import fs from 'fs';
import { join } from 'path';

program
  .command('* <name>', 'create a new learning path')
  .action(({ args: [name] }) => {
    const learningPathName: string = name;

    fs.mkdirSync(join(process.cwd(), name));

    const sourceDir = join(__dirname, '..', 'example');
    const distDir = join(process.cwd(), name);

    fs.copyFile(
      join(sourceDir, 'learning-path.ts'),
      join(distDir, 'learning-path.ts'),
      () => {},
    );

    fs.copyFile(
      join(sourceDir, 'logo.svg'),
      join(distDir, 'logo.svg'),
      () => {},
    );

    fs.copyFile(
      join(sourceDir, 'global.d.ts'),
      join(distDir, 'global.d.ts'),
      () => {},
    );

    fs.readFile(
      join(sourceDir, 'example.learning-path.ts'),
      { encoding: 'utf8' },
      (err, exampleLearningPath) => {
        if (!err) {
          fs.writeFile(
            join(distDir, `${learningPathName}.learning-path.ts`),
            exampleLearningPath.replace(
              '<Example>',
              learningPathName
                .charAt(0)
                .toUpperCase()
                .concat(learningPathName.slice(1)),
            ),
            () => {},
          );
        }
      },
    );
  });

program.parse(process.argv);
