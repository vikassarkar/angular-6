


module.exports = function (env) {
    switch (env.mode) {
        case 'prod':
        case 'production':
            return require('./config/webpack.prod.js');
        case 'dev':
        case 'development':
        default:
            return require('./config/webpack.dev.js');
    }
}