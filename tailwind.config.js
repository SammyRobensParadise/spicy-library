/**
 * IMPORTANT
 * Did you make changes to the library tailwind styles?
 * If yes, then you need to rebuild tailwindCSS
 * by running `yarn run build:tailwind` and restart
 * the library.
 *
 * This will regenerate a css file
 * in /src/styles/library.css that includes
 * the latest changes to `tailwind.config.js`
 */
module.exports = {
    // purge any unused classNames from globs
    purge: ["./src/**/*"],
    darkMode: false,
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
}
