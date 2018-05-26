const rimraf = require('rimraf');
const chalk = require('chalk');
const paths = require('../config/paths');

function printBuildError(err) {
  const message = err != null && err.message;
  const stack = err != null && err.stack;

  // Add more helpful message for UglifyJs error
  if (
    stack &&
    typeof message === 'string' &&
    message.indexOf('from UglifyJs') !== -1
  ) {
    try {
      const matched = /(.+)\[(.+):(.+),(.+)\]\[.+\]/.exec(stack);
      if (!matched) {
        throw new Error('Using errors for control flow is bad.');
      }
      const problemPath = matched[2];
      const line = matched[3];
      const column = matched[4];
      console.log(
        'Failed to minify the code from this file: \n\n',
        chalk.yellow(
          `\t${problemPath}:${line}${column !== '0' ? ':' + column : ''}`
        ),
        '\n'
      );
    } catch (ignored) {
      console.log('Failed to minify the bundle.', err);
    }
    console.log('Read more here: http://bit.ly/CRA-build-minify');
  } else {
    console.log((message || err) + '\n');
  }
  console.log();
}

console.log(chalk.green('Waiting for cleaning build path.\n'));
console.log(chalk.blue('Cleaning server build path.\n'));
rimraf(paths.serverBuild, err => {
  if (err) {
    console.log(chalk.red('Failed to clean server build path.\n'));
    printBuildError(err);
    process.exit(1);
  }
  console.log(chalk.green('Cleaned server build path successfully.\n'));
  // clean app build path
  console.log(chalk.blue('Cleaning app build path.\n'));
  rimraf(paths.appBuild, err => {
    if (err) {
      console.log(chalk.red('Failed to clean app build path.\n'));
      printBuildError(err);
      process.exit(1);
    }
    console.log(chalk.green('Cleaned app build path successfully.\n'));
  });
});
