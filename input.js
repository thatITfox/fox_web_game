class inputHandeler {
    constructor(fox){
        document.addEventListener("keydown", event => {
            // alert(event.keyCode)
            switch(event.keyCode){
                case 37:
                    // alert("move left")
                    fox.moveleft()
                    break
                case 39:
                    // alert("move right")
                    fox.moveright()
                    break
            }
        })

        document.addEventListener("keyup", event => {
            // alert(event.keyCode)
            switch(event.keyCode){
                case 37:
                    // alert("move left")
                    if(fox.speed < 0) 
                    fox.stop()
                    break
                case 39:
                    // alert("move right")
                    if(fox.speed > 0)
                    fox.stop()
                    break
            }
        })
    }
}