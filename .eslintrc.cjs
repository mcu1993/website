module.exports = {
    extends: ['@urland/eslint-config'],
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './']],
                extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
            },
        },
    },
};
