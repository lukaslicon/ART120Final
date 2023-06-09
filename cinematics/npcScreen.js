let musicOnStart = false;
let musicMute = false;
class npcScreen extends Phaser.Scene {
    constructor() {
        super('npcScreen')
    }
    create() {

        this.s = this.game.config.width * 0.01;
        this.gww = this.game.config.width;
        this.gwh = this.game.config.height;

        if(musicOnStart == false){ //this is for starting on each scene... do not change this
            musicOnStart = true; //now music is playing on a loop
            this.backMusic = this.sound.add("BGM");
            this.backMusic.loop = true;
            this.backMusic.setVolume(.25);
            this.backMusic.play();
        }

        //captioning system
        this.messageBox = this.add.text(this.gww * 0.75 + this.s, this.gwh * 0.33)
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#eea' })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        this.add.image(this.gww/2, this.gwh/2, 'background');
        this.player = this.physics.add.image(this.gww/2, this.gwh*0.55, 'player').setScale(window.devicePixelRatio*3);
        this.player.body.setCollideWorldBounds(true);

        this.npc = this.physics.add.image(this.gww/2, this.gwh*0.28, 'NPC').setScale(window.devicePixelRatio*3);
        this.npc.body.setImmovable(true); 
        
        //collider
        this.physics.add.collider(this.player, this.npc, this.handlePlayerNPCOverlap, null, this);

        this.isMoving = false; // Add this line in your create() method

        // Inside the 'pointerdown' event
        this.input.on('pointerdown', (pointer) => {
            if (!this.fullscreenButton.getBounds().contains(pointer.x, pointer.y) && !this.musicButton.getBounds().contains(pointer.x, pointer.y)) {
                this.physics.moveTo(this.player, pointer.x, pointer.y, 300);
                this.targetX = pointer.x;
                this.targetY = pointer.y;
            }
        });

        this.fullScreenButton();
        this.musicButton = this.add.image(this.gww/1.03, this.gwh/10, 'fullscreen')
        .setInteractive({useHandCursor: true})
        .on('pointerdown', () => {
            if(musicMute == false){
                musicMute = true;
                this.backMusic.stop();
            }
            else{
                musicMute = false;
                this.backMusic.play();
            }
        });

        //fade
        this.fadeInScene();
    }

    update() {
        if (Phaser.Math.Distance.Between(this.player.x, this.player.y, this.targetX, this.targetY) < 10) {
            this.player.body.setVelocity(0);
        }
    }

    fadeInScene() {
        this.cameras.main.setAlpha(0);
        this.tweens.add({
          targets: this.cameras.main,
          alpha: 1,
          duration: 1000,
          ease: 'Linear',
          onComplete: function () {
            console.log("Fade-in complete");
          }
        });
      }
    textBox(){
        const textBox = this.add.graphics();
        const textBoxWidth = this.gww * 0.75;
        const textBoxHeight = this.gwh * 0.25;
        const textBoxX = this.gww * 0.5 - textBoxWidth * 0.5;
        const textBoxY = this.gwh * 0.85 - textBoxHeight * 0.5;

        textBox.fillStyle(0x000000, 0.5);
        textBox.fillRect(textBoxX, textBoxY, textBoxWidth, textBoxHeight);
        
    }
    //NPC collision and bounce based on NPCmessage count
    handlePlayerNPCOverlap(player, npc) {
        const textBoxWidth = this.gww * 0.75;
        const textBoxHeight = this.gwh * 0.25;
        const textBoxX = this.gww * 0.5 - textBoxWidth * 0.5;
        const textBoxY = this.gwh * 0.85 - textBoxHeight * 0.5;

        const textConfig = {
            fontFamily: "pmd",
            fill: "#ffffff",
            align: "center",
            wordWrap: { width: textBoxWidth * 0.9 },
        };

        NPCmessage++;
        this.player.body.setVelocity(0);
        const bounceDirection = Phaser.Math.Angle.Between(npc.x, npc.y, player.x, player.y);
        this.tweens.add({
            targets: player,
            duration: 400, // The duration of the bounce back in milliseconds
            ease: 'Power1',
            x: player.x + Math.cos(bounceDirection) * 80, // Adjust these values to control the bounce back distance
            y: player.y + Math.sin(bounceDirection) * 80,
        });

        //first game
        if(NPCmessage == 1){
            this.textBox();
            let storymessage1 = "Did you know, traveler? The housing crisis that began in Santa Cruz, it became contagious, spreading far and wide. The world was unprepared... it was the first domino to fall in our collapse."
            this.message1 = this.add.text(textBoxX + textBoxWidth * 0.5, textBoxY + textBoxHeight * 0.5, storymessage1, textConfig)
            .setOrigin(0.5)
            .setAlpha(1)
            .setFontSize(64);

            this.player.body.moves = false;
            this.time.delayedCall(13000, () => {
                this.message1.destroy();
                //fade
                this.cameras.main.fadeOut(3000);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('MiniGame1');
                }, this);
            }, [], this);
        }

        //second game
        if(NPCmessage == 2){
            this.textBox();
            let storymessage2 = "Then came the ghost slugs, appearing from nowhere, taking over everything. We needed exterminators, but there were too few, too late. It was a strange, slimy apocalypse.";
            this.message2 = this.add.text(textBoxX + textBoxWidth * 0.5, textBoxY + textBoxHeight * 0.5, storymessage2, textConfig)
            .setOrigin(0.5)
            .setAlpha(1)
            .setFontSize(64);

            this.player.body.moves = false;
            this.time.delayedCall(13000, () => {
                this.message2.destroy();
                this.cameras.main.fadeOut(3000);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('MiniGame2');
                }, this);
            }, [], this);
        }

        //third game
        if(NPCmessage == 3){
            this.textBox();
            let storymessage3 = "Our once thriving land began to suffocate under toxic waste, the environment decayed, and we scrambled to save what was left. The animals, the fish, their survival hung by a thread. It was a desperate race against the clock."
            this.message3 = this.add.text(textBoxX + textBoxWidth * 0.5, textBoxY + textBoxHeight * 0.5, storymessage3, textConfig)
            .setOrigin(0.5)
            .setAlpha(1)
            .setFontSize(64);

            this.player.body.moves = false;
            this.time.delayedCall(13000, () => {
                this.message3.destroy();
                this.cameras.main.fadeOut(3000);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('MiniGame3');
                }, this);
            }, [], this);
        }

        //outro
        if (NPCmessage == 4) {
            let storymessage4 = "You've heard my tales, seen the horrors that await. I believe you can make a difference, maybe even prevent this. Here, take this portal back to your world, learn from our future, and change yours.";
            this.message4 = this.add.text(textBoxX + textBoxWidth * 0.5, textBoxY + textBoxHeight * 0.5, storymessage4, textConfig)
            .setOrigin(0.5)
            .setAlpha(1)
            .setFontSize(64);

            this.player.body.moves = false;
            this.time.delayedCall(13000, () => {
                this.message4.destroy();
                this.backMusic.stop();
                this.cameras.main.fadeOut(3000, 0, 0, 0, (camera, progress) => {
                    if (progress === 1) {
                        this.scene.start('outro', {}, { alpha: 0, duration: 1000 });
                    }
                });
            }, [], this);
        }
    }
}
