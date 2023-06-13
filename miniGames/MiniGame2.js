let tuboConfig = {
    volume: 0.5,
    loop: false,
    rate: 1,
    mute: false,
}

class MiniGame2 extends MiniGameClass {
    constructor() {
        super('MiniGame2', 'MiniGame2');
    }

    onEnter(){
        this.gwh = this.game.config.height;
        this.gww = this.game.config.width;
        let CleanText = this.add.text(this.width * .28125, this.height * .46296, "Let's clean out this closet full of ghosts! \n Watch out for the red ones!").setStyle({ fontSize: 50, color: '#fff' })
        this.time.delayedCall(3000, () => {
            this.tweens.add({
                targets: CleanText,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);
        CleanText.setDepth(1);

        let HUD = this.add.text(590, 900, 'Click on the slugs').setStyle({ fontSize: 50, color: '#fff' })
        this.time.delayedCall(5000, () => {
            this.tweens.add({
                targets: HUD,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);
        HUD.setDepth(1);

        this.dmg = this.sound.add("dmg");
        this.catch = this.sound.add("catch");

        this.cameras.main.fadeIn(1000, 0, 0, 0);

        this.bbg = this.add.image(0,0,'bg')
        this.bbg.displayHeight = this.sys.game.config.height;
        this.bbg.scaleX = this.bbg.scaleY;
        this.bbg.x = this.sys.game.config.width/2;
        this.bbg.y = this.sys.game.config.height/2;

        this.pointcount = this.add.text(0,0)
            .setStyle({ fontSize: 800 / 7, color: '#fff' })
        this.points = 0;
        this.health = 4;
        this.sh1 = this.add.image(this.gww/1.08,this.gwh/10,'sh1')
            this.sh1.setScale(1/5)
            this.sh1.setAlpha(1)
        this.sh2 = this.add.image(this.gww/1.08,this.gwh/10,'sh2')
            this.sh2.setScale(1/5)
            this.sh2.setAlpha(0)
        this.sh3 = this.add.image(this.gww/1.08,this.gwh/10,'sh3')
            this.sh3.setScale(1/5)
            this.sh3.setAlpha(0)
        this.sh4 = this.add.image(this.gww/1.08,this.gwh/10,'sh4')
            this.sh4.setScale(1/5)
            this.sh4.setAlpha(0)
        this.coin1 = this.physics.add.image(this.gww*0.2,this.gwh*0.18,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 10)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin1,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin1.destroy()
                })
                this.catch.play();
                this.points++;
            })
            this.coin2 = this.physics.add.image(this.gww*0.625,0,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 4)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin2,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin2.destroy()
                })
                this.catch.play();
                this.points++;
            })
        this.coin3 = this.physics.add.image(this.gww*0.38,this.gwh*0.185,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 2)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin3,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin3.destroy()
                })
                this.catch.play();
                this.points++;
            })
        this.coin4 = this.physics.add.image(this.gww-2,this.gwh,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 8)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin4,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin4.destroy()
                })
                this.catch.play();
                this.points++;
            })
        this.coin5 = this.physics.add.image(2,this.gwh*0.363,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 2.5)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin5,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin5.destroy()
                })
                this.catch.play();
                this.points++;
            })
        this.coin6 = this.physics.add.image(this.gww*0.12,this.gwh*0.92,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 2.9)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin6,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin6.destroy()
                })
                this.catch.play();
                this.points++;
            })
        this.coin7 = this.physics.add.image(this.gww*0.364,this.gwh*0.25,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 4)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin7,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin7.destroy()
                })
                this.catch.play();
                this.points++;
            })
        this.coin8 = this.physics.add.image(this.gww*0.67,this.gwh*0.21,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 2.65)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin8,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin8.destroy()
                })
                this.catch.play();
                this.points++;
            })
        this.coin9 = this.physics.add.image(this.gww*0.364,this.gwh*0.83,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 3)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin9,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 300,
                    onComplete: () => this.coin9.destroy()
                })
                this.catch.play();
                this.points++;
            })
        this.coin10 = this.physics.add.image(this.gww*0.66,this.gwh*0.46,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 4.8)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin10,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin10.destroy()
                })
                this.catch.play();
                this.points++;
            })
        this.coin11 = this.physics.add.image(this.gww*0.677,this.gwh*0.398,"coinb")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 3)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin11,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin11.destroy()
                })
                this.dmg.play();
                this.cameras.main.shake(300)
                this.health--;
            })
        this.coin12 = this.physics.add.image(this.gww*0.15,this.gwh,"coinb")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 4)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin12,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin12.destroy()
                })
                this.dmg.play();
                this.cameras.main.shake(300)
                this.health--;
            })
        this.coin13 = this.physics.add.image(0,this.gwh*0.833,"coinb")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 3)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin13,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin13.destroy()
                })
                this.dmg.play();
                this.cameras.main.shake(300)
                this.health--;
            })
        this.coin14 = this.physics.add.image(this.gww*0.645,0,"coinb")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 5.1)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin14,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin14.destroy()
                })
                this.dmg.play();
                this.cameras.main.shake(300)
                this.health--;
            })
        this.coin15 = this.physics.add.image(5,this.gwh*0.21,"coinb")
            .setInteractive({useHandCursor:true})
            .setScale(1 / 5.1)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin15,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 750,
                    onComplete: () => this.coin15.destroy()
                })
                this.dmg.play();
                this.cameras.main.shake(300)
                this.health--;
            })
        this.pathFunction1(this.coin1);
        this.pathFunction2(this.coin3);
        this.pathFunction3(this.coin2);
        this.pathFunction1(this.coin4);
        this.pathFunction2(this.coin5);
        this.pathFunction3(this.coin6);
        this.pathFunction1(this.coin7);
        this.pathFunction1(this.coin8);
        this.pathFunction2(this.coin9);
        this.pathFunction2(this.coin10);
        this.pathFunction3(this.coin11);
        this.pathFunction2(this.coin12);
        this.pathFunction1(this.coin13);
        this.pathFunction1(this.coin14);
        this.pathFunction3(this.coin15);
        this.muteBGM();
        this.fullScreenButton();
    }
    update(){
        if (this.health == 3) {
            this.shake(this.sh1);
            this.sh1.destroy();
            this.sh2.setAlpha(1);
        }
        if (this.health == 2) {
            this.shake(this.sh2);
            this.sh2.setAlpha(0);
            this.sh2.destroy();
            this.sh3.setAlpha(1);
        }
        if (this.health == 1) {
            this.shake(this.sh3);
            this.sh3.setAlpha(0);
            this.sh3.destroy();
            this.sh4.setAlpha(1);
        }//
        if (this.health == 0) {
            this.failCondition();
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () =>this.scene.start('npcScreen'));
        }
        if (this.points == 10) {
            game2win = true;
            this.winCondition();
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () =>this.scene.start('npcScreen')); //change fail to new next game
        }
        this.pointcount.setText(this.points);
    }
}

