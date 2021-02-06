class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

play(){
form.hide();
textSize(30);
text("haha u will lose|loser| ", 120,100)
Player.getPlayerInfo();

if(allPlayers !== undefined){
  var position = 130;
  for(var i in allPlayers){
    textSize(20);
    position+=20;
    if(i === "player"+ player.index)
    fill("yellow")
    else
    fill("black")
    //loser : 100
    text(allPlayers[i].name + " : "+allPlayers[i].distance, 120, position);
  }
}
if(keyDown(UP_ARROW) && player.index !=null){
  player.distance++
  player.update();
}
}
}
