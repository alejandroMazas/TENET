class Bullet {
    constructor(ctx, bulletPosX,bulletPosY,bulletWidth,bulletHeight,bulletSpeed){
        this.ctx=ctx
        this.bulletPos={x:bulletPosX, y:bulletPosY}
        this.bulletSize={w:bulletWidth,h:bulletHeight}
        this.bulletSpeed=bulletSpeed
    }
    drawBullet() {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.bulletPos.x,this.bulletPos.y,this.bulletSize.w,this.bulletSize.h)
        this.move()
        this.shoot()
    }
    move(){
        this.bulletPos.x+=this.bulletSpeed
    }
    shoot(){
        this.bullets.push(new Bullet(this.ctx, this.personPos.x, this.personPos.y, 5, 2, 30))
    }
    

}