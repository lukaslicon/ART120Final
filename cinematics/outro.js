class outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        let introText = "As the last vibrations of the portal die away, you find yourself standing amidst a crumbled, apocalypse-ravaged world. The quiet whispers of the mountains echo around you, their familiar yet alien outlines resembling a life once known, now bathed in the uneasy stillness of decay. The scent of salt air intermingles with the charred remnants of a civilization, hinting at the nearby ocean, a stark reminder of a time and place akin to UC Santa Cruz, yet profoundly different.";
        let text = this.add.text(960, 540, introText, { 
            font: "42px Arial", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: 800 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0); // set origin to center
        this.fadeIn(text, 2000, 0);
        this.fadeOut(text, 2000, 6000)
        let image = this.add.sprite(960, 540, 'introScreen');
        image.alpha = 0;
        this.fadeInthenOut(image, 2000, 2000, 8000);
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
