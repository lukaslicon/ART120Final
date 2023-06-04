class outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        let introText = "As you step back through the pulsating portal, the turmoil of the apocalyptic universe fades away, replaced by the hum of your own reality. Relief floods through you, a tide of joy that sends every nerve singing. You're back, back to the place that's yours, that's home, basking in the reassurance of the familiar mountains, the soothing lull of the nearby ocean - you're back at the UC Santa Cruz you know and love.";
        let text = this.add.text(960, 540, introText, { 
            font: "42px Arial", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0); // set origin to center
        this.fadeIn(text, 2000, 0);
        this.fadeOut(text, 2000, 15000)
        
        let image = this.add.sprite(960, 540, 'introScreen');
        image.alpha = 0;
        this.fadeInthenOut(image, 2000, 2000, 17000);


        let END = this.add.text(960, 538, "THE END", { 
            font: "96px Arial", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0); // set origin to center
        this.fadeIn(END, 2000, 21000);


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
