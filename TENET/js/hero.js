class Hero{
    constructor(ctx,personPosX,personPosY,personWidth,personHeight,speedX,speedY){
        this.ctx=ctx
        this.personPos={x:personPosX, y:personPosY}
        this.personSize={w:personWidth,h:personHeight}
        this.personSpeed={x:speedX, y:speedY}
        
    }
    drawHero(){
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.personPos.x,this.personPos.y,this.personSize.w,this.personSize.h)
        this.moveRight()
        this.moveLeft()
        
        //this.jump()
        
    }

    moveRight(){
            this.personPos.x+=this.personSpeed.x
    }
    moveLeft(){
            this.personPos.x-=this.personSpeed.x
    }
    /*
    jump(t){
        t=0
        if(t>=0 && t<=5){
           this.personPos.y+=this.person.speedY*t
           this.personSpeed.y+=this.personPos.y+9.8*t*t/2
        } else if(t>5 && t<=10){
           this.personPos.y-=this.person.speedY*t
           this.personSpeed.y-=this.personPos.y+9.8*t*t/2
        }
        
    }
    */
    
}