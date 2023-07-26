const jimp = require("jimp");

const imageResizer = path => {
  jimp.read(path)
  .then((image) => {
    image.resize(250, 250)
  })
  .catch((err) => {
    console.log(err)
  });
}
module.exports = imageResizer