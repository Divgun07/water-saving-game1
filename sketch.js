var play,about,how,next,home
 var gameState="waitstate"
 var dropsGroup,drops,player,playerimg

function preload(){
bgwait=loadImage("images/SplashOut.gif")
dropimg=loadImage("images/waterdrop.png")
bg1=loadImage("images/level1bg.png")
popupimghow=loadImage("images/popup2.png")
popupimgabout=loadImage("images/popup1.png")
playerimg=loadImage("images/character.png")
closetap=loadImage("images/closeTap.png")
runningTap=loadImage("images/runningTap.gif")
cloud1img=loadImage("images/cloud1img.png")
cloud2img=loadImage("images/cloud2img.png")
playerflipimg=loadImage("images/playerflip.png")
}


function setup(){
createCanvas(windowWidth,windowHeight)

play= createImg("images/play2.png")
play.position(23,height-180)
play.size(150,150)

about= createImg("images/info.png")
about.position(30,height/3.7)
about.size(150,130)

how= createImg("images/how.png")
how.position(28,height/2)
how.size(140,130)

next= createImg("images/next.png")
next.position(200,100)
next.size(170,150)

home=createImg("images/home2.png")
home.position(width-110,height-110)
home.size(100,100)
home.hide()

infopop1=createSprite(width/2,height/2)
infopop1.visible=false
infopop1.addImage(popupimgabout)
infopop1.scale=1.65

infopop2=createSprite(width/2,height/2)
infopop2.visible=false
infopop2.addImage(popupimghow)
infopop2.scale=1.65

invisibleground=createSprite(width/2,height-15,width,10)
invisibleground.visible =false

player=createSprite(70,height-80,50,50)
player.visible =false
player.addImage(playerimg)
player.scale=.25
player.debug=true
player.setCollider("circle",(player.width)/2.5,-95,65)

dropsGroup= new Group()
tapsGroup= new Group()
cloudsGroup=new Group()
}

function draw(){

    if(gameState==="waitstate"){
background(bgwait)
home.hide()
play.show()
about.show()
how.show()
next.hide()
infopop1.visible=false
infopop2.visible=false
player.visible =false

}

//play button functioning

if(play.mousePressed(()=>{
    gameState="playLevel1"

}))
    


if(gameState==="playLevel1"){
   background("#6ABAEB")
 
    home.show()
    play.hide()
    about.hide()
    how.hide()
    next.hide()
    Level1()
    player.visible =true
    if(keyDown("RIGHT_ARROW")){
        player.x=player.x+5
        player.setCollider("circle",(player.width)/2.5,-95,65)

        player.addImage(playerimg)
    }
    if(keyDown("LEFT_ARROW")){
        player.x=player.x-5
        //player.setCollider("circle",(player.width)-(player.width)/10,-95,65)

        player.addImage(playerflipimg)

    }



    if(player.x>=width){
        player.x=50
    }
    if(player.x<=0){
        player.x=width-100
    }
                                                                                            
for(i=0;i<dropsGroup.length;i++){
    if(dropsGroup.get(i).isTouching(player))
{
dropsGroup.get(i).visible=false
fill("red")
text("touched",width/2,height/2)
}
}

}

if(about.mousePressed(()=>{
    gameState="aboutstate"
infopop1.visible=true
how.hide()
next.hide()

}))

if(how.mousePressed(()=>{
    gameState="howstate"
infopop2.visible=true
about.hide()
next.hide()
home.show()
play.hide()
how.hide()
}))
    
if(home.mousePressed(()=>{
    gameState="waitstate"


}))
    

if(gameState==="aboutstate"){
   // background(180)
    home.show()
    play.hide()
    about.hide()
    player.visible =false
    
}


drawSprites()

}



// LEVEL 1

function Level1(){

if(frameCount% 60 === 0){
    drops=createSprite(width,20)
    drops.y=Math.round(random(10,40))
    drops.x=Math.round(random(width,20))

    drops.velocityX=-2
    drops.velocityY=Math.round(random(2,6))
    drops.addImage(dropimg)
    drops.scale=.05


dropsGroup.add(drops)

//drops.debug=true
    y2=Math.round(random(height/8,height/3.5))
cloud=createSprite(width,y2)
cloud.x=drops.x
cloud.velocityX=-4

rand=Math.round(random(1,2))
switch(rand){
case 1: cloud.addImage(cloud1img)
break;

case 2:cloud.addImage(cloud2img)
break;

default:break;
}
cloud.scale=.5
cloudsGroup.add(cloud)

    
}

}




// LEVEL 1

function Level2(){

    if(frameCount% 60 === 0){
        drops=createSprite(width,20)
        drops.y=Math.round(random(10,40))
        drops.x=Math.round(random(width,20))
    
        drops.velocityX=-2
        drops.velocityY=Math.round(random(2,6))
        drops.addImage(dropimg)
        drops.scale=.05
    
    
    dropsGroup.add(drops)
    
    }

    if(frameCount%80===0){
        y1=Math.round(random(height/6,height-100))
        tap=createSprite(width,y1)
        tap.velocityX =-3
tap.addImage(runningTap)
tapsGroup.add(tap)
    }
    
    }

