const path = require('path');

module.exports = {
	context: path.join(__dirname, '/src'),
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: path.resolve(__dirname,'src')
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env', '@babel/react'],
				},
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env', '@babel/react'],
				},
			},
			{
				test: /\.(scss|css)$/,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
		],
	},
	entry: {
		javascript: './index',
	},
	resolve: {
		alias: {
			react: path.join(__dirname, 'node_modules', 'react'),
		},
		extensions: ['.js', '.jsx', '.scss'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './../dist'),
	},
	mode: 'development',
};
