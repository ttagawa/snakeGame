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
food.image=Textures.load("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaVNqGdvSMitbimeaVzUnxRmIUjCCc_4Jq-AIAOu_YY0-FkL9b");
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
	this.Sprite,direction="right";
	this.Sprite.image=Textures.load("snaketemp.jpg");	 
	return this.Sprite;
}
snakeBlock.prototype=Object.create(Sprite.prototype);
Array.prototype.addBlocks=function(){
	for(var i =0;i<this.length;i++){
		world.addChild(this[i]);
	}
};
//Array.prototype.move=function(){
	//
//}
snakeArray.addBlocks();
