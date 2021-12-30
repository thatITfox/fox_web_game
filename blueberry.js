class blueberry {
    constructor(gamewidth, gameheight) {
        this.width = 64
        this.height = 64
        this.position = {
            x: Math.floor(Math.random() * 801),
            y: 10
        }

        this.maxspeed = 5
        this.speed = 0
    }

    draw(ctx){
        var img = new Image()
        img.src = "blueberry.png"
        ctx.drawImage(img, this.position.x, this.position.y)
        // ctx.drawImage(img, this.position.x, this.position.y)
    }

    update(deltatime){
        if(!deltatime) return
        this.position.y += this.maxspeed
    }
}