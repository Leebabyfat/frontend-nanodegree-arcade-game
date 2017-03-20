// 这是我们的玩家要躲避的敌人 
var Enemy = function(x,y) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x = x;
    this.y = y;
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
    this.speed = Math.random()*100*2;
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt,x) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += dt * this.speed;
    if(this.x >= 505){
        this.x = -30;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.checkCollisions = function(player){
    if(this.y === player.y){
        console.log("This player is Game over");
    }else{
        console.log("player is safety!!");
    }
};
// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function(x,y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};
  
Player.prototype.update = function(dt){
    
};
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(movement){
    switch(movement){
        case 'left':
        if(this.x>=0){
            this.x -= 101;
        }break;
        case 'right':
        if(this.x<=354){//404
            this.x += 101;
        }break;
        case 'up':
        if(this.y>=50){//55
            this.y -= 83;
        }break;
        case 'down':
        if(this.y<=300){//606
            this.y += 83;
        }break;
    }
};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [];
for(var i=0;i<6;i++){
    var bugs = new Enemy(-30,83*(i%3)+55);
    allEnemies.push(bugs);
};
//[new Enemy(-30,0.7*83)];,new Enemy(-30,1.7*83),new Enemy(-30,2.7*83),
                  //new Enemy(-30,0.8*83),new Enemy(-30,1.8*83),new Enemy(-30,2.6*83)];

var player = new Player(200,300);
// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});