#!/usr/bin/env node

const colors = require("colors");

const fs = require('fs');
const path = require('path');

const files = {
  'index.html': '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <link rel="stylesheet" href="style.css">\n        <script defer src="main.js"></script>\n        <title>Document</title>\n    </head>\n<body>\n\n</body>\n</html>',
  'style.css': 'html, body {\nheight: 100%;\nmargin: 0;\npadding: 0;\ntext-align: center;\n}',
  'main.js': ''
};

const args = process.argv.slice(2);

if (args[0] === 'create') {

  for (const [fileName, content] of Object.entries(files)) {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFile(filePath, content, { flag: 'wx' }, (err) => {
      if (err) {
        console.error(colors.red(`Error creating ${fileName}: ${err.message}`));
      } else {
        console.log(colors.green(`Created ${fileName}`));
      }
    });
  }
} else {
  console.log(colors.red('Unknown command. Use "js-create create" to create files.'));
}
