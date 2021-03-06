/**
 * Created by Json on 2014/9/3.
 */
(function () {
	var template = Z.HTMLTemplate( document.getElementById( "template" ) );
	var layout = document.querySelector( "#layout" );
	var ss;
	var layoutH = layout.offsetHeight;
	var pages = [];
	Z.ua.ios ? document.body.classList.add( "ios" ) : document.body.classList.add( "not-ios" );
	Z.loopArray( document.querySelectorAll( ".page" ), function ( page, i ) {
		if ( i > 0 ) {
			pages.push( page );
		}
	} );
	var page0 = document.querySelectorAll( ".page" )[0];
	Z.insertCSSRules( {		
		
	} );

	//  第2页折线图的横滑
	//Z.SwipeListPanel( document.querySelector( ".date-chart" ) );

	// 第3页饼状图数据
	var pcData = [
		{
			value : 0.37,
			color : "#217aa1"
		},
		{
			value : 0.63,
			color : "#fff600"
		}
	];

	var mobileData = [
		{
			value : 0.4,
			color : "#fff600"
		},
		{
			value : 0.6,
			color : "#fcdd30"
		}
	];
	//var pieCanvas = document.querySelector( ".pie-chart" );
	//pieCanvas.width = layout.offsetWidth * 0.59375;
	//pieCanvas.height = layout.offsetWidth * 0.59375;
	//var pieAnimate = null;

	/*
	// 第0页
	page0.classList.add( "no-visit" );
	page0.onCut = function () {
		page0.classList.add( "animate" );
	};
	page0.onRemove = function () {
		page0.classList.remove( "animate" );
		page0.classList.remove( "no-visit" );
	};

	// 第1页
	pages[0].onCut = function () {
		pages[0].classList.add( "animate" );
	};
	pages[0].onRemove = function () {
		pages[0].classList.remove( "animate" );
	};
	
	
	pages[1].onCut = function () {
		pages[1].classList.add( "animate" );
	};
	pages[1].onRemove = function () {
		pages[1].classList.remove( "animate" );
	};
	
    pages[2].onCut = function () {
		pages[2].classList.add( "animate" );
	};
	pages[2].onRemove = function () {
		pages[2].classList.remove( "animate" );
	};
	pages[3].onCut = function () {
		pages[3].classList.add( "animate" );
	};
	pages[3].onRemove = function () {
		pages[3].classList.remove( "animate" );
	};

	// 第5页
	pages[4].onCut = function () {
		pages[4].classList.add( "animate" );
	};
	pages[4].onRemove = function () {
		pages[4].classList.remove( "animate" );
	};

	// 第6页
	pages[5].onCut = function () {
		pages[5].classList.add( "animate" );
	};
	pages[5].onRemove = function () {
		pages[5].classList.remove( "animate" );
	};

	// 第7页
	pages[6].onCut = function () {
		pages[6].classList.add( "animate" );
	};
	pages[6].onRemove = function () {
		pages[6].classList.remove( "animate" );
	};

	
	// 第8页
	pages[7].onCut = function () {
		pages[7].classList.add( "animate" );
	};
	pages[7].onRemove = function () {
		pages[7].classList.remove( "animate" );
	};

	
	pages[8].onCut = function () {
		pages[8].classList.add( "animate" );
	};
	pages[8].onRemove = function () {
		pages[8].classList.remove( "animate" );
	};
	*/



	function Canvas( width, height ) {
		var canvas = document.createElement( "canvas" );
		var gc = canvas.getContext( "2d" );
		var devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio = gc.webkitBackingStorePixelRatio ||
				gc.mozBackingStorePixelRatio ||
				gc.msBackingStorePixelRatio ||
				gc.oBackingStorePixelRatio ||
				gc.backingStorePixelRatio || 1,
			ratio = devicePixelRatio / backingStoreRatio;

		Z.css( canvas, {
			width : width + "px",
			height : height + "px",
			display : "block"
		} );
		canvas.width = width * ratio;
		canvas.height = height * ratio;
		gc.scale( ratio, ratio );

		canvas.gc = gc;
		return canvas;
	}

	function init() {
		// 如果是ios系统，则有擦屏页，反之没有
		if ( Z.ua.ios ) {
			layout.removeChild( document.querySelector( ".page-init" ) );

			setTimeout( function () {
				document.body.removeChild( document.querySelector( ".page-loading" ) );
				ss = tc.ScreenSystem( document.getElementById( "layout" ) );
				document.querySelector( ".page-zero" ).classList.remove( "animate" );
				setTimeout( function () {
					document.querySelector( ".page-zero" ).classList.add( "animate" );
				}, 0 );
			}, 0 );
		}
		else {
			// 去掉init页面
			layout.removeChild( document.querySelector( ".page-init" ) );

			setTimeout( function () {
				document.body.removeChild( document.querySelector( ".page-loading" ) );
				ss = tc.ScreenSystem( document.getElementById( "layout" ) );
				document.querySelector( ".page-zero" ).classList.remove( "animate" );
				setTimeout( function () {
					document.querySelector( ".page-zero" ).classList.add( "animate" );
				}, 0 );
			}, 0 );
		}
	}

	init();
})();


document.addEventListener( 'WeixinJSBridgeReady', function () {
	var WeixinJSBridge = window.WeixinJSBridge;

	// 发送给好友;
	WeixinJSBridge.on( 'menu:share:appmessage', function () {
		WeixinJSBridge.invoke( 'sendAppMessage', {
			"appid" : dataForWeixin.appId,
			"img_url" : dataForWeixin.picture,
			"img_width" : "120",
			"img_height" : "120",
			"link" : dataForWeixin.url,
			"desc" : dataForWeixin.desc,
			"title" : dataForWeixin.title
		}, function ( res ) {
		} );
	} );

	// 分享到朋友圈;
	WeixinJSBridge.on( 'menu:share:timeline', function () {
		WeixinJSBridge.invoke( 'shareTimeline', {
			"img_url" : dataForWeixin.picture,
			"img_width" : "120",
			"img_height" : "120",
			"link" : dataForWeixin.url,
			"desc" : dataForWeixin.desc,
			"title" : dataForWeixin.title
		}, function ( res ) {
		} );
	} );

	// 分享到微博;
	WeixinJSBridge.on( 'menu:share:weibo', function () {
		WeixinJSBridge.invoke( 'shareWeibo', {
			"content" : dataForWeixin.title + ' ' + dataForWeixin.url,
			"url" : dataForWeixin.url
		}, function ( res ) {
		} );
	} );

	// 分享到Facebook
	WeixinJSBridge.on( 'menu:share:facebook', function () {
		WeixinJSBridge.invoke( 'shareFB', {
			"img_url" : dataForWeixin.picture,
			"img_width" : "120",
			"img_height" : "120",
			"link" : dataForWeixin.url,
			"desc" : dataForWeixin.desc,
			"title" : dataForWeixin.title
		}, function ( res ) {
		} );
	} );
}, false );