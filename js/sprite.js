function AnimalSprite(img) {
	//Atributos ****************
	this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;

	//Origem para captura da imagem a ser exibida

	this.srcX = 00;
	this.srcY = 00;
	//Posição no canvas onde a figura será exibida
	this.posX = this.posY = 0;
	this.width = 48;
	this.height = 48;
	this.speed = 2;
	this.img = img;
	this.countAnim = 0;

	//Métodos *****************
	//Desenha a figura
	this.draw = function (ctx) {
		ctx.drawImage(this.img, //Imagem de origem
			//Captura da imagem
			this.srcX, //Origem da captura no eixo X
			this.srcY, //Origem da captura no eixo Y
			this.width, //Largura da imagem que será capturada
			this.height, //Altura da imagem que será capturada
			//Exibição da imagem
			this.posX, //Posição no eixo X onde a imagem será exibida 
			this.posY, //Posição no eixo Y onde a imagem será exibida 
			this.width, //Largura da imagem a ser exibida 
			this.height //Altura da imagem a ser exibida 
		);
		this.animation();
	}

	//Move a figura
	this.move = function () {
		if (this.mvRight) {
			if (this.posX >= 1340) {
				this.posX = -25;
			} else {

				this.posX += this.speed;
			}
			/* 2130 */

			this.srcY = this.height * 2;
		} else
		if (this.mvLeft) {
			if (this.posX <= -25) {
				this.posX = 1340;
			} else {
				this.posX -= this.speed;
			}
			this.srcY = this.height * 1;
		} else
		if (this.mvUp) {
			if (this.posY <= -25) {
				this.posY = 595;
			} else {
				this.posY -= this.speed;

			}


			this.srcY = this.height * 3;
		} else
		if (this.mvDown) {
			if (this.posY >= 595) {
				this.posY = -25;
			} else {
				this.posY += this.speed;

			}


			this.srcY = this.height * 0;
		}
	}
	this.lose = function (humanPosX, humanPosY) {
		if (humanPosX === this.posX && humanPosY === this.posY) {
			this.posY = Math.floor(Math.random() * 595 + 1);

			this.posX = Math.floor(Math.random() * 1340 + 1);
		}
	}

	//Anima a figura
	this.animation = function () {
		if (this.mvLeft || this.mvUp || this.mvRight || this.mvDown) {
			//Caso qualquer seta seja pressionada, o contador de animação é incrementado
			this.countAnim++;

			if (this.countAnim >= 15) {
				this.countAnim = 0;
			}
			this.srcX = Math.floor(this.countAnim / 5) * this.width;
		} else {
			//Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
			this.srcX = 48;
			this.countAnim = 0;
		}
	}
}

function Sprite(img) {
	//Atributos ****************
	this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;

	//Origem para captura da imagem a ser exibida

	this.srcX = 00;
	this.srcY = 00;
	//Posição no canvas onde a figura será exibida
	this.posX = this.posY = 0;
	this.width = 24;
	this.height = 32;
	this.speed = 2;
	this.img = img;
	this.countAnim = 0;

	//Métodos *****************
	//Desenha a figura
	this.draw = function (ctx) {
		ctx.drawImage(this.img, //Imagem de origem
			//Captura da imagem
			this.srcX, //Origem da captura no eixo X
			this.srcY, //Origem da captura no eixo Y
			this.width, //Largura da imagem que será capturada
			this.height, //Altura da imagem que será capturada
			//Exibição da imagem
			this.posX, //Posição no eixo X onde a imagem será exibida 
			this.posY, //Posição no eixo Y onde a imagem será exibida 
			this.width, //Largura da imagem a ser exibida 
			this.height //Altura da imagem a ser exibida 
		);
		this.animation();
	}
	// testing new move function
	//testar movimento
	this.Maping = function (characther, genercPosX, genercPosY) {
		console.log(characther + ":\nX: " + genercPosX + "\nY: " + genercPosY);
	}
	this.lose = function (humanPosX, humanPosY) {
		if (humanPosX === this.posX && humanPosY === this.posY) {
			this.posY = Math.floor(Math.random() * 595 + 1);

			this.posX = Math.floor(Math.random() * 1340 + 1);
		}
	}
	this.newMove = function (lionPosX, lionPosY) {
		// this.Maping("Lion", lionPosX, lionPosY);
		// this.Maping("Human", this.posX, this.posX);
		if (this.posX === (lionPosX + 1) || this.posX === (this.lionPosX - 1)) {
			this.posX = lionPosX
		} else if (this.posY === (lionPosY + 1) || this.posY === (this.lionPosY - 1)) {
			this.posY = lionPosY;
		} else {

			//move Right
			if (lionPosX > this.posX) {

				this.srcY = this.height * 3;
				this.posX += this.speed;
				this.movement(true, false, false, false);


				//move left
			} else if (lionPosX < this.posX) {

				this.srcY = this.height * 2;
				this.posX -= this.speed;
				this.movement(false, true, false, false);

				//move up
			} else if (lionPosY < this.posY) {

				this.posY -= this.speed;
				this.srcY = this.height * 1;
				this.movement(false, false, true, false);

			} else if (lionPosY > this.posY) {

				this.posY += this.speed;
				this.srcY = this.height * 0;
				this.movement(false, false, false, true);

			} else if (math.floor(lionPosX) === math.floor(this.posX) || math.floor(lionPosY) === math.floor(this.posY)) {
				this.movement(false, false, false, false);
			}
		}
	}

	this.movement = function (right, left, up, down) {
		this.mvRight = right;
		this.mvLeft = left;
		this.mvUp = up;
		this.mvDown = down;
	}

	//Anima a figura
	this.animation = function () {
		if (this.mvLeft || this.mvUp || this.mvRight || this.mvDown) {
			//Caso qualquer seta seja pressionada, o contador de animação é incrementado
			this.countAnim++;

			if (this.countAnim >= 40) {
				this.countAnim = 0;
			}
			this.srcX = Math.floor(this.countAnim / 5) * this.width;
		} else {
			//Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
			this.srcX = 0;
			this.countAnim = -0;
		}
	}
}