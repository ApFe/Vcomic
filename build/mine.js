
var CompMine=React.createClass({
	render:function(){
		return(
			<div className="m-my">
				<div>
					<div className="login">
						<div></div>
						<p>登陆</p>
					</div>
					<ul>
						<li>
							<span>
								<i className="yo-ico">&#xe638;</i>
								<p>我的消息</p>
							</span>
							<span className="yo-ico">&#xe613;</span>
						</li>
						
					</ul>
					<ul>
						<li>
							<span>
								<i className="yo-ico">&#xe608;</i>
								<p>我的关注</p>
							</span>
							<span className="yo-ico">&#xe613;</span>
						</li>
						<li>
							<span>
								<i className="yo-ico">&#xe64b;</i>
								<p>我的收藏</p>
							</span>
							<span className="yo-ico">&#xe613;</span>
						</li>
					</ul>
					<ul>
						<li>
							<span>
								<i className="yo-ico">&#xe67f;</i>
								<p>快看商城</p>
							</span>
							<span className="yo-ico">&#xe613;</span>
						</li>
						<li>
							<span>
								<i className="yo-ico">&#xe622;</i>
								<p>我的订单</p>
							</span>
							<span className="yo-ico">&#xe613;</span>
						</li>
					</ul>
					<ul>
						<li>
							<span>
								<i className="yo-ico">&#xe60a;</i>
								<p>浏览历史</p>
							</span>
							<span className="yo-ico">&#xe613;</span>
						</li>
						<li>
							<span className="my-load">
								<i className="yo-ico">&#xe609;</i>
								<span>
									<p>智能缓存</p>
									<p>正在下载今天更新的漫画</p>
								</span>
							</span>
							<span className="yo-ico">&#xe7fa;</span>
							
						</li>
					</ul>
					<ul>
						<li>
							<span>
								<i className="yo-ico">&#x343e;</i>
								<p>设置</p>
							</span>
							<span className="yo-ico">&#xe613;</span>
						</li>
					</ul>
				</div>	
			</div>
		)
	},
	componentDidMount:function(){
		document.getElementsByTagName('header')[0].style.display = 'none';
	}
})
module.exports=CompMine;