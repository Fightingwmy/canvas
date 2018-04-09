
// 定义canvas的宽高
var canvasWidth = 740;
var canvasHeight = 360;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

// 新建image对象
var image = new Image();
var radius = 50;
// 定义剪辑区域 r半径
var clippingRegion = {x:-1,y:-1,r:radius};
image.src = "./images/1.jpg";

image.onload = function(){
	initCanvas();
}

function initCanvas(){
	clippingRegion = {x:Math.random()*(canvasWidth-2*radius)+radius,y:Math.random()*(canvasHeight-2*radius)+radius,r:radius};
	draw(image,clippingRegion);
}
//剪辑函数
function setClippingRegion(clippingRegion){
	// 初始位置
	context.beginPath();
	context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI*2,	false);
	context.clip();
}
//此函数会被经常调用，尤其在动画中
function draw(image,clippingRegion){
	// 每次在绘画图形前先清空
	context.clearRect(0,0,canvas.width,canvas.height);
	// 在绘制之前保存一下canvas的当前状态
	context.save();
	// 在绘制图形之前先剪辑区域
	setClippingRegion(clippingRegion);
	// 绘画图形
	context.drawImage(image,0,0);
	//在绘制之后进行状态的恢复
	context.restore();
}
// 点击此函数显示整个清晰图片，此时把绘制图形的半径设大即可
function show(){
	// 设置动画效果实现
	var theAnimation = setInterval(
		function(){
			clippingRegion.r += 20;
			// 2*Math.max(canvas.width,canvas.height)表示取两个值的最大值的两倍
			if(clippingRegion.r>2*Math.max(canvas.width,canvas.height)){
				clearInterval(theAnimation);
			}
			draw(image,clippingRegion);
		},30
	);
	
}
//回到初始状态
function reset(){
	initCanvas();
}

// 阻止移动端图片默认的左右滑动效果
canvas.addEventListener("touchstart",function(e){
	e.preventDefault();
})