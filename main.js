use2D = true;
var size = 10;
var snakeArray=[];
var score = 0;
var food;

function buildSn(){
	var length = 2;
	for(var i=length;i>0;i--){
		snakeArray.push({x:i,y:0});
	}
}
function moveFood(){
	food={x:Math.round(Math.random()*(canvas.width-size)/size),
		y:Math.round(Math.random()*(canvas.height-size)/size)
	};
}
function drawSnake(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	for(var i=0;i<snakeArray.length;i++){
		ctx.fillRect(snakeArray[i].x,snakeArray[i].y,size,size);
	}
}
buildSn();
drawSnake();
