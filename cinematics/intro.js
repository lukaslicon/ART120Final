class intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    create() {
        let Jlogo = this.add.sprite(1260, 640, 'JLogo').setScale(.5);
        Jlogo.alpha = 0;
        this.fadeInthenOut(Jlogo, 3000, 3000, 0);
        let LLogo = this.add.sprite(660, 640, 'LLogo').setScale(.5);
        LLogo.alpha = 0;
        this.fadeInthenOut(LLogo, 3000, 3000, 0);
        let MLogo = this.add.sprite(960, 340, 'MLogo').setScale(1);
        MLogo.alpha = 0;
        this.fadeInthenOut(MLogo, 3000, 3000, 0);
        let image = this.add.sprite(960, 540, 'introScreen');
        image.alpha = 0;
        this.fadeInthenOut(image, 2000, 2000, 10000);
        let text1 = this.add.text(960, 538, "As the last vibrations of the portal die away, you find yourself standing amidst a crumbled, apocalypse-ravaged world.", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(42); // set origin to center
        this.fadeInthenOut(text1, 4000, 4000, 16000);

        let text2 = this.add.text(960, 538, "The quiet whispers of the mountains echo around you, their familiar yet alien outlines resembling a life once known, now bathed in the uneasy stillness of decay.", { 
            fontFamily: "pmd",
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(42); // set origin to center
        this.fadeInthenOut(text2, 4000, 4000, 26000 );

        let text3 = this.add.text(960, 538, "The scent of salt air intermingles with the charred remnants of a civilization, a stark reminder of a time and place akin to UC Santa Cruz, yet profoundly different...", { 
            fontFamily: "pmd",
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(42); // set origin to center
        this.fadeInthenOut(text3, 4000, 4000, 36000);

        this.time.delayedCall(42000, function() {
            this.cameras.main.fadeOut(3000);
            this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                this.scene.start('title');
            }, this);
        }, [], this);

    }

    fadeInthenOut(target, time1, time2, delay){
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
    fadeIn(target, time, delay){
        this.tweens.add({
            targets: target,
            alpha: 1,
            duration: time,
            delay: delay, // Delay of 4 seconds (4000 milliseconds) before the tween starts
            ease: 'Linear',
        });
    }
    fadeOut(target, time){
        this.tweens.add({
            targets: target,
            alpha: 0,
            duration: time, 
            ease: 'Linear',
        });
    }
}
class title extends Phaser.Scene {
    constructor() {
        super('title');
    }
    create() {
    //fade
    this.fadeInScene();
    this.titleMusic = this.sound.add("titleMusic");
    this.titleMusic.loop = true;
    this.titleMusic.play();
    this.add.image(960, 540, 'titleScreen');
    this.isClicked = false;
    let playButton = this.add.image(960, 740, 'play')
        .setScale(.8)
        .setInteractive()
        .on('pointerover', () => {
            playButton.setTint(0x808080); // 0x808080 is the hex color for gray
        })
        .on('pointerout', () => {
            if (this.isClicked == false) {
                playButton.clearTint();
            }
        })
        .on('pointerdown', () => {
            this.isClicked = true;
            this.titleMusic.stop();
            playButton.removeInteractive();
            this.cameras.main.fadeOut(2000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('npcScreen', {}, { alpha: 0, duration: 1000 });
            })
        });
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