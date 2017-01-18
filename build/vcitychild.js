var VcityChild = React.createClass({
	render:function(){
		var data = this.props;
		return(			
				<div id="vcity-section">
					<h6>
						<img title="userName" src={data.userimg}/>
						<span>  {data.username}  </span>
						<button>+关注</button>
					</h6>
					<p>
						{data.content}
						<img src={data.contentImg}/>
					</p>
					<div id="bottom">
						<span>{data.time}</span>
						<i>{data.zan}</i>
						<b>{data.commit}</b>
					</div>
				</div>
		)
	}
//	componentDidMount : function(){
//		setTimeout(function(){
//			var myScroll = new IScroll("#wrapper");
//		},1000)
//	}
})
module.exports = VcityChild;