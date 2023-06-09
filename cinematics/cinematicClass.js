class Cinematics extends Phaser.Scene {
    constructor(key, name) {
        super(key);
        this.name = name;
    }
    create(){
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.s = this.game.config.width * 0.01;

        this.messageBox = this.add.text(this.w * 0.75 + this.s, this.h * 0.33)
        .setStyle({ fontSize: `${2 * this.s}px`, color: '#eea' })
        .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        this.onEnter();
    }
//captioning
    showMessage(message) {
        this.messageBox.setText(message);
        this.tweens.add({
            targets: this.messageBox,
            alpha: { from: 1, to: 0 },
            easing: 'Linear',
            duration: 3000
        });
    }
//fullscreen
    fullScreenButton(){
        this.add.image(this.game.config.width/1.03, this.game.config.height/30, 'fullscreen')
        .setInteractive({useHandCursor: true})
        .on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
                this.showMessage("*Fullscreen disabled*");
            } else {
                this.scale.startFullscreen();
                this.showMessage("*Fullscreen enabled*");
            }
        });
    }
muteButton(){
    this.add.image(this.game.config.width/1.03, this.game.config.height/10, 'fullscreen')
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
}
//object
    fadeInthenOut(target, time1, time2, delay) {
        this.tweens.add({
            targets: target,
            alpha: 1,
            duration: time1,
            delay: delay,
            ease: 'Linear',
            onComplete: () => {
                this.time.delayedCall(2000, () => {
                    this.tweens.add({
                        targets: target,
                        alpha: 0,
                        duration: time2,
                        ease: 'Linear'
                    });
                });
            }
        });
    }
//object
    fadeIn(target, time, delay) {
        this.tweens.add({
            targets: target,
            alpha: 1,
            duration: time,
            delay: delay, // Delay of 4 seconds (4000 milliseconds) before the tween starts
            ease: 'Linear',
        });
    }
//object
    fadeOut(target, time) {
        this.tweens.add({
            targets: target,
            alpha: 0,
            duration: time,
            ease: 'Linear',
        });
    }
//scene
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
//warning
    onEnter() {
        console.warn('This Cinematics did not implement onEnter():', this.constructor.name);
    }
}