//1.22 Прописываем условия столкновение в colide
//1.19 Проверяем условие collider и зачем this на 108
//1.12 проверка столновения в методе collide , отcock в bump,столкновения проверям в render(); если мяч collide с блоком то bump 
//ловим нажатие пробела и запускаем метод релизБол на платформе => запуск джамп и мяч не на платформу
//event.keyCode пробел = 32
//если есть скороть по X и Y то мяч движ => ф-ц move в  update, move in ball


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
    //ловим события нажатия клавиши и изменяем значения dx что запускает функцию движ
    // ловим события отжатия и изменяем значения dx что запускает функцию стоп
    init: function(){
        console.log("init");
        var canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        canvas.width = game.width;
        canvas.height = game.height;
        //т.к ловим через windows контекс this потерятя и запускаем через game
        window.addEventListener('keydown', function(e){
            if(e.keyCode == 37){
                game.platform.dx = -game.platform.vocacity
            }else if(e.keyCode == 39){

                game.platform.dx = game.platform.vocacity
            }else if(e.keyCode == 32){
                game.platform.releaseBall();
            }
        });
        window.addEventListener('keyup', function(e){
            game.platform.stop();
        });
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
    // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    // sx, sy:координаты из которых нач полож на изобр; dx,dx:положение на канвас; 
    // sWidth, sHeight: кординаты из которых будет выразанно изображение
    // dWidth, dHeight: выс и шир изобр
    render : function(){
        // console.log(this.blocks)
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.drawImage(this.sprites.background, 0,0 ,game.width,game.height);

        this.ctx.drawImage(this.sprites.platform, this.platform.x,this.platform.y,100,30);
        this.ctx.drawImage(this.sprites.block, this.blocks.x,this.blocks.y,110,40);
        for(let i in this.blocks){
            this.ctx.drawImage(this.sprites.block, this.blocks[i].x,this.blocks[i].y,110,40);
           }
        this.ctx.drawImage(this.sprites.ball, this.ball.width * this.ball.frame, 0,this.ball.width, this.ball.height,  this.ball.x, this.ball.y,  45, 45);

        },
    update : function(){
        if(this.platform.dx){
            this.platform.move();
        }
        if(this.ball.dx || this.ball.dy){
            this.ball.move()
        }
    this.blocks.forEach(function(element){
            if(this.ball.collide(element)){
                this.ball.bump(element);
            }
        },this);

    },
    run: function(){
            this.update();
        	this.render();
        	window.requestAnimationFrame(function(){
        	game.run();
        })

        }

};
game.ball = {
    width:60 ,
    height:60,
    frame:0,
    x:445,
    y:625,
    dx:0,
    dy:0,
    vocacity:3,
    jump: function(){
        this.dy = -this.vocacity;
        this.dx = -this.vocacity;
    },
    move: function(){
        this.x += this.dx;
        this.y += this.dy;
    },
    //проверка координаты следующего кадра(шоб не накладывались блок и мяч)
    collide:function(){
        let x = this.x + this.dx;
        let y = this.y + this.dy;
        if(x + this.width > element.x &&
           x < element.x + element.width &&
           y + this.height > element.y &&
           y < element.y + element.height
        ){
            return true;
        }
        return false
    },
    bump: function(){
        this.dy *= -1;
    }
};

//если мяч на платформе => то он двигается с ней
game.platform = {
    x:420,
    y:670,
    vocacity:6,
    dx:0,
    ball: game.ball,
    releaseBall: function(){
        if(this.ball){
            this.ball.jump();
            this.ball = false;
        }
    },
    move: function(){
        this.x += this.dx;
        if(game.ball){
            this.ball.x += this.dx;
     }
    },
    stop: function(){
        this.dx = 0;
    }
}





window.addEventListener("lead",function(){
    console.log("window.addEventListener")
    game.start();
});
game.start();

//lol
