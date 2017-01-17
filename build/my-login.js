var MineLogin = React.createClass({
	render:function(){
		return(
			<div className="mine-login">
				<div>
					<span></span>
					<span>忘记密码</span>
				</div>
				<div>
					<span><img src="../js/images/mine-logo.png" /></span>
					<span><input type="text" name="" placeholder="支持中国大陆" /></span>
					<span><input type="text" name="" placeholder="8-30位数字或英文" /></span>
					<span><button>登陆</button></span>
					<span><p>立即注册</p></span>
					<span>其他方式登陆</span>
				</div>
				<div>
					<span className="yo-ico">&#xe658;</span>
					<span className="yo-ico">&#xe60a;</span>
					<span className="yo-ico">&#xe66f;</span>
				</div>
			</div>
		)
	}
})
module.exports = MineLogin;