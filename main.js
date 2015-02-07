use2D = true;
var size = 10;
var snakeArray=new Array();
var score = 0;
var length=3;
var dir;
canSize=600;

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
food.x=size*Math.round(Math.random()*((canSize-size)/size));
food.y=food.x=size*Math.round(Math.random()*((canSize-size)/size));
food.width=size;
food.height=size;
food.image=Textures.load("images/apple.png");
world.addChild(food);
world.addChild(scoreBox);
function moveFood(){
	food.x=size*Math.round(Math.random()*(canSize-size)/size);
	food.y=size*Math.round(Math.random()*(canSize-size)/size);
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
function checkCollision(hx,hy,snakeArray){
	for(var i=0;i<snakeArray.length;i++){
		if(snakeArray[i].x==hx&&snakeArray[i].y==hy){
			return true;
		}
	}
	return false;
}
snakeArray.addBlocks();
gInput.addBool(65, "left");
gInput.addBool(68, "right");
gInput.addBool(83, "down");
gInput.addBool(87, "up");
function moveSnake(){
	if(gInput.left){
		if(dir!==68){
		dir=65;
		}
	}
	if(gInput.right){
		if(dir!==65){
			dir=68;
		}
	}
	if(gInput.down){
		if(dir!==87){
			dir=83;
		}
	}
	if(gInput.up){
		if(dir!==83){
			dir=87;
		}
	}
	var hx=snakeArray[0].x;
	var hy=snakeArray[0].y;
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
	console.log(hx,hy);
	if(checkCollision(hx,hy,snakeArray)==true||hx<0||hx>600||hy<0||hy>600){
			window.location.reload();ss
	}
	if(hx==food.x&&hy==food.y){
		var end=new snakeBlock(hx/size,hy/size);
		console.log(end);
		score++;
		scoreBox.text="Score: "+score;
		world.addChild(end);
		snakeArray.unshift(end);
		moveFood();
		console.log(snakeArray);
		}else{
		var en=snakeArray.pop();
		en.x=hx;
		en.y=hy;
		snakeArray.unshift(en);
	}
}
setInterval(moveSnake,60);
