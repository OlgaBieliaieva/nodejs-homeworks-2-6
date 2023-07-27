const jimp = require("jimp");

const resizeImage = path => {
  jimp.read(path)
  .then((image) => {
    image.resize(250, 250)
  })
  .catch((err) => {
    console.log(err)
  });
}
module.exports = resizeImage