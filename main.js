use2D = true;
var size = 10;
var snakeArray=new Array();
var score = 0;
var length=3;

function buildSn(){
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
/*Array.prototype.move=function(){
	var head=this[0];
	this.pop();
	this.unshift(new snakeBlock(head.x+1,head.y));
}*/
snakeArray.addBlocks();
gInput.addBool(65, "left");
gInput.addBool(68, "right");
gInput.addBool(83, "down");
gInput.addBool(87, "up");
var snake = {
	direction: 68,
	body: snakeArray
};
function moveSnake(){
	var hx=snake.body[0].x;
	var hy=snake.body[0].y;
	if(snake.direction=68){//right
		hx+=10;
	//	var head=snake.body[0];
		//world.removeChild(snake.body.pop());
		//var newB= new snakeBlock(head.x+10,head.y)
		//world.addChild(newB);
		//snake.body.unshift(newB);
		//console.log(snake.body);
	}
	else if(snake.direction=65){//left
		hx-=10;
	}
	else if(snake.direction=83){//down
		hy+=10;
	}
	else if(snake.direction=87){//up
		hy-=10;
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
//snake.body.unshift(new snakeBlock(80,100));
//console.log(snake.body);
/*world.update = function(d){
	if(snake.direction==68){
		var head=snake.body[0];
		world.removeChild(snake.body.pop());
		var newB= new snakeBlock(head.x+10,head.y)
		world.addChild(newB);
		snake.body.unshift(newB);
		console.log(snake.body);
	}
}*/

setInterval(moveSnake,30);
