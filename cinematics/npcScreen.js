let music = false;
class npcScreen extends Phaser.Scene {
    constructor() {
        super('npcScreen')
    }
    create() {

        this.s = this.game.config.width * 0.01;
        this.gww = this.game.config.width;
        this.gwh = this.game.config.height;

        if(music == false){
        music = true;
        this.backMusic = this.sound.add("BGM");
        this.backMusic.loop = true;
        this.backMusic.setVolume(.25);
        this.backMusic.play();
        }

        this.add.image(this.gww/2, this.gwh/2, 'background');
        this.player = this.physics.add.image(this.gww/2, this.gwh*0.55, 'player').setScale(window.devicePixelRatio*3);
        this.player.body.setCollideWorldBounds(true);

        this.npc = this.physics.add.image(this.gww/2, this.gwh*0.28, 'NPC').setScale(window.devicePixelRatio*3);
        this.npc.body.setImmovable(true); 
        
        //collider
        this.physics.add.collider(this.player, this.npc, this.handlePlayerNPCOverlap, null, this);

        //click to move
        this.input.on('pointerdown', (pointer) => {
            this.physics.moveTo(this.player, pointer.x, pointer.y, 300);
            this.targetX = pointer.x;
            this.targetY = pointer.y;
        });
        
        this.add.image(this.gww/2, this.gwh/1.25, 'fullscreen')
        .setInteractive()
        .on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
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
    //NPC collision and bounce based on NPCmessage count
    handlePlayerNPCOverlap(player, npc) {
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
            this.message1 = this.add.text(this.gww*0.46875, this.gwh*0.7222, "Did you know, traveler? The housing crisis that began in Santa Cruz, it became contagious, spreading far and wide. The world was unprepared... it was the first domino to fall in our collapse.", { 
                fontFamily: "pmd",
                fill: "#ffffff", 
                align: "center",
                wordWrap: {  width: this.game.config.width * .3125 } // wrap words that exceed this width
            }).setOrigin(0.5).setAlpha(1).setFontSize(42); // set origin to center
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
            let storymessage2 = "Then came the ghost slugs, appearing from nowhere, taking over everything. We needed exterminators, but there were too few, too late. It was a strange, slimy apocalypse.";
            this.message2 = this.add.text(this.gww*0.46875, this.gwh*0.7222, storymessage2, { 
                fontFamily: "pmd", 
                fill: "#ffffff", 
                align: "center",
                wordWrap: {  width: this.game.config.width * .3125 } // wrap words that exceed this width
            }).setOrigin(0.5).setAlpha(1).setFontSize(42); // set origin to center

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
            let storymessage3 = "Our once thriving land began to suffocate under toxic waste, the environment decayed, and we scrambled to save what was left. The animals, the fish, their survival hung by a thread. It was a desperate race against the clock."
            this.message3 = this.add.text(this.gww*0.46875, this.gwh*0.7222, storymessage3, { 
                fontFamily: "pmd",  
                fill: "#ffffff", 
                align: "center",
                wordWrap: { width: this.game.config.width * .3125  } // wrap words that exceed this width
            }).setOrigin(0.5).setAlpha(1).setFontSize(42); // set origin to center

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
            this.message4 = this.add.text(this.gww*0.46875, this.gwh*0.7222, storymessage4, { 
                font: "pmd", 
                fill: "#ffffff", 
                align: "center",
                wordWrap: { width: this.game.config.width * .3125 } // wrap words that exceed this width
            }).setOrigin(0.5).setAlpha(1).setFontSize(42); // set origin to center

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
