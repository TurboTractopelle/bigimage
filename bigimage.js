const Jimp = require("jimp");
const chalk = require("chalk");

const argv = require("yargs")
  .option("file", {
    alias: "f",
    describe: `The name of the file to use`,
    type: "string",
    require: true
  })
  .option("width", {
    alias: "w",
    describe: `Set image width in px, default:1500px`,
    type: "string"
  }).argv;

console.log(chalk`{cyan Opening file ${argv.file}}`);

Jimp.read("./in/01.jpg")
  .then(img => {
    return img
      .resize(256, 256)
      .quality(60)
      .greyscale()
      .write("./out/01-bw.jpg");
  })
  .catch(err => {
    console.error(err);
  });
