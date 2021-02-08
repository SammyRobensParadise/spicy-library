/**
 * IMPORTANT
 * Did you make changes to the BECOS tailwind styles?
 * If yes, then you need to rebuild tailwindCSS
 * by running `yarn run build:tailwind` and restart
 * the BECOS.
 *
 * This will regenerate a css file
 * in /src/styles/becos.css that includes
 * the latest changes to `tailwind.config.js`
 */
module.exports = {
    // purge any unused classNames from globs
    purge: [],
    darkMode: false,
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
}
