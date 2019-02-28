/* ./lib/index.js */
const fs = require('fs-extra');
const figlet = require('figlet');

/**
 * Console Extensions
 */
console.line = console.log.bind(console, '\n---');
console.fix = console.log.bind(console, '\n🔧 ');
console.derp = console.log.bind(console, '\n💥 ');
console.genie = console.log.bind(console, '\n🧞 ');
console.created = console.log.bind(console, '\n🎉 ');

/**
 * Fixes project package.json with the given name
 *
 * @param {String} projectName
 */
const fixPackageJSON = projectName => {
  console.line();
  console.fix('Fixing package.json...');
  console.line();

  const packageJSON = `${projectName}/package.json`;
  const json = JSON.parse(fs.readFileSync(packageJSON).toString());

  json.name = projectName;
  json.version = '1.0.0';

  delete json.author;
  delete json.repository;
  delete json.global;
  delete json.bin;

  try {
    fs.writeFileSync(packageJSON, JSON.stringify(json, null, 2));
  } catch (err) {
    console.derp();
    console.error(err);
  }
};

/**
 * Copies + Moves Files
 *
 * @param {String} projectName
 */
const copyFiles = projectName => {
  const start = Date.now();

  /**
   * Logo ASCII
   */
  figlet.text(
    'DesignUI',
    {
      font: "Patorjk's Cheese",
      horizontalLayout: 'default',
      verticalLayout: 'default',
    },
    (err, data) => {
      if (err) {
        console.derp('Something went wrong...\n');
        console.dir(err);
        return;
      }
      console.log('\n', data, '\n');
      console.genie(`Creating Design System - ${projectName}...`);
    },
  );

  /**
   * Copy Project Files
   */
  fs.copy(`${__dirname}/../styled-project`, projectName)
    .then(() => fixPackageJSON(projectName))
    .then(() => console.created(`Done! (${Date.now() - start}ms)\n`))
    .catch(err => {
      console.derp('Error creating new project...\n');
      console.error(err);
    });
};

module.exports = {
  create: copyFiles,
};
