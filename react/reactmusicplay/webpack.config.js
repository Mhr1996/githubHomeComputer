const path = require('path');

module.exports={
	mode:'development',
	entry:'./index.js',
	output:{
		filename:"index.js",
	    path: path.resolve(__dirname, 'dist')
	},
	module:{
		rules:[
			{
			    test:/\.css$/,
			    use:[
			       	'style-loader',
			       	'css-loader'
			    ]
			},
			{
			    test:/\.js$/,
			    exclude:/node_modules/,
			    use:[
			       	'babel-loader'
			    ]
			}
		]
	}
}