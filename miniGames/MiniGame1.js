
playerVelocity = 2500;

class MiniGame1 extends MiniGameClass {
    constructor() {
        super('MiniGame1', 'MiniGame1')
        this.shadedRectangle = null; // Reference to the currently shaded rectangle

    }
    onEnter(){
        game1score = 0;
        this.width = this.game.config.width;
        this.height = this.game.config.height;
        this.add.image(this.width/2, this.height/2, 'game1bg');
        this.dmg = this.sound.add("dmg");
        this.catch = this.sound.add("catch");
        //  player rectangle
        this.player = this.physics.add.image(this.width/2, this.height/2, 'app').setScale(window.devicePixelRatio*1.3).setBounce(.6, .6);
        this.player.body.setCollideWorldBounds(true); 
        
        this.timeLeft = gameOptions.initialTime;
        
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


        //launch on click effect
        this.input.on('pointerdown', (pointer) => {
            if (Phaser.Geom.Rectangle.Contains(this.player.getBounds(), pointer.x, pointer.y)) {
                const velocityX = Phaser.Math.Between(-playerVelocity, playerVelocity); // Random X velocity
                const velocityY = Phaser.Math.Between(-playerVelocity, playerVelocity); // Random Y velocity
                this.player.setVelocity(velocityX, velocityY);
            }
        });
//collisions for each group
        //TOP COLLISIONS
        this.groupTop.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle, (player, rectangle) => {
                rectangle.destroy();  // Destroy the rectangle the player collided with
                this.catch.play();
                game1score++;  // Increment the score

                if (game1score >= 12) {
                this.player.body.moves = false;
                //fade
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
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
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
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
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
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
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
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
        let housingText = this.add.text(this.width * .28125, this.height * .46296, 'Quick! Get in 12 housing apps!').setStyle({ fontSize: 50, color: '#fff' })
        this.time.delayedCall(3000, () => {
            this.tweens.add({
                targets: housingText,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);

        //HUD
        let HUD = this.add.text(590, 900, 'Click the player to move.').setStyle({ fontSize: 50, color: '#fff' })
        this.time.delayedCall(5000, () => {
            this.tweens.add({
                targets: HUD,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);
        //score
        this.add.text(100, 122, 'Score: ').setStyle({ fontSize: 50, color: '#fff' })
        this.scoreCount = this.add.text(this.width*.15625 , this.height*.11574).setStyle({ fontSize: 50, color: '#fff' })


        //reset to middle button
        let reset = this.add.image(this.width*.01953125, this.height*.96527778 , 'reset').setInteractive();
        reset.on('pointerdown', () => {
            this.player.x = this.width/2;
            this.player.y = this.height/2;
        });

        // timer bar        
        this.add.image(this.width / 2, this.height / 8, "timerBarBackground"); //background bar
        let timer = this.add.sprite(this.width / 2, this.height / 8, "timerBar");
        this.timerMask = this.add.sprite(timer.x, timer.y, "timerBar");
        this.timerMask.visible = false;
        timer.mask = new Phaser.Display.Masks.BitmapMask(this, this.timerMask);
        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: function(){
                this.timeLeft = this.timeLeft - 1;
                //bar width divided by the number of seconds moves bar
                let stepWidth = this.timerMask.displayWidth / gameOptions.initialTime*1;
                this.timerMask.x -=  stepWidth;
                if(this.timeLeft <= 0){
                    this.dmg.play();
                    this.timeLeft = 60;
                    housing = this.score;
                    this.cameras.main.fadeOut(1000, 0, 0, 0)
                    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                        this.scene.start('Homeless', {}, { alpha: 0, duration: 1000 });
                    })
                }
            },
            callbackScope: this,
            loop: true
        });
        
        // timer seconds
        this.add.text(this.width*.375, this.height*.11296296, 'Time: ').setStyle({ fontSize: 25, color: '#fff' })
        this.secondCount = this.add.text(this.width*.4140625, this.height*.112962).setStyle({ fontSize: 25, color: '#fff' })

        //fade
        this.fadeInScene();

    }
    update(){
        this.scoreCount.setText(game1score);
        this.secondCount.setText(this.timeLeft);
    }
    fadeInScene(){
        this.cameras.main.setAlpha(0);
        this.tweens.add({
            targets: this.cameras.main,
            alpha: 1,
            duration: 1000,
            ease: 'Linear', 
            onComplete: function() {
            console.log("Fade-in complete");
            }
        });
    }
}

class Homeless extends Phaser.Scene {
    constructor() {
        super('Homeless');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.add.text( this.game.config.width*.2916666667, this.game.config.height*.5185185, "You failed!").setFontSize(50);
        this.add.text( this.game.config.width* .34375 , this.game.config.height* .6111111, "You are now homeless...").setFontSize(20);
        this.add.text(this.game.config.width* .39358333 , this.game.config.height* .7037037, "Click anywhere to continue.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('npcScreen'));
        });
    }
}
    