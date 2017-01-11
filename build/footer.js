var Router=require('./router.js')
var CompFooter=React.createClass({
	mixins:[Router],
	render:function(){
		return(
			<footer>
				<a onClick={this.router} data-href='/index' className="footerItem">漫画</a>
				<a onClick={this.router} data-href='/classify' className="footerItem">发现</a>
				<a onClick={this.router} data-href='/Vcity' className="footerItem">V社区</a>
				<a onClick={this.router} data-href='/mine' className="footerItem">我的</a>
			</footer>
		)
	}
})
module.exports=CompFooter;
