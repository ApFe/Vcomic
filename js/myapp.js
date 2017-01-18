/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var CompHeader=__webpack_require__(1);
	var CompContent=__webpack_require__(2);
	var CompHome=__webpack_require__(3);
	var CompFooter=__webpack_require__(4);
	__webpack_require__(10);

	var Root=React.createClass({displayName: "Root",
		render:function(){
			return(
				React.createElement("div", {id: "app"}, 
					React.createElement(CompHeader, null), 
					React.createElement(CompContent, null), 
					React.createElement(CompFooter, null)
				)
			)
		}
	})
	ReactDOM.render(React.createElement(Root, null),document.body);
	ReactDOM.render(React.createElement(CompHome, null),document.getElementById('home'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	
	var CompHeader=React.createClass({displayName: "CompHeader",
		hendOnclick:function(evt){
			$(event.target).addClass("active").siblings().removeClass("active")
		},
		render:function(){
			return(
				React.createElement("header", null, 
					React.createElement("ul", {id: "header"}, 
						React.createElement("li", null), 
				        React.createElement("li", null, 
				          React.createElement("i", null, 
				          	React.createElement("span", {onClick: this.hendOnclick}, "关注"), 
				          	React.createElement("span", {className: "active", onClick: this.hendOnclick}, "热门")
				          )
				        ), 
				        React.createElement("li", {className: "yo-ico"}, "")
					)
				)
			)
		}
	})
	module.exports=CompHeader;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var Compcontent=React.createClass({displayName: "Compcontent",
		render:function(){
			return(
				React.createElement("section", null, 
					React.createElement("div", {id: "home"})
				)
			)
		}
	})
	module.exports=Compcontent;


/***/ },
/* 3 */
/***/ function(module, exports) {

	
	var CompHome=React.createClass({displayName: "CompHome",
		getDefaultProps:function(){
			return{
				web_service:'http://localhost:8999'
			}
		},
		getInitialState:function(){
			console.log(0)
			return{
				swiper:null,
				navIndex:1,
				list:[],
				nav:[
					{
						index:'0',
						title:'周一',
						isActive:true
					},
					{
						index:'1',
						title:'周二',
						isActive:false
						
					},
					{
						index:'2',
						title:'周三',
						isActive:false
						
					},
					{
						index:'3',
						title:'周四',
						isActive:false
						
					},
					{
						index:'4',
						title:'周五',
						isActive:false
						
					},
					{
						index:'5',
						title:'周六',
						isActive:false
						
					},
					{
						index:'6',
						title:'周日',
						isActive:false
						
					}
				]
				
			}
		},
		componentWillMount:function(){
			console.log(1)
			var that=this;
			fetch('/api/list').then(function(response) {
				//console.log(response)
			  return response.json();
			}).then(function(res) {
				
			  	that.setState({list:res});
			  	that.swiper = new Swiper('#index-swiper', {
					loop:true
	//				resistanceRatio : 0,  //去除边框反弹
	//				onSlideChangeStart: function(swiper){
	//				  	$("nav ul li").eq(swiper.activeIndex-1).addClass('active').siblings().removeClass('active');
	//				  }
						
				});
				console.log(res)
				
				
			}).catch(function(e) {
			  console.log("Oops, error");
			});
			
			
		},
		hendOnclick:function(evt){
			var index=event.target.id;
			this.swiper.slideTo(index,200,false);
			//console.log(this.state.navIndex)
			$(event.target).addClass("active").siblings().removeClass("active")
	//			event.target.className="active";
	//			event.target.siblings.className="";
			var he=document.getElementsByClassName("head")[0];
			console.log(index)
			if(index>=2){
				he.style.marginTop='-0.36rem';
			}
			
			
		},
		render:function(){
			console.log(2)
			if(this.state.list.length>0){
				//console.log(this.state.list)
				var arr=this.state.list;
				//console.log(arr)
				var Lists=[];
				for(var j=0;j<arr.length;j++){
					console.log(11111)
					Lists.push(
						React.createElement("li", {key: j}, 
							React.createElement("b", null, React.createElement("i", null, arr[j].id), arr[j].title), 
							React.createElement("i", null, 
								React.createElement("img", {src: arr[j].imgSrc})
							), 
							React.createElement("b", null, arr[j].doorprice)
						)
					)
				
				}
			}
			var Nav=[];
			for(var i=0;i<this.state.nav.length;i++){
				if (this.state.nav[i].isActive==true) {
					
					Nav.push(
						React.createElement("li", {id: i+1, className: "active", onClick: this.hendOnclick, key: i}, this.state.nav[i].title)
					)
					
				} else{
					Nav.push(
						React.createElement("li", {id: i+1, className: "", onClick: this.hendOnclick, key: i}, this.state.nav[i].title)
					)
					
				}
			};
			
			return(
				React.createElement("div", null, 
					React.createElement("nav", null, 
						React.createElement("ul", null, 
							Nav
						)
					), 
					
					
								
					
					React.createElement("div", {className: "center"}, 
						React.createElement("div", {className: "swiper-container", id: "index-swiper"}, 
						
						    	React.createElement("div", {className: "head"}, 
								    React.createElement("img", {src: "/images/arrow.png", width: "40", height: "40"}), 
								    React.createElement("span", null, "下拉刷新...")
							    ), 
							    
						    React.createElement("div", {className: "swiper-wrapper"}, 
							    React.createElement("div", {className: "swiper-slide", id: "index-scroll"}, 
							    	React.createElement("ul", {className: "ap"}, 
										Lists
									)
							    ), 
							    React.createElement("div", {className: "swiper-slide"}, "slider2"), 
							    React.createElement("div", {className: "swiper-slide"}, "slider3"), 
							    React.createElement("div", {className: "swiper-slide"}, 
							    	React.createElement("ul", {className: "ap4"}, 
							    		Lists
							    	)
							    ), 
							    React.createElement("div", {className: "swiper-slide"}, "slider5"), 
							    React.createElement("div", {className: "swiper-slide"}, "slider6"), 
							    React.createElement("div", {className: "swiper-slide"}, "slider7")
						    
						    ), 
						    
						    	React.createElement("div", {className: "foot"}, 
							      	React.createElement("img", {src: "/images/arrow.png", width: "40", height: "40"}), 
							      	React.createElement("span", null, "上拉加载更多...")
							    )
							    
						)
					
						
						
								
					
					
					
					)
								
			
				)
				
			)
		},
		componentDidMount:function(){//componentDidMount,componentDidUpdate
			
			//console.log(this.state.list)
			
			
			var swiper = new Swiper('#index-swiper', {

					resistanceRatio : 0,  //去除边框反弹
					onSlideChangeStart: function(swiper){
					  	$("nav ul li").eq(swiper.activeIndex-1).addClass('active').siblings().removeClass('active');
					  
	//				fetch('/api/list').then(function(response) {
	//									//console.log(response)
	//								  return response.json();
	//								}).then(function(res) {
	//									
	//			            			for(var j=0;j<res.length;j++){
	//											$('.ap3')[0].innerHTML+='<li key='+j+' ><b><i>'+res[j].id+'</i>'+res[j].title+'</b><i><img src="'+res[j].imgSrc+'"  /></i><b>'+res[j].doorprice+'</b></li>';
	//		
	//										};
	//		});
					
					
					}
				});
			
			
		
			
			
				//setTimeout(function(){},1000)
					var myScroll = new IScroll('#index-scroll', {
				       // scrollbars:true,
				        probeType: 3,
				        mouseWheel: true
				    });
				
				     var scrollHeight = 35;
					    $('.head.hide').removeClass('hide');
					    $('.foot.hide').removeClass('hide');
					    myScroll.scrollBy(0, -scrollHeight);
				
				    var head = $('.head img'),
				        topImgHasClass = head.hasClass('up');
				    var foot = $('.foot img'),
				        bottomImgHasClass = head.hasClass('down');
				    myScroll.on('scroll', function () {
				        var y = this.y,
				            maxY = this.maxScrollY - y;
				        if (y >= 0) {
				            !topImgHasClass && head.addClass('up');
				            return '';
				        }
				        if (maxY >= 0) {
				            !bottomImgHasClass && foot.addClass('down');
				            return '';
				        }
				    });
				
				    myScroll.on('scrollEnd', function () {
				        if (this.y >= -scrollHeight && this.y < 0) {
				            myScroll.scrollTo(0, -scrollHeight);
				            head.removeClass('up');
				        } else if (this.y >= 0) {
				            head.attr('src', '/images/ajax-loader.gif');
				            //TODO ajax下拉刷新数据
				
				            setTimeout(function () {
				                myScroll.scrollTo(0, -scrollHeight);
				                head.removeClass('up');
				                head.attr('src', '/images/arrow.png');
				            }, 100);
				        }
				
				        var maxY = this.maxScrollY - this.y;
				        if (maxY > -scrollHeight && maxY < 0) {
				            var self = this;
				            myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
				            foot.removeClass('down')
				        } else if (maxY >= 0) {
				            foot.attr('src', '/images/ajax-loader.gif');
				            //TODO ajax上拉加载数据
				            var self = this;
							
									fetch('/api/list').then(function(response) {
										//console.log(response)
									  return response.json();
									}).then(function(res) {
										console.log(res)
	//									var ap=document.getElementsByClassName("ap")[0];
	//										console.log(ap);
				            			for(var j=0;j<res.length;j++){
											$('.ap')[0].innerHTML+='<li key='+j+' ><b><i>'+res[j].id+'</i>'+res[j].title+'</b><i><img src="'+res[j].imgSrc+'"  /></i><b>'+res[j].doorprice+'</b></li>';
											$('.ap4')[0].innerHTML+='<li key='+j+' ><b><i>'+res[j].id+'</i>'+res[j].title+'</b><i><img src="'+res[j].imgSrc+'"  /></i><b>'+res[j].doorprice+'</b></li>';
									//document.getElementsByClassName('head')[0].style.marginTop='-0.36rem';
										}
				
				              myScroll.refresh();
				
				              //myScroll.scrollTo(0, self.y + scrollHeight);
				              myScroll.scrollTo(0, self.maxScrollY - 60);
				
				              foot.removeClass('down');
				              foot.attr('src', '/images/arrow.png');
				          })
				        }
				    })
				

		}
	})
	module.exports=CompHome;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Router=__webpack_require__(5)
	var CompFooter=React.createClass({displayName: "CompFooter",
		
		mixins:[Router],
		
		render:function(){
			return(
				React.createElement("footer", null, 
					React.createElement("ul", null, 
						React.createElement("li", {onClick: this.router, "data-href": "/index", className: "active"}, 
							React.createElement("i", {className: "yo-ico", "data-href": "/index"}, ""), 
							React.createElement("b", {"data-href": "/index"}, "漫画")
						), 
						React.createElement("li", {onClick: this.router, "data-href": "/classify"}, 
							React.createElement("i", {className: "yo-ico", "data-href": "/classify"}, ""), 
							React.createElement("b", {"data-href": "/classify"}, "发现")
						), 
						React.createElement("li", {onClick: this.router, "data-href": "/Vcity"}, 
							React.createElement("i", {className: "yo-ico", "data-href": "/Vcity"}, ""), 
							React.createElement("b", {"data-href": "/Vcity"}, "V社区")
						), 
						React.createElement("li", {onClick: this.router, "data-href": "/mine"}, 
							React.createElement("i", {className: "yo-ico", "data-href": "/mine"}, ""), 
							React.createElement("b", {"data-href": "/mine"}, "我的")
						)
					)
				)
			)
		},
		componentDidMount:function(){
			
		}
	})
	module.exports=CompFooter;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	var Router=(function(){
		var unmountFun=function(arr){
			for(var i=0;i<arr.length;i++){
				ReactDOM.unmountComponentAtNode(document.getElementById(arr[i]));
				
			}
		}
		var mountFun=function(obj){
			for(var key in obj){
				var T=__webpack_require__(6)(obj[key]);
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
			console.log($(cl).eq())
			$(cl).parent().addClass("active").siblings().removeClass("active")
			
			if(href=='/mine'){
		
				document.getElementsByTagName('header')[0].style.display = 'none';
				
			}else{
				document.getElementsByTagName('header')[0].style.display = 'block';
			}
			
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./classify": 7,
		"./classify.js": 7,
		"./content": 2,
		"./content.js": 2,
		"./footer": 4,
		"./footer.js": 4,
		"./header": 1,
		"./header.js": 1,
		"./home": 3,
		"./home.js": 3,
		"./mine": 8,
		"./mine.js": 8,
		"./router": 5,
		"./router.js": 5,
		"./vcity": 9,
		"./vcity.js": 9
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 6;


/***/ },
/* 7 */
/***/ function(module, exports) {

	
	var CompClassify=React.createClass({displayName: "CompClassify",
		render:function(){
			return(
				React.createElement("div", null, 
					React.createElement("div", null, "this is classify"), 
					React.createElement("div", null, "this is classify02"), 
					React.createElement("div", null, "this is classify03"), 
					React.createElement("div", null, "this is classify04")
				)
				
			)
		}
	})
	module.exports=CompClassify;

/***/ },
/* 8 */
/***/ function(module, exports) {

	
	var CompMine=React.createClass({displayName: "CompMine",
		render:function(){
			return(
				React.createElement("div", {className: "m-my"}, 
					React.createElement("div", null, 
						React.createElement("div", {className: "login"}, 
							React.createElement("div", null), 
							React.createElement("p", null, "登陆")
						), 
						React.createElement("ul", null, 
							React.createElement("li", null, 
								React.createElement("span", null, 
									React.createElement("i", {className: "yo-ico"}, ""), 
									React.createElement("p", null, "我的消息")
								), 
								React.createElement("span", {className: "yo-ico"}, "")
							)
							
						), 
						React.createElement("ul", null, 
							React.createElement("li", null, 
								React.createElement("span", null, 
									React.createElement("i", {className: "yo-ico"}, ""), 
									React.createElement("p", null, "我的关注")
								), 
								React.createElement("span", {className: "yo-ico"}, "")
							), 
							React.createElement("li", null, 
								React.createElement("span", null, 
									React.createElement("i", {className: "yo-ico"}, ""), 
									React.createElement("p", null, "我的收藏")
								), 
								React.createElement("span", {className: "yo-ico"}, "")
							)
						), 
						React.createElement("ul", null, 
							React.createElement("li", null, 
								React.createElement("span", null, 
									React.createElement("i", {className: "yo-ico"}, ""), 
									React.createElement("p", null, "快看商城")
								), 
								React.createElement("span", {className: "yo-ico"}, "")
							), 
							React.createElement("li", null, 
								React.createElement("span", null, 
									React.createElement("i", {className: "yo-ico"}, ""), 
									React.createElement("p", null, "我的订单")
								), 
								React.createElement("span", {className: "yo-ico"}, "")
							)
						), 
						React.createElement("ul", null, 
							React.createElement("li", null, 
								React.createElement("span", null, 
									React.createElement("i", {className: "yo-ico"}, ""), 
									React.createElement("p", null, "浏览历史")
								), 
								React.createElement("span", {className: "yo-ico"}, "")
							), 
							React.createElement("li", null, 
								React.createElement("span", {className: "my-load"}, 
									React.createElement("i", {className: "yo-ico"}, ""), 
									React.createElement("span", null, 
										React.createElement("p", null, "智能缓存"), 
										React.createElement("p", null, "正在下载今天更新的漫画")
									)
								), 
								React.createElement("span", {className: "yo-ico"}, "")
								
							)
						), 
						React.createElement("ul", null, 
							React.createElement("li", null, 
								React.createElement("span", null, 
									React.createElement("i", {className: "yo-ico"}, "㐾"), 
									React.createElement("p", null, "设置")
								), 
								React.createElement("span", {className: "yo-ico"}, "")
							)
						)
					)	
				)
			)
		},
		componentDidMount:function(){
		
		}
	})
	module.exports=CompMine;

/***/ },
/* 9 */
/***/ function(module, exports) {

	
	var CompVcity=React.createClass({displayName: "CompVcity",
		render:function(){
			return(
				React.createElement("div", null, 
					React.createElement("div", null, "this is vcity001"), 
					React.createElement("div", null, "this is vcity002"), 
					React.createElement("div", null, "this is vcity003")
				)
				
			)
		}
	})
	module.exports=CompVcity;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);