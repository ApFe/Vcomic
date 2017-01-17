
var Router=(function(){
	var unmountFun=function(arr){
		for(var i=0;i<arr.length;i++){
			ReactDOM.unmountComponentAtNode(document.getElementById(arr[i]));
			
		}
	}
	var mountFun=function(obj){
		for(var key in obj){
			var T=require(obj[key]);
			ReactDOM.render(React.createElement(T),document.getElementById(key));
		}
	}
	var map={
		'/index':{
			'unmount':['home'],
			'mount':{
				'home':'./home.js'
			}
		},
		'/classify':{
			'unmount':['home'],
			'mount':{
				'home':'./classify.js'
			}
		},
		'/Vcity':{
			'unmount':['home'],
			'mount':{
				'home':'./vcity.js'
			}
		},
		'/mine':{
			'unmount':['home'],
			'mount':{
				'home':'./mine.js'
			}
		}
	}
	var router=function(evt){
		var href=evt.target.getAttribute("data-href");
		console.log( href )
		var cl=evt.target;
		
		$(cl).parent().addClass("active").siblings().removeClass("active")
		for(var key in map){
			if(href==key){
				var comp=map[key];
				unmountFun(comp['unmount']);
				mountFun(comp['mount']);
			}
		}
		
	}
	return{
		router:router
	}
	
})()
module.exports=Router;