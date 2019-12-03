// Не запускается init 

//start - запуск всех внутр функций, init - канвас и ктх , load : загрузка изобрж
//
var game = {
    width:1000,
    height:700,
    ctx:undefined,
	sprites:{
		background : undefined,
        ball : undefined,
        platform : undefined,
        platformTop : undefined
	},

    init: function(){
        console.log("init");
        var canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        canvas.width = game.width;
        canvas.height = game.height;

    },
    load: function(){
        console.log("load");
        this.sprites.background = new Image();
        this.sprites.background.src = 'img/bg.png';
        
        this.sprites.ball = new Image();
        this.sprites.ball.src = 'img/ball.png';
   
        this.sprites.platform = new Image();
        this.sprites.platform.src = 'img/plat.png';
        
        this.sprites.platformTop = new Image();
        this.sprites.platformTop.src = 'img/platTop.png';
    },
    start: function(){
    console.log("start");
    this.init();
    this.load();
    this.run();
    },
    render : function(){
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.drawImage(this.sprites.background, 0,0 ,game.width,game.height);
        this.ctx.drawImage(this.sprites.ball, this.ball.x,this.ball.y,60,60);
        this.ctx.drawImage(this.sprites.platform, this.platform.x,this.platform.y,100,30);
        this.ctx.drawImage(this.sprites.platformTop, 40,0,110,40);
        },
    run: function(){
        	this.render();
        	window.requestAnimationFrame(function(){
        		game.run();
        })

        }

}

game.platform = {
    x:550,
    y:670
}

game.ball = {
    x:300,
    y:300
}



window.addEventListener("lead",function(){
    console.log("window.addEventListener")
    game.start();
});
game.start();

//lol
