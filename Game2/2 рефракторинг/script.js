// Не запускается init 

//start - запуск всех внутр функций, init - канвас и ктх , load : загрузка изобрж
//названия спрайтов и их переменных должны совпадать для красивого кода
var game = {
    numb:0,
    width:1000,
    height:700,
    ctx:undefined,
    ball:undefined,
    platform : undefined,
    cols:8,
    rows:3  ,
    blocks:[],
	sprites:{  
		background : undefined,
        ball : undefined,
        platform : undefined,
        block : undefined,
        blocks:undefined

	},

    init: function(){
        console.log("init");
        var canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        canvas.width = game.width;
        canvas.height = game.height;
        window.addEventListener('keydown', function(e){
            if(e.keyCode == 37){
                game.platform.dx = -game.platform.vocacity
            }else if(e.keyCode == 39){
                game.platform.dx = game.platform.vocacity
            }
        })
    },
    //10 из 10
    load: function(){
        console.log("load");
        for(let key in this.sprites){
            this.sprites[key] = new Image();
            this.sprites[key].src = 'img/' + key + ".png"
        }
    },
    create: function(){
        console.log('create')
        for(let row = 0; row < this.rows; row++){
            for(let col = 0; col < this.cols; col++){
                this.blocks.push({
                    x:120 * col + 20,
                    y:50 * row,
                    height:64,
                    width:32,
            });
         }
        }

        
    },
    start:function(){
    console.log("start");
    this.init();
    this.load();
    this.create();
    this.run();
    
    },
    render : function(){
        // console.log(this.blocks)
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.drawImage(this.sprites.background, 0,0 ,game.width,game.height);
        this.ctx.drawImage(this.sprites.ball, this.ball.width * this.ball.frame, 0,this.ball.width, this.ball.height,  this.ball.x, this.ball.y,  this.ball.width, this.ball.height);
        this.ctx.drawImage(this.sprites.platform, this.platform.x,this.platform.y,100,30);
        this.ctx.drawImage(this.sprites.block, this.blocks.x,this.blocks.y,110,40);
        for(let i in this.blocks){
            
            this.ctx.drawImage(this.sprites.block, this.blocks[i].x,this.blocks[i].y,110,40);

        }

        },
    run: function(){
            if(this.platform.dx){
                this.platform.move();
            }
        	this.render();
        	window.requestAnimationFrame(function(){
        	game.run();
        })

        }

};

game.platform = {
    x:550,
    y:670,
    vocacity:6,
    dx:0
}

game.ball = {
    width:60 ,
    height:60,
    frame:0,
    x:300,
    y:300
}



window.addEventListener("lead",function(){
    console.log("window.addEventListener")
    game.start();
});
game.start();

//lol
