/** @type {import("prettier").Config} */
module.exports = {
    tabWidth: 4,
    useTabs: false,
    plugins: ["prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: ["*.tsx"],
            options: {
                htmlWhitespaceSensitivity: "ignore",
                bracketSameLine: true,
            },
        },
    ],
};
