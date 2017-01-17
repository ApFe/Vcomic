
var CompHeader=React.createClass({
	hendOnclick:function(evt){
		$(event.target).addClass("active").siblings().removeClass("active")
	},
	render:function(){
		return(
			<header>
<<<<<<< HEAD
				<div>
					<h3>漫画</h3>
				</div>
				
=======
				<ul id="header">
					<li></li>
			        <li>
			          <i>
			          	<span onClick={this.hendOnclick}>关注</span>
			          	<span className="active" onClick={this.hendOnclick}>热门</span>
			          </i>
			        </li>
			        <li className="yo-ico">&#xe6a8;</li>
				</ul>
>>>>>>> master
			</header>
		)
	}
})
module.exports=CompHeader;