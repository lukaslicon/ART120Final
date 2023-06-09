class intro extends Cinematics {
    constructor() {
        super('intro', 'intro');
    }
    onEnter() {
        this.s = this.game.config.width * 0.01;

        //logos
        let Jlogo = this.add.sprite(this.game.config.width * .65625, this.game.config.height * .59259259, 'JLogo');
        Jlogo.alpha = 0;
        this.fadeInthenOut(Jlogo, 3000, 3000, 0);
        let LLogo = this.add.sprite(this.game.config.width * .34375, this.game.config.height * .59259259, 'LLogo');
        LLogo.alpha = 0;
        this.fadeInthenOut(LLogo, 3000, 3000, 0);
        let MLogo = this.add.sprite(this.game.config.width * .5, this.game.config.height * .31481481, 'MLogo');
        MLogo.alpha = 0;
        this.fadeInthenOut(MLogo, 3000, 3000, 0);
//FULLSCREEN
        this.fullScreenButton();

        //intro image
        let image = this.add.sprite(this.game.config.width * .5, this.game.config.height * .5, 'introScreen');
        image.alpha = 0;
        this.fadeInthenOut(image, 2000, 2000, 10000);

        const textConfig = {
            fontFamily: "pmd",
            fill: "#ffffff",
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667 } // wrap words that exceed this width
        }

        let text1 = this.add.text(this.game.config.width * .5, this.game.config.height * .5, "As the last vibrations of the portal die away, you find yourself standing amidst a crumbled, apocalypse-ravaged world.", textConfig)
            .setOrigin(0.5)
            .setAlpha(0)
            .setFontSize(64)
            .setInteractive();
        this.fadeInthenOut(text1, 4000, 4000, 16000);

        let text2 = this.add.text(this.game.config.width * .5, this.game.config.height * .5, "The quiet whispers of the mountains echo around you, their familiar yet alien outlines resembling a life once known, now bathed in the uneasy stillness of decay.", textConfig)
            .setOrigin(0.5)
            .setAlpha(0)
            .setFontSize(64)
            .setInteractive();
        this.fadeInthenOut(text2, 4000, 4000, 26000);

        let text3 = this.add.text(this.game.config.width * .5, this.game.config.height * .5, "The scent of salt air intermingles with the charred remnants of a civilization, a stark reminder of a time and place akin to UC Santa Cruz, yet profoundly different...", textConfig)
            .setOrigin(0.5)
            .setAlpha(0)
            .setFontSize(64)
            .setInteractive();
        this.fadeInthenOut(text3, 4000, 4000, 36000);

        this.time.delayedCall(42000, function () {
            this.cameras.main.fadeOut(3000);
            this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                this.scene.start('title');
            }, this);
        }, [], this);
    }
}

class title extends Cinematics {
    constructor() {
        super('title', 'title');
    }
    onEnter() {
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
                playButton.setTint(0x808080);
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

}