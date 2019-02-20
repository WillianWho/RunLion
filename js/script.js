window.onload = function () {
	//Constantes que armazenam o código de cada seta do teclado
	var LEFT = 37,
		UP = 38,
		RIGHT = 39,
		DOWN = 40;


	var cnv = document.querySelector("canvas"); //canvas
	var ctx = cnv.getContext("2d"); //contexto (tipo de animação)
	var lionImage = new Image(); // imagem do personagem
	lionImage.src = "img/img1.png"; // caminho da imagem do personagem
	var humanImage = new Image();
	humanImage.src="img/img.png";



	var scene = new Image(); //imagem de fundo
	scene.src = "img/scene.png";

	window.addEventListener("keydown", keydownHandler, false); //evento na tela que ouve quando uma tecla é pressionada
	window.addEventListener("keyup", keyupHandler, false); // evento na tela que ouve quando uma tecla quado a pressão sobre a tecla pressionada se vai

	var lion = new AnimalSprite(lionImage); // personagem 	
	var human = new Sprite(humanImage);
	var secondHuman = new Sprite(humanImage);
	

	function keydownHandler(e) {
		switch (e.keyCode) {
			case RIGHT:
				lion.mvRight = true;
				lion.mvLeft = false;
				lion.mvUp = false;
				lion.mvDown = false;
				break;
			case LEFT:
				lion.mvRight = false;
				lion.mvLeft = true;
				lion.mvUp = false;
				lion.mvDown = false;
				break;
			case UP:
				lion.mvRight = false;
				lion.mvLeft = false;
				lion.mvUp = true;
				lion.mvDown = false;
				break;
			case DOWN:
				lion.mvRight = false;
				lion.mvLeft = false;
				lion.mvUp = false;
				lion.mvDown = true;
				break;
		}
	}

	function keyupHandler(e) {
		switch (e.keyCode) {
			case RIGHT:
				lion.mvRight = false;
				break;
			case LEFT:
				lion.mvLeft = false;
				break;
			case UP:
				lion.mvUp = false;
				break;
			case DOWN:
				lion.mvDown = false;
				break;
		}
	}

	//Quano a imagem é carregada, o programa é iniciado
	lionImage.onload = function () {
		init();
		posXY();
		//humanTempMove();

		
	}

	function humanTempMove() {
		human.mvRight=true;
		human.mvLeft=false;
		human.mvUp=false;
		human.mvDown=false;
	}
	//posição dos personagens;
	function posXY(){ 
		lion.posX = lion.posY = 150;
		human.posX =1050;
		human.posY = 250;
		secondHuman.posX = 20;
		secondHuman.posY =500;
	}
	function init() {
		loop();
	}

	function update() {
		lion.move();
		lion.lose(human.posX,human.posY);
		lion.lose(secondHuman.posX,secondHuman.posY);

		human.newMove(lion.posX,lion.posY);
		human.lose(secondHuman.posX,secondHuman.posY);

		secondHuman.newMove(lion.posX,lion.posY);
		secondHuman.lose(human.posX,human.posY);
	}

	function draw() {
		ctx.clearRect(0, 0, cnv.width, cnv.height);
		// ctx.drawImage(scene, 0, 0, scene.width, scene.height, 0, 0, scene.width, scene.height);
		desenhar();
		lion.draw(ctx);
		human.draw(ctx);
		secondHuman.draw(ctx);
	}

	function loop() {
		window,
		requestAnimationFrame(loop, cnv);
		update();
		draw();
	}
}