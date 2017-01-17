var Router=require('./router.js')
var CompFooter=React.createClass({
	
	mixins:[Router],
	
	render:function(){
		return(
			<footer>
				<ul>
					<li onClick={this.router} data-href='/index' className="active">
						<i className="yo-ico"  data-href='/index'>&#xe601;</i>
						<b  data-href='/index'>漫画</b>
					</li>
					<li onClick={this.router} data-href='/classify'>
						<i className="yo-ico" data-href='/classify'>&#xe648;</i>
						<b data-href='/classify'>发现</b>
					</li>
					<li onClick={this.router} data-href='/Vcity'>
						<i className="yo-ico" data-href='/Vcity'>&#xe736;</i>
						<b data-href='/Vcity'>V社区</b>
					</li>
					<li onClick={this.router} data-href='/mine'>
						<i className="yo-ico" data-href='/mine'>&#xe609;</i>
						<b data-href='/mine'>我的</b>
					</li>
				</ul>
			</footer>
		)
	},
	componentDidMount:function(){
		
	}
})
module.exports=CompFooter;
