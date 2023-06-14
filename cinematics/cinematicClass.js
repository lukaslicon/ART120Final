class Cinematics extends settings {
    constructor(key, name) {
        super(key);
        this.name = name;
    }
    create(){
        this.titleMusic = this.sound.add("titleMusic");
        this.titleMusic.loop = true;
        this.backMusic = this.sound.add("BGM");
        this.backMusic.loop = true;
        this.backMusic.setVolume(1);
        this.outroMusic = this.sound.add("titleMusic");
        this.outroMusic.loop = true;

        this.s = this.game.config.width * 0.01;

        this.onEnter();
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
            fontSize: 64,
            fill: "#ffffff",
            align: "center",
            wordWrap: { width: textBoxWidth * 0.9 },
        };
        NPCmessage++;
        this.player.body.setVelocity(0);
        const bounceDirection = Phaser.Math.Angle.Between(npc.x, npc.y, player.x, player.y);
        this.tweens.add({
            targets: player,
            duration: 400, 
            ease: 'Power1',
            x: player.x + Math.cos(bounceDirection) * 80, // Adjust these values to control the bounce back distance
            y: player.y + Math.sin(bounceDirection) * 80,
        });

        //first game
        if(NPCmessage == 1){
            this.textBox();
            let storymessage1 = "Did you know, traveler? The housing crisis that began in Santa Cruz, it became contagious, spreading far and wide. The world was unprepared... it was the first domino to fall in our collapse.";
            this.message1 = this.add.text(textBoxX + textBoxWidth * 0.5, textBoxY + textBoxHeight * 0.5, storymessage1, textConfig)
            .setOrigin(0.5)
            .setAlpha(1);
            this.player.body.moves = false;
            this.time.delayedCall(13000, () => {
                this.message1.destroy();
                //fade
                this.cameras.main.fadeOut(3000);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.backMusic.stop();
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
            .setAlpha(1);
            this.player.body.moves = false;
            this.time.delayedCall(13000, () => {
                this.message2.destroy();
                this.cameras.main.fadeOut(3000);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.backMusic.stop();
                    this.scene.start('MiniGame2');
                }, this);
            }, [], this);
        }
        //third game
        if(NPCmessage == 3){
            this.textBox();
            let storymessage3 = "Our once thriving land began to suffocate under toxic waste, the environment decayed, and we scrambled to save what was left. The animals, the fish, their survival hung by a thread. It was a desperate race against the clock.";
            this.message3 = this.add.text(textBoxX + textBoxWidth * 0.5, textBoxY + textBoxHeight * 0.5, storymessage3, textConfig)
            .setOrigin(0.5)
            .setAlpha(1);

            this.player.body.moves = false;
            this.time.delayedCall(13000, () => {
                this.message3.destroy();
                this.cameras.main.fadeOut(3000);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.backMusic.stop();
                    this.scene.start('MiniGame3');
                }, this);
            }, [], this);
        }
        //outro
        if (NPCmessage == 4) {
            this.textBox();
            let storymessage4 = "You've heard my tales, seen the horrors that await. I believe you can make a difference, maybe even prevent this. Here, take this portal back to your world, learn from our future, and change yours.";
            this.message4 = this.add.text(textBoxX + textBoxWidth * 0.5, textBoxY + textBoxHeight * 0.5, storymessage4, textConfig)
            .setOrigin(0.5)
            .setAlpha(1);
            
            this.player.body.moves = false;
            this.time.delayedCall(13000, () => {
                this.message4.destroy();
                this.cameras.main.fadeOut(3000, 0, 0, 0, (camera, progress) => {
                    this.backMusic.stop();
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