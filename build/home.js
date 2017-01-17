
var CompHome=React.createClass({
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
					<li key={j}>
						<b><i>{arr[j].id}</i>{arr[j].title}</b>
						<i>
							<img src={arr[j].imgSrc} />
						</i>
						<b>{arr[j].doorprice}</b>
					</li>
				)
			
			}
		}
		var Nav=[];
		for(var i=0;i<this.state.nav.length;i++){
			if (this.state.nav[i].isActive==true) {
				
				Nav.push(
					<li id={i+1} className="active" onClick={this.hendOnclick} key={i}>{this.state.nav[i].title}</li>
				)
				
			} else{
				Nav.push(
					<li id={i+1} className="" onClick={this.hendOnclick} key={i}>{this.state.nav[i].title}</li>
				)
				
			}
		};
		
		return(
			<div>
				<nav>
					<ul>
						{Nav}
					</ul>
				</nav>
				
				
							
				
				<div className="center">
					<div className="swiper-container" id="index-swiper">
					
					    	<div className="head">
							    <img src="/images/arrow.png" width="40" height="40"/>
							    <span>下拉刷新...</span>
						    </div>
						    
					    <div className="swiper-wrapper">
						    <div className="swiper-slide" id="index-scroll">
						    	<ul className="ap">
									{Lists}
								</ul>
						    </div>
						    <div className="swiper-slide">slider2</div>
						    <div className="swiper-slide">slider3</div>
						    <div className="swiper-slide">
						    	<ul className="ap4">
						    		{Lists}
						    	</ul>
						    </div>
						    <div className="swiper-slide">slider5</div>
						    <div className="swiper-slide">slider6</div>
						    <div className="swiper-slide">slider7</div>
					    
					    </div>
					    
					    	<div className="foot">
						      	<img src="/images/arrow.png" width="40" height="40"/>
						      	<span>上拉加载更多...</span>
						    </div>
						    
					</div>
				
					
					
							
				
				
				
				</div>
							
		
			</div>
			
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