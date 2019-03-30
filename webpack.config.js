module.exports = {
    entry: './frontend/index.js',
    output: {
        path: __dirname + '/backend/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            }
        ]
    }
};