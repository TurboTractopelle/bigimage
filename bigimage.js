const Jimp = require("jimp");

Jimp.read("./in/01.jpg")
  .then(img => {
    return img
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write("01-bw.jpg"); // save
  })
  .catch(err => {
    console.error(err);
  });
