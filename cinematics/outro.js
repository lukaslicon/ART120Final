class outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.outroMusic = this.sound.add("titleMusic");
        this.outroMusic.loop = true;
        this.outroMusic.play();


        let text1 = this.add.text(960, 538, "As you step back through the pulsating portal, the turmoil of the apocalyptic universe fades away, replaced by the hum of your own reality.", { 
            font: "42px Arial", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0); // set origin to center
        this.fadeInthenOut(text1, 4000, 4000, 0);

        let text2 = this.add.text(960, 538, " Relief floods through you, a tide of joy that sends every nerve singing. ", { 
            font: "42px Arial", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0); // set origin to center
        this.fadeInthenOut(text2, 4000, 4000, 10000);

        let text3 = this.add.text(960, 538, "You're back to the place that's yours, that's home, basking in the reassurance of the familiar mountains.", { 
            font: "42px Arial", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0); // set origin to center
        this.fadeInthenOut(text3, 4000, 4000, 20000);

        let text4 = this.add.text(960, 538, "You hear the soothing lull of the nearby ocean - you're back at the UC Santa Cruz you know and love!", { 
            font: "42px Arial", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0); // set origin to center
        this.fadeInthenOut(text4, 4000, 4000, 30000);
        
        //gif
        this.anims.create({
            key: 'gifAnimation',
            frames: this.anims.generateFrameNumbers('OutroGif', { start: 0, end: 17 }),
            frameRate: 3,
            delay : 40000
        });
        let image = this.add.sprite(960, 540, 'OutroGif').setAlpha(0);
        this.fadeInthenOut(image, 2000, 1800, 40000);
        image.play('gifAnimation');

        let END = this.add.text(960, 538, "THE END", { 
            font: "96px Arial", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0); // set origin to center
        this.fadeIn(END, 3000, 45800);
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
            delay: delay, 
            ease: 'Linear',
        });
    }
    fadeOut(target, time, delay){
        this.tweens.add({
            targets: target,
            alpha: 0,
            duration: time, 
            delay: delay, 
            ease: 'Linear',
        });
    }
}
