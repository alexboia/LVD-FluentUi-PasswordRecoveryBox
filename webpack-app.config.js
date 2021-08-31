const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
	mode: "none",
	context: path.resolve(__dirname),

	entry: {
		style: './src/css/style.css',
		main: './src/Index.jsx'
	},

	output: {
		path: path.resolve(__dirname, 'demo/build/app'),
		filename: '[name].bundle.js'
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

	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]([^.]*)\.js/,
					name: 'vendors',
					enforce: true,
					chunks: 'all'
				}
			}
		}
	},

	plugins: [
		//courtesy of https://stackoverflow.com/questions/65018431/webpack-5-uncaught-referenceerror-process-is-not-defined
		//also see https://webpack.js.org/plugins/define-plugin/
		new webpack.ProvidePlugin({
			process: 'process/browser',
	 	}),
		new RemoveEmptyScriptsPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	]
};