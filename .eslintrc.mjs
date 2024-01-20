export default {
    parserOptions: {
        project: true,
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    env: {
        browser: true,
        es2020: true,
    },
    // ...
    extends: [
        // ...
        "plugin:astro/recommended",
        "plugin:jsx-a11y/strict",
        'plugin:@typescript-eslint/recommended-type-checked',
    ],
    // ...
    overrides: [
        {
            // Define the configuration for `.astro` file.
            files: ["*.astro"],
            // Allows Astro components to be parsed.
            parser: "astro-eslint-parser",
            // Parse the script in `.astro` as TypeScript by adding the following configuration.
            // It's the setting you need when using TypeScript.
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
            rules: {
                // override/add rules settings here, such as:
                // "astro/no-set-html-directive": "error"
            },
        },
        // ...
    ],
};
