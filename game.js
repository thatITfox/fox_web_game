var canvas = document.getElementById("game_screen")
var ctx = canvas.getContext('2d')

var points = 0

function iscolision(berryX, berryY, foxX, foxY){
    distance = Math.sqrt(Math.pow(berryX-foxX, 2) + Math.pow(berryY-foxY, 2))
    if(distance <= 64){
        return true
    } else return false
    
}

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

let fox = new Fox(GAME_WIDTH, GAME_HEIGHT)
let Blueberry = new blueberry(GAME_WIDTH, GAME_HEIGHT)
new inputHandeler(fox)

let Lasttime = 0

function reset() {
    fox.lives = 5
    points = 0
}


function GameLoop(timestamp){
    let deltatime = timestamp - Lasttime
    Lasttime = timestamp
    ctx.clearRect(0, 0, 800, 600)
    var background = new Image()
    background.src = "the_first_background_for_game.png"
    ctx.drawImage(background, 0, 0)
    Blueberry.update(deltatime)
    Blueberry.draw(ctx)
    fox.update(deltatime)
    fox.draw(ctx)

    if(iscolision(Blueberry.position.x, Blueberry.position.y, fox.position.x, fox.position.y)){
        points += 1
        document.getElementById("score").innerText = points
        Blueberry.position.y = 0
        Blueberry.position.x = Math.floor(Math.random() * 737)
    }

    if(Blueberry.position.y > 536) {
        fox.lives -= 1
        document.getElementById("lives").innerText = fox.lives
        Blueberry.position.y = 0
        Blueberry.position.x = Math.floor(Math.random() * 737)
    }

    // console.log(points)
    if(fox.lives > 0) {
        requestAnimationFrame(GameLoop)
    }else {
        alert(`your score: ${points}`)
        reset()
        document.getElementById("lives").innerText = fox.lives
        document.getElementById("score").innerText = points
        requestAnimationFrame(GameLoop)
    }
}
GameLoop()