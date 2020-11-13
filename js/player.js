class Player{
	constructor(){
		this.index = null;
		this.distance = 0;
		this.name = null;
	}

	getCount(){
		var ref = database.ref("playerCount");
		ref.on("value",(data)=>{
			playerCount = data.val();
		});
	}
	
	updateCount(count){
		database.ref("/").update({playerCount:count});
	}

	update(){
		var name = this.name;
		var playerIndex = database.ref("players/player" + this.index).set({
			name:name,
			distance:this.distance
		});
	}

	static getPlayerInfo(){
		var pRef = database.ref("players");
		pRef.on("value",(data)=>{allPlayers = data.val()});
	}
}