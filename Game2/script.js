const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let bg = new Image();
let aster = new Image();
let spaceShip = new Image();


bg.src = 'img/bg.jpeg';
bg.aster = 'img/Black-Panther-PNG-Image.png';
bg.spaceShip = 'img/Batman-Joker-PNG-Clipart.png';


bg.onload = function(){
    game()
}

//Примерный цикл игры
// while(try){
// 	update();
// 	render();
// 	requestAnimationFram(game);
// }

function game(){

    update();
    requestAnimationFrame(game);
}


function update(){
    console.log('111')
    ctx.drawImage(bg,10,10,300,300);
    ctx.drawImage(aster,10,10,300,300)
    ctx.drawImage(spaceShip,100,10,70,70)

}