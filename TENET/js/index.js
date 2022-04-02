const gameLauncher= {
    name: 'Tenet',
    description: 'Intento de Tenet',
    authors: ['Miguel Delgado', 'Alejandro Mazas de Lizana', 'Cristian Calderón'],
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: {w:undefined,h:undefined},
    hero1: undefined,
    FPS:60,
    timerIndex:0,
    bullets:[],
    init(canvasID){
        this.canvasNode=document.querySelector(`#${canvasID}`)
        this.ctx=this.canvasNode.getContext('2d')
        this.setDimensions()
        this.createHero()
        
        this.setEventListeners()
        this.startGame()
    },

    setDimensions(){
        this.gameSize={
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h)
    },
    drawRectangle(){
        this.ctx.fillStyle='green'
        this.ctx.fillRect(0,0,this.gameSize.w,this.gameSize.h)
        this.ctx.fillStyle='black'
        this.ctx.fillRect(0, this.gameSize.h - this.gameSize.h/10,this.gameSize.w,this.gameSize.h/10)
    },
    createHero(){
        this.hero1=new Hero(this.ctx,3*this.gameSize.w/4,9*this.gameSize.h/10 -80,30,80, 30,0)
    }
    ,
    
    setEventListeners(){
        document.onkeydown=event=> {
            const { key } = event
            if(this.hero1.personPos.x>=1.5*this.hero1.personSize.w){
            if (key == 'ArrowLeft') {
                    this.hero1.moveLeft()
                }
                }
            if (key == 'ArrowRight') {
                if(this.hero1.personPos.x<=this.gameSize.w-2*this.hero1.personSize.w){
                    this.hero1.moveRight()
                }
                }
            //if (key == 'SpaceBar') this.hero1.jump()
            if (key == 'ArrowDown') this.bullets.forEach(eachBullet => eachBullet.shoot())
            console.log('jdhdhe')
        }
    },
    drawAll(){
        this.drawRectangle()
        this.hero1.drawHero()
        this.bullets.forEach(eachBullet => eachBullet.drawBullet())
        
    },
    clearAll(){
        this.ctx.clearRect(0,0,this.gameSize.w, this.gameSize.h)
    },
    startGame(){
        setInterval(()=>{
            this.clearAll()
            this.drawAll()
            this.timerIndex++
        },1000/this.FPS)
    }
}