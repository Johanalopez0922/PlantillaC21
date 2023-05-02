  



function preload(){
 
}

function setup() {
  
}


function draw() {
  background(255);
  
  if (gameState === "play") {
    
    if(keyDown("")){
  
      //escribir aquí el código para mover el fantasma a la izquierda al presionar la flecha izquierda
    }
    if(keyDown("")){
  
    
      //escribir aquí el código para mover el fantasma a la derecha al presionar la flecha derecha
      
    }
    if(keyDown("")){
  
   
      //escribir aquí el código para mover el fantasma hacia arriba al presionar la flecha hacia arriba
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //escribir una condición para desplazar infinitamente la torre
    
      spawnDoors();

  
      //escribir el código para hacer que climbersGroup colisione con el fantasma y cambiar la velocidad del fantasma  
//escribir aquí el código para hacer que invisibleBlockGroup colisione con el fantasma, destruir el fantasma y cambiar gamestate a end.
  
  drawSprites();
}
  if (gameState === "end"){
   
  }
}

function spawnDoors(){
  //escribir aquí el código para aparecer los obstáculos
  if (frameCount % 240 === 0) {
   
    
    //agregar la función random
    
    

    //cambiar la profundidad del fantasma y de la puerta
    
     

    
    //asignar lifetime a obstacle.lifetime = 300; aquí los obstáculos son la puerta, la barandilla y el bloque invisible


    //agregar cada obstáculo al grupo obstaclesGroup.add(obstacle);aquí los obstáculos son la puerta, la barandilla y el bloque invisible
  }
}

