const path = require('path');

const main = (name, minimize) => ({
    entry: './src/index.js',
    mode: "production",
    optimization: {
        minimize,
        usedExports: true
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        globalObject: "this",
        filename: name,
        path: path.resolve(__dirname, 'dist'),
    }
});

module.exports = [
    {
        ...main('dapp.js', false),
        devtool: 'inline-source-map',
        mode: "development",
    },
    {
        ...main('dapp.min.js', true)
    }
];

/*
module.exports = {
	entry: [
		'./src/main.js'
	],
	output: {
		filename: 'build.js'
	},
	module: {
		rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
		]
	}
};
*/