class Fox {
    constructor(gamewidth, gameheight) {
        this.width = 64
        this.height = 64
        this.lives = 5
        this.position = {
            x: gamewidth / 2 - this.width / 2,
            y: gameheight-this.height - 10
        }

        this.maxspeed = 5
        this.speed = 0
    }

    draw(ctx){
        var img = new Image()
        img.src = "fox.png"
        ctx.drawImage(img, this.position.x, this.position.y)
    }

    update(deltatime){
        if(!deltatime) return
        this.position.x += this.speed

        if(this.position.x < 0) this.position.x = 0

        else if(this.position.x > 736) this.position.x = 736
    }

    moveleft(){
        this.speed = -this.maxspeed
    }

    moveright(){
        this.speed = this.maxspeed
    }

    stop(){
        this.speed = 0
    }
}