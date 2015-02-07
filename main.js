use2D = true;
var size = 10;
var snakeArray=new Array();
var score = 0;
var length=3;
var dir;

function buildSn(){
	dir=68;
	for(var i=length;i>0;i--){
		var sn=new snakeBlock(i,10);
		snakeArray.push(sn);
	}
}
buildSn();
var scoreBox = new TextBox();
scoreBox.x = 5;
scoreBox.y = 5;
scoreBox.fontSize = 32;
scoreBox.text = "Score: "+score;
var food = new Sprite();
food.x=size*Math.round(Math.random()*(800/size));
food.y=food.x=size*Math.round(Math.random()*(600/size));;
food.width=size;
food.height=size;
food.image=Textures.load("images/apple.png");
world.addChild(food);
world.addChild(scoreBox);
function moveFood(){
	food.x=size*Math.round(Math.random()*(Canvas.width-size)/size);
	food.y=size*Math.round(Math.random()*(canvas.height-size)/size);
}
function snakeBlock(x,y){
	this.Sprite=new Sprite();
	this.Sprite.x=x*size;
	this.Sprite.y=y*size;
	this.Sprite.width=size;
	this.Sprite.height=size;
	this.Sprite.image=Textures.load("images/square.png");	 
	return this.Sprite;
}
snakeBlock.prototype=Object.create(Sprite.prototype);
Array.prototype.addBlocks=function(){
	for(var i =0;i<this.length;i++){
		world.addChild(this[i]);
	}
};
snakeArray.addBlocks();
gInput.addBool(65, "left");
gInput.addBool(68, "right");
gInput.addBool(83, "down");
gInput.addBool(87, "up");
var snake = {
	body: snakeArray
};
function moveSnake(){
	if(gInput.left){
		if(dir!=65||dir!=68){
		dir=65;
		}
	}
	if(gInput.right){
		if(dir!=65||dir!=68){
			dir=68;
		}
	}
	if(gInput.down){
		if(dir!=83||dir!=87){
			dir=83;
		}
	}
	if(gInput.up){
		if(dir!=83||dir!=87){
			dir=87;
		}
	}
	var hx=snake.body[0].x;
	var hy=snake.body[0].y;
	if(dir==68){//right
		hx+=size;
	}
	else if(dir==65){//left
		hx-=size;
	}
	else if(dir==83){//down
		hy+=size;
	}
	else if(dir==87){//up
		hy-=size;
	}
	if(hx==food.x&&hy==food.y){
		var end=new snakeBlock(hx,hy);
		score++;
		moveFood();
	}else{
		var end=snakeArray.pop();
		end.x=hx;
		end.y=hy;
	}
	world.addChild(end);
	snakeArray.unshift(end);
}
setInterval(moveSnake,30);
