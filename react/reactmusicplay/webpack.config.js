const path = require('path');
const webpack=require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	mode:'development',
	entry:{
		index:'./index.js'
	},
	output:{
		publicPath: 'http://localhost:9999/',
		filename:"js/[name].js",//[hash:6] 加上随机数 热更新时会有问题
	    path: path.resolve(__dirname, 'dist')
	},
	module:{
		rules:[
			{
			    test:/\.(scss|css)$/,
			    use:[
			        MiniCssExtractPlugin.loader,
			        "css-loader",
			        "sass-loader"
			    ]
			},
			{
			    test: /\.(js|jsx)$/,
			    exclude:/node_modules/,
			    loader: 'babel-loader',
			    options: {
			      presets : [
		            	require.resolve('babel-preset-es2015'),
		            	require.resolve('babel-preset-react'),
		          	]
			    }
			}
		]
	},
	plugins:[ //webpack 插件列表
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"windows.jQuery": "jquery"
	    }),
		new MiniCssExtractPlugin({
	      filename: 'css/[name].[hash:4].css',
	      chunkFilename: '[id].[hash:4].css'
	    }),
		new htmlWebpackPlugin({//生成js后绑定关联页面 默认为output的path位置，默认文件为index.html
			template:'./index.html',//模板文件名
			inject:"body",//指定js的html位置标签
			filename: 'index.html',
			chunks:['index'],
			minify: { //压缩HTML文件
	            removeComments: false, //移除HTML中的注释
	            collapseWhitespace: false, //删除空白符与换行符
	            minifyJS: false
	        }
		})
	],
	devServer: {//服务器端口地址
		historyApiFallback: true,//任意的 404 响应都可能需要被替代为 index.html
		contentBase: path.join(__dirname, './dist/'),
	    port: 9999,
	    hot: true,
	    inline: true//自动刷新
	}
}