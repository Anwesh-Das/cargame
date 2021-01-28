class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("Value",function(data){
        playerCount = data.val();
        });
    }

    updateCount(Count){
        database.ref("/").update({
        playerCount : Count
        });
    }

    update(Name){
        var playerIndex = "Player" + playerCount
        database.ref(playerIndex).set({
            Name : Name
        });
    }
}