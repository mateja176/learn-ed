#!/usr/bin/env node

/* eslint-disable no-console */

import program from 'commander';
import fs from 'fs';
import { join } from 'path';

program
  .command('* <name>', 'create a new learning path')
  .action(({ args: [name] }) => {
    fs.copyFileSync(
      join(__dirname, '../example/learning-path.ts'),
      join(process.cwd(), 'learning-path.ts'),
    );
    fs.copyFileSync(
      join(__dirname, '../example/example.learning-path.ts'),
      join(process.cwd(), `${name}.learning-path.ts`),
    );
  });

program.parse(process.argv);
