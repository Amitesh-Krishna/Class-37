class Form{
	constructor(){
		this.input = createInput("Name");
		this.button = createButton("Sign up");
		this.greetings = createElement("h4");
	}

	display(){
		var title = createElement("h1");
		title.position(500,100);
		title.html("Whoosh!");
		this.input.position(500,300);
		this.button.position(500,400);

		this.button.mousePressed(()=>{
			this.input.hide();
			this.button.hide();
			player.name = this.input.value();
			playerCount++;
			player.index = playerCount;
			player.update();
			player.updateCount(playerCount);
			this.greetings.html("Hi " + player.name);
			this.greetings.position(500,350);
		});
	}

	hide(){
		this.input.hide();
		this.button.hide();
		this.greetings.hide();
	}
}