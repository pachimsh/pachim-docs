const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./style/**/*.css"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: [],
  },
  plugins : [
    plugin(function ({ addVariant }) {
      addVariant("important", ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls((decl) => {
            decl.important = true;
          });
        });
      });
    }),
  ],
};
