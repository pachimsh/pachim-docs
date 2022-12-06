const plugin = require("tailwindcss/plugin");
const plugins = [
    require("@tailwindcss/forms"),
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
    require("tailwindcss-triangles")({
        componentPrefix: "c-", // defaults to 'c-'
        defaultSize: "1em", // defaults to '1em'
        defaultColor: "currentColor", // defaults to 'currentColor'
    }),
];

module.exports = plugins;
