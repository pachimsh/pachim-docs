const tailwindConfigPath = `./src/configs/tailwind/modules`;
const purge = require(`${tailwindConfigPath}/purge`);
const plugins = require(`${tailwindConfigPath}/plugins`);
const variants = require(`${tailwindConfigPath}/variants`);
const container = require(`${tailwindConfigPath}/properties/container`);

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container,
  },
  variants: {
    extend: variants,
  },
  plugins,
};
