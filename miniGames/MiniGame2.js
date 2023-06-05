let tuboConfig = {
    volume: 0.5,
    loop: false,
    rate: 1,
    mute: false,
}

class MiniGame2 extends Phaser.Scene {
    constructor() {
        super('MiniGame2');
    }

    path1(obj){
        this.target1 = new Phaser.Math.Vector2();
            this.target1.x = 1532
            this.target1.y = 800
        this.physics.moveToObject(obj,this.target1,600);
        this.tweens.add({
            targets: obj,
            alpha: { from: 0.5, to: 0 },
            yoyo: true,
            duration: 600,
            repeat: -1,
        });
    }
    path2(obj){
        this.target2 = new Phaser.Math.Vector2();
            this.target2.x = 429
            this.target2.y = 850
        this.physics.moveToObject(obj,this.target2,300);
        this.tweens.add({
            targets: obj,
            alpha: { from: 0.5, to: 0 },
            yoyo: true,
            duration: 900,
            repeat: -1,
        });
    }
    path3(obj){
        this.target3 = new Phaser.Math.Vector2();
            this.target3.x = 710
            this.target3.y = 1500
        this.physics.moveToObject(obj,this.target3,450);
        this.tweens.add({
            targets: obj,
            alpha: { from: 0.5, to: 0 },
            yoyo: true,
            duration: 1500,
            repeat: -1,
        });
    }
    shake(obj) {
        this.tweens.add({
            targets: obj,
            x: { from: obj.x, to: obj.x + (Math.random() * 5 - 200) },
            y: { from: obj.y, to: obj.y + (Math.random() * 5 - 200) },
            duration: 500,
            yoyo: true,
            repeat: 5,
            onComplete: () => obj.setAlpha(0)
        })
    }
    create(){
        let CleanText = this.add.text(540, 500, "Let's clean out this closet full of ghosts! \n Watch out for the red ones!").setStyle({ fontSize: 50, color: '#fff' })
        this.time.delayedCall(3000, () => {
            this.tweens.add({
                targets: CleanText,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);

        let HUD = this.add.text(590, 900, 'Click on the slugs').setStyle({ fontSize: 50, color: '#fff' })
        this.time.delayedCall(5000, () => {
            this.tweens.add({
                targets: HUD,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);

        this.dmg = this.sound.add("dmg");

        this.catch = this.sound.add("catch");
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.bbg = this.add.image(0,0,'bg')
        this.bbg.displayHeight = this.sys.game.config.height;
        this.bbg.scaleX = this.bbg.scaleY;
        this.bbg.x = this.sys.game.config.width/2;
        this.bbg.y = this.sys.game.config.height/2;

        this.pointcount = this.add.text(0,0)
            .setStyle({ fontSize: 200, color: '#fff' })
        this.points = 0;
        this.health = 4;
        this.sh1 = this.add.image(1800,120,'sh1')
            this.sh1.setScale(0.25)
            this.sh1.setAlpha(1)
        this.sh2 = this.add.image(1800,120,'sh2')
            this.sh2.setScale(0.25)
            this.sh2.setAlpha(0)
        this.sh3 = this.add.image(1800,120,'sh3')
            this.sh3.setScale(0.25)
            this.sh3.setAlpha(0)
        this.sh4 = this.add.image(1800,120,'sh4')
            this.sh4.setScale(0.25)
            this.sh4.setAlpha(0)
        this.coin1 = this.physics.add.image(400,200,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.1)
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
        this.coin2 = this.physics.add.image(1200,0,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.25)
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
        this.coin3 = this.physics.add.image(740,200,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.5)
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
        this.coin4 = this.physics.add.image(1919,1080,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.125)
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
        this.coin5 = this.physics.add.image(2,392,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.4)
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
        this.coin6 = this.physics.add.image(233,1000,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.34)
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
        this.coin7 = this.physics.add.image(700,230,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.6)
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
        this.coin8 = this.physics.add.image(1293,230,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.43)
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
        this.coin9 = this.physics.add.image(700,900,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.32)
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
        this.coin10 = this.physics.add.image(1283,504,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.23)
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
        this.coin11 = this.physics.add.image(1300,430,"coinb")
            .setInteractive({useHandCursor:true})
            .setScale(0.32)
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
        this.coin12 = this.physics.add.image(300,1080,"coinb")
            .setInteractive({useHandCursor:true})
            .setScale(0.25)
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
                this.dmg.play(tuboConfig);
                this.cameras.main.shake(300)
                this.health--;
            })
        this.coin13 = this.physics.add.image(0,900,"coinb")
            .setInteractive({useHandCursor:true})
            .setScale(0.32)
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
                this.dmg.play(tuboConfig);
                this.cameras.main.shake(300)
                this.health--;
            })
        this.coin14 = this.physics.add.image(1239,10,"coinb")
            .setInteractive({useHandCursor:true})
            .setScale(0.195)
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
                this.dmg.play(tuboConfig);
                this.cameras.main.shake(300)
                this.health--;
            })
        this.coin15 = this.physics.add.image(30,230,"coinb")
            .setInteractive({useHandCursor:true})
            .setScale(0.195)
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
                this.dmg.play(tuboConfig);
                this.cameras.main.shake(300)
                this.health--;
            })
        this.path1(this.coin1);
        this.path2(this.coin3);
        this.path3(this.coin2);
        this.path1(this.coin4);
        this.path2(this.coin5);
        this.path3(this.coin6);
        this.path1(this.coin7);
        this.path1(this.coin8);
        this.path2(this.coin9);
        this.path2(this.coin10);
        this.path3(this.coin11);
        this.path2(this.coin12);
        this.path1(this.coin13);
        this.path1(this.coin14);
        this.path3(this.coin15);
        
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
        }
        if (this.health == 0) {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () =>this.scene.start('Fail'));
        }
        if (this.points == 10) {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () =>this.scene.start('npcScreen')); //change fail to new next game
        }
        this.pointcount.setText(this.points);
    }
}

class Fail extends Phaser.Scene {
    constructor() {
        super('Fail');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.add.text(560,560, "You failed!").setFontSize(50);
        this.add.text(660,660, "Nice aim you got there...").setFontSize(20);
        this.add.text(760,760, "Click anywhere to continue.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('npcScreen'));
        });
    }
}
