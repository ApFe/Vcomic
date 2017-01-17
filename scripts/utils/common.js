// var name = 'xxx';
// module.exports = name;
//let name='yyyy';
//export default name;
var common={
	render:function(str){
		var body=document.body;
		body.innerHTML= str+body.innerHTML;
	},
	isAllLoaded(scope, cb) {
      var t_img; // 定时器
      var isLoad = true; // 控制变量

      // 判断图片加载状况，加载完成后回调
      return isImgLoad(cb);

      // 判断图片加载的函数
      function isImgLoad(callback) {
          // 查找所有图片，迭代处理
          $(scope).find('img').each(function() {
              // 找到为0就将isLoad设为false，并退出each
              if (this.height === 0) {
                  isLoad = false;
                  return false;
              }
          });
          // 为true，没有发现为0的。加载完毕
          if (isLoad) {
              clearTimeout(t_img); // 清除定时器
              // 回调函数
              callback();
          // 为false，因为找到了没有加载完成的图，将调用定时器递归
          } else {
              isLoad = true;
              t_img = setTimeout(function() {
                  isImgLoad(callback); // 递归扫描
              }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
          }
      }
  },
	scroll:function(that){
		var mySwiper = new Swiper('.swiper-container', {
			effect : 'coverflow',
			autoplay: 3000,//可选选项，自动滑动
			loop:true
		});
		//++++++++++++++++++++
        var myScroll = new IScroll('#index-scroll', {
            probeType: 3,
            mouseWheel: true
        });

        var scrollHeight = 35;
		
		
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
                // TODO ajax下拉刷新数据

				fetch('/api/more').then(response => response.json()).then(res=>{
					that.list = that.list.concat(res);
                
                    myScroll.scrollTo(0, -scrollHeight);
                    head.removeClass('up');
                    head.attr('src', '/images/arrow.png');
                });
            }

            var maxY = this.maxScrollY - this.y;
            if (maxY > -scrollHeight && maxY < 0) {
                var self = this;
                myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
                foot.removeClass('down')
            } else if (maxY >= 0) {
                foot.attr('src', '/images/ajax-loader.gif');
                // TODO ajax上拉加载数据
                var self = this;
                
                
                fetch('/api/more').then(response => response.json()).then(res=>{
//为什么res返回之后请求不到？？？？？？？------原因concat在数组后面追加之前数组里面多加了数组，导致追加后只是再追加新数组而不是合并，导致遍历不到
	                that.list = that.list.concat(res);
						
		                myScroll.refresh();
		                myScroll.scrollTo(0, self.y + scrollHeight);
		                //myScroll.scrollTo(0, self.maxScollY);
		                foot.removeClass('down');
		                foot.attr('src', '/images/arrow.png');
                
                 
                })
                	



            }
        })
						
	}
}

module.exports=common;
