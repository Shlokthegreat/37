class Player {
  constructor(){
    this.name=null
    this.distance=0
    this.index=null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.distance
    });
  }
  /* arrow function =>
function (data){         (data) =>  
  */
 //function is common for each/every player -CLASSNAME!! Player
  static getPlayerInfo(){
    var playerInfoRef= database.ref('players');
    playerInfoRef.on("value", (data)=>{
      allPlayers = data.val();
    })
  }
}
