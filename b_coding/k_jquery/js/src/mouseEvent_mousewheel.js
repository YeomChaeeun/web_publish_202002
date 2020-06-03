//  mouseEvent_mousewheel.js
(function($){

	var colorArr = ['#fa0', '#acf', '#cfa', '#5df', '#fac'];
	var n = 0;
	
	var mw = $('.mw');
	var mouseOk = true;
	mw.on('mousewheel DOMMouseScroll', function(e){
		// console.log(e.type);
		// console.log(e.originalEvent.wheelDelta);
		// console.log(e.originalEvent.detail);
		if(mouseOk){
			mouseOk = false;
			var evt = e.originalEvent;
			var mouseResult;
			if( evt.wheelDelta ){
				// mouseResult = 'wheelDelta가 존재한다';
				mouseResult = evt.wheelDelta;
			}else{
				// mouseResult = 'wheelDelta가 없다';
				mouseResult = evt.detail * -40;
			}
		}
		//  console.log(mouseResult);
		// ----------------------------
		 if(mouseResult < 0 && n > 0){
				n -= 1;
			}else if(mouseResult > 0 && n < colorArr.length){
				n += 1;
			}
			mw.text(colorArr[n]);
			mw.stop().animate({backgroundColor: colorArr[n]},300 , function(){
				mouseOk = true;
			});
	});

})(jQuery);