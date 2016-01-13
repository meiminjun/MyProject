/*
 * @Author: EX-MEIMINJUN001
 * @Date:   2015-12-07 11:16:42
 * @Last Modified by:   EX-MEIMINJUN001
 * @Last Modified time: 2016-01-13 19:16:14
 */
var webpack = require('webpack');
var path = require('path');
// var jquery = require('jquery');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var entryFile = APP_PATH + "/main";

module.exports = {
	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
	entry: entryFile,
	//输出的文件名 合并以后的js会命名为bundle.js
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.html']
	},
	module: {
		loaders: [{
			test: /\.handlebars$/,
			loader: 'handlebars-loader',
			include: APP_PATH
		},{
			test: /\.css$/,
			loaders: ['style', 'css'],
			include: APP_PATH
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=40000'
		}, {
			test: /\.html$/,
			loader: 'html'
		}]
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		// host:'10.6.160.183',
		port: 4000
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Hello World app'
		}),
		new webpack.HotModuleReplacementPlugin(),
		// 配置全局jquery
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	],
	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		// "jquery": "jQuery"
	},
	devtool: 'source-map'
};