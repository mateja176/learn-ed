#!/usr/bin/env node

/* eslint-disable no-console */

import program from 'commander';
import fs from 'fs';
import { join } from 'path';

program
  .command('* <name>', 'create a new learning path')
  .action(({ args: [name] }) => {
    const learningPathName: string = name;

    fs.mkdirSync(join(process.cwd(), name));

    fs.copyFileSync(
      join(__dirname, '..', 'example', 'learning-path.ts'),
      join(process.cwd(), name, 'learning-path.ts'),
    );

    const exampleLearningPath = fs.readFileSync(
      join(__dirname, '..', 'example', 'example.learning-path.ts'),
      { encoding: 'utf8' },
    );

    fs.writeFileSync(
      join(process.cwd(), name, `${learningPathName}.learning-path.ts`),
      exampleLearningPath.replace(
        '<Example>',
        learningPathName
          .charAt(0)
          .toUpperCase()
          .concat(learningPathName.slice(1)),
      ),
    );
  });

program.parse(process.argv);
