const env = require("./env-config.js");
module.exports = {
  presets: ["next/babel"],
  plugins: [["inline-react-svg"], ["transform-define", env]],
};
