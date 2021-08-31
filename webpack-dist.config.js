const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
	mode: "none",
	context: path.resolve(__dirname),

	entry: {
		style: './src/css/components/index.css',
		index: './src/components/Index.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].umd2.js',
		library: {
			name: 'PasswordRecoveryBox',
			type: 'umd2'
		}
	},

	externals: {
		'react': {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react',
		},
		'prop-types': {
			root: 'PropTypes',
			commonjs: 'prop-types',
			commonjs2: 'prop-types',
			amd: 'prop-types',
		},
		'@fluentui/react': {
			root: 'FluentUIReact',
			commonjs: '@fluentui/react',
			commonjs2: '@fluentui/react',
			amd: '@fluentui/react'
		}
	},

	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: ['@babel/plugin-transform-runtime']
				}
			}
		}, {
			test: /\.jsx$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react', '@babel/preset-env'],
					plugins: ['@babel/plugin-transform-runtime']
				}
			}
		}, {
			test: /\.css$/,
			use: [{
				loader: MiniCssExtractPlugin.loader
			}, {
				loader: 'css-loader',
				options: {
					url: false
				}
			}]
		}]
	},

	plugins: [
		new RemoveEmptyScriptsPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	]
};