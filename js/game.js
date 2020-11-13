class Game{
	constructor(){
		//
	}

	getState(){
		var gameStateRef = database.ref("gameState");
		gameStateRef.on("value",function(data){
			gameState = data.val();
		});
	}

	update(state){
		database.ref('/').update({gameState:state});
	}

	async start(){
		if(gameState == 0){
			player = new Player();
			var playerCountRef = await database.ref("playerCount").once("value");
			if(playerCountRef.exists()){
				playerCount = playerCountRef.val();
				player.getCount();
			}
			
			form = new Form();
			form.display();
		}
	}

	play(){
		form.hide();
		textSize(30);
		text("START",500,350);
		Player.getPlayerInfo();
		if(allPlayers!=undefined){
			var displayPos = 400;
			for(var playerI in allPlayers){
				if(playerI == "player"+player.index){
					fill("red");
				}
				else{
					fill("black");
				}
				displayPos+=20;
				textSize(20);
				text(allPlayers[playerI].name+":"+allPlayers[playerI].distance,300,displayPos);
			}
		}
		if(keyWentDown(UP_ARROW)&&player.index!=null){
			player.distance += 50;
			player.update();
		}
	}
}