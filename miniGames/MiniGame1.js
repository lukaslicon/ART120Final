
playerVelocity = 2500;

class MiniGame1 extends MiniGameClass {
    constructor() {
        super('MiniGame1', 'MiniGame1')
        this.shadedRectangle = null; // Reference to the currently shaded rectangle

    }
    onEnter(){
        if (musicMute == true){
            this.backMusic.play();
            this.backMusic.setVolume(0);
         }
         else{
             this.backMusic.play();
         }

        //config
        this.width = this.game.config.width;
        this.height = this.game.config.height;
        //background
        this.add.image(this.width/2, this.height/2, 'game1bg');
        //  player rectangle
        this.player = this.physics.add.image(this.width/2, this.height/2, 'app').setScale(window.devicePixelRatio*1.3).setBounce(.6, .6);
        this.player.body.setCollideWorldBounds(true); 
        //timer

//boundaries/goals
        //top
        this.groupTop = this.physics.add.group({
            key: 'topHouse',
            frameQuantity: 13,
            immovable: true
        });
        //bot
        this.groupBot = this.physics.add.group({
            key: 'bottomHouse',
            frameQuantity: 13,
            immovable: true
        });
        //left
        this.groupLeft = this.physics.add.group({
            key: 'leftHouse',
            frameQuantity: 4,
            immovable: true
        });
        //right
        this.groupRight = this.physics.add.group({
            key: 'rightHouse',
            frameQuantity: 4,
            immovable: true
        });

//boarders
        //bottom
        this.bottomSide = this.physics.add.group({
            key: 'boarder',
            frameQuantity: 14,
            immovable: true

        });
        //top
        this.topSide = this.physics.add.group({
            key: 'boarder',
            frameQuantity: 14,
            immovable: true

        });
        //left
        this.leftSide = this.physics.add.group({
            key: 'side',
            frameQuantity: 8,
            immovable: true

        });
        //right
        this.rightSide = this.physics.add.group({
            key: 'side',
            frameQuantity: 8,
            immovable: true

        });

        //line placements
        const topLine = new Phaser.Geom.Line(this.width * 0.042, 0, this.width * 1.03125, 0);
        const bottomLine = new Phaser.Geom.Line(this.width * 0.042, this.height , this.width * 1.03125, this.height);
        const leftLine = new Phaser.Geom.Line(0, this.height * .037, 0, this.height * 1.05555556);
        const rightLine = new Phaser.Geom.Line(this.width, this.height * .037, this.width, this.height * 1.056);
        //house placements
        const topSquare = new Phaser.Geom.Line(this.width * .078125, 0, this.width * .995, 0);
        const botSquare = new Phaser.Geom.Line(this.width * .078125, this.height, this.width * .995, this.height);
        const leftSquare = new Phaser.Geom.Line(0, this.height * .10185185, 0, this.height * 1.12);
        const rightSquare = new Phaser.Geom.Line(this.width, this.height * .10185185, this.width, this.height * 1.12);

        //place houses
        Phaser.Actions.PlaceOnLine(this.groupTop.getChildren(),topSquare);
        Phaser.Actions.PlaceOnLine(this.groupBot.getChildren(),botSquare);
        Phaser.Actions.PlaceOnLine(this.groupLeft.getChildren(),leftSquare);
        Phaser.Actions.PlaceOnLine(this.groupRight.getChildren(),rightSquare);

        //place lines
        Phaser.Actions.PlaceOnLine(this.topSide.getChildren(),topLine);
        Phaser.Actions.PlaceOnLine(this.bottomSide.getChildren(),bottomLine);   
        Phaser.Actions.PlaceOnLine(this.leftSide.getChildren(),leftLine);  
        Phaser.Actions.PlaceOnLine(this.rightSide.getChildren(),rightLine);           

        //pointer
        this.pointerHand = this.add.image(this.width/2, this.height/2, 'pointer').setScale(2).setOrigin(.5);
        this.tweens.add({
            targets: this.pointerHand,
            alpha: 0,
            duration: 2000,
            ease: 'Linear',
            repeat: -1,
            yoyo: true,
        });

        //launch on click effect
        this.input.on('pointerdown', (pointer) => {
            if (Phaser.Geom.Rectangle.Contains(this.player.getBounds(), pointer.x, pointer.y)) {
                const velocityX = Phaser.Math.Between(-playerVelocity, playerVelocity); // Random X velocity
                const velocityY = Phaser.Math.Between(-playerVelocity, playerVelocity); // Random Y velocity
                this.player.setVelocity(velocityX, velocityY);
                if(game1pointer == false){
                    this.pointerHand.destroy();
                    game1pointer = true;
                }
            }
        });


//collisions for each group
        //TOP COLLISIONS
        this.groupTop.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle, (player, rectangle) => {
                rectangle.destroy();  // Destroy the rectangle the player collided with
                this.catch.play(); //
                game1score++;  // Increment the score
                if (game1score >= 12) {
                this.player.body.moves = false;
                //fade
                game1win = true;
                this.winCondition();
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.backMusic.stop();
                    this.scene.start('npcScreen');
                }, this);
                }

            }, null, this);
        });             

        //BOTTOM COLLISIONS
        this.groupBot.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle, (player, rectangle) => {
                rectangle.destroy();  // Destroy the rectangle the player collided with
                this.catch.play();
                game1score++;  // Increment the score
                if (game1score >= 12) {
                this.player.body.moves = false;
                //fade
                game1win = true;
                this.winCondition();
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.backMusic.stop();
                    this.scene.start('npcScreen');
                }, this);
                }

            }, null, this);
        });             

        //LEFT COLLISIONS
        this.groupLeft.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle, (player, rectangle) => {
                rectangle.destroy();  // Destroy the rectangle the player collided with
                this.catch.play();
                game1score++;  // Increment the score
                if (game1score >= 12) {
                this.player.body.moves = false;
                //fade
                game1win = true;
                this.winCondition();
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.backMusic.stop();
                    this.scene.start('npcScreen');
                }, this);
                }

            }, null, this);
        });             
        
        //RIGHT COLLISIONS
        this.groupRight.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle, (player, rectangle) => {
                rectangle.destroy();  // Destroy the rectangle the player collided with
                this.catch.play();
                game1score++;  // Increment the score
                if (game1score >= 12) {
                this.player.body.moves = false;
                //fade
                game1win = true;
                this.winCondition();
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.backMusic.stop();
                    this.scene.start('npcScreen');
                }, this);;
                }
            }, null, this);
        });             
        this.bottomSide.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle);
        });       
        this.topSide.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle);
        });    
        this.leftSide.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle);
        });       
        this.rightSide.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle);
        });           
        
        //game info
        let housingText = this.add.text(this.width /2, this.height/3, 'Quick! Get in 12 housing apps!')
        .setStyle({ 
            fontFamily: 'pmd',
            fontSize: 64,
            color: '#fff'
        })
        .setOrigin(0.5);
        this.time.delayedCall(3000, () => {
            this.tweens.add({
                targets: housingText,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);


        //reset to middle button
        let reset = this.add.image(this.width*.01953125, this.height*.96527778 , 'reset').setInteractive();
        reset.on('pointerdown', () => {
            this.player.x = this.width/2;
            this.player.y = this.height/2;
        });

        //functions
        this.fadeInScene();
        this.muteButton(this.backMusic);
        this.fullScreenButton();
        this.addScore(100, 122, 'Score: ', 96, this.width*.15625 , this.height*.11574);
        this.addTimerBar(this.width / 2, this.height / 8, this.width*.375, this.height*.105,this.width*.41, this.height*.106, this.player);
    }
    update(){
        this.scoreCount.setText(game1score);
        this.secondCount.setText(this.timeLeft);
    }
}



    