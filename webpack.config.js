var webpack = require('webpack');
var ET=require('extract-text-webpack-plugin');
module.exports={
	//写各种配置
	
	//1.入口
	entry:'./build/app.js',
	//2.出口
	output:{
		filename:'myapp.js',//整合文件名
		path:'./js/'//输出路径
	},
	//3.模块化依赖工具（配置什么样的加载器）
	module:{
		loaders:[
			{
				test:/\.js$/,//正则 当前读取所有文件类型过滤
				loader:'jsx-loader?presets[]=es2015'
			},
			{
				test:/\.css$/,
				loader:'style!css'
			},
			{
				test:/\.scss$/,
				loader:ET.extract('style','css!sass')
			}
		]  //可以写多个加载器
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin(),
		new ET('bundle.css')
	]
}