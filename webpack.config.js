/*
 * @Author: EX-MEIMINJUN001
 * @Date:   2015-12-07 11:16:42
 * @Last Modified by:   EX-MEIMINJUN001
 * @Last Modified time: 2016-01-14 18:01:19
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
		filename: '[name].js',
		chunkFilename: "js/[chunkhash].chunk.js"	// 动态加载的js
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [{
			test: /\.html$/,
			loader: 'handlebars-loader',
			include: APP_PATH
		}, {
			test: /\.css$/,
			loaders: ['style', 'css'],
			include: APP_PATH
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=40000'
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
			title: 'Hello World app',
			// favicon: './src/img/favicon.ico', //favicon路径
			// filename: './view/index.html', //生成的html存放路径，相对于 path
			template: './asset/template/index.html', //html模板路径
			inject: true, //允许插件修改哪些内容，包括head与body
			hash: true, //为静态资源生成hash值
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: false //删除空白符与换行符
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		// 配置全局jquery
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
		//允许错误不打断程序
		new webpack.NoErrorsPlugin(),
		//压缩打包的文件
		// new webpack.optimize.UglifyJsPlugin({
		//   compress: {
		//     //supresses warnings, usually from module minification
		//     warnings: false
		//   }
		// }),
	],
	// externals把公用的库排除掉。公用库会去生成lib.js,lib.css
	// externals: {
	// jquery 会导致报错，可能是已经配置了全局jquery
	//     'jquery': {
	//         root: 'jQuery',
	//         commonjs2: 'jquery',
	//         commonjs: 'jquery',
	//         amd: 'jquery'
	//     }
	// },
	devtool: 'source-map'
};