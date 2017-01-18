var Vcitylist = require("./vcitychild")
var CompVcity=React.createClass({
	getDefaultProps : function(){
		return {
			"url":"/api/vcity"
		}
	},
	getInitialState : function(){
		return {
			"reset":""
		}
	},
	componentWillMount : function(){
		var that = this;
		$.ajax({
			url : that.props.url,
			dataType : "jsonp",
			success : function(res){
				that.setState({
					"reset" : res
				})
			}
		})
	},
	render:function(){
	var arr = [];
	var reset = this.state.reset;
	console.log(reset);
	if(reset){
		for(var i=0;i<reset.length;i++){
			arr.push(<Vcitylist {...reset[i]} />)
		}
	}
		return(
			<div id="m-vcity">
				<div id="tab">
					<div id="hot"><a>热门</a></div>
					<div id="new"><a>最新</a></div>
				</div>
				{arr}
			</div>
		)
	}
})
module.exports = CompVcity;











