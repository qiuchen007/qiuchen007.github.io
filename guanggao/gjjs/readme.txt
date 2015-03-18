调整页面切换时的缩放、3d效果  gjqtLib.js
function move( targetPos )中
Z.css( curPage, "transform", [scale( 1 ),translate3d( 0, 0, 0 )].join( " " ) );


zScrollPanel.js
arg = defaultArg( arg, {
				rollbackDuration : 1, // 回滚持续时间
				inertial : 20, // 惯性,用来决定惯性滚动的速度
				topBlank : -1, // 顶部的留白,决定可以被拖下来多少,-1表示任意留白
				bottomBlank : -1, // 底部的留白
				scrollType : ScrollType.vertical // 滚动类型,垂直或者水平

// region 导出
	window.Z =