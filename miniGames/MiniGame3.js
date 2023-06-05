let health = 4;
let points = 0;


class UI extends Phaser.Scene {
    constructor(){
        super({
            key: 'ui'
        })
    }
    create(){
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
        this.pointcount = this.add.text(0,0)
            .setStyle({ fontSize: 200, color: '#fff' })
    }
    update(){
        if (health == 3) {
            this.sh1.destroy();
            this.sh2.setAlpha(1);
        }
        if (health == 2) {
            this.sh2.setAlpha(0);
            this.sh2.destroy();
            this.sh3.setAlpha(1);
        }
        if (health == 1) {
            this.sh3.setAlpha(0);
            this.sh3.destroy();
            this.sh4.setAlpha(1);
        }
        this.pointcount.setText(points);
    }
}

class MiniGame3 extends Phaser.Scene {
    constructor() {
        super('MiniGame3');
    }
    path1(obj){
        this.tweens.add({
            targets: obj,
            y: 800,
            yoyo: true,
            duration: 1000,
            repeat: -1,
        });
    }
    path2(obj){
        this.tweens.add({
            targets: obj,
            y:-700,
            yoyo: true,
            duration: 1000,
            repeat: -1,
        });
    }
    path3(obj){
        this.tweens.add({
            targets: obj,
            y:800,
            yoyo: true,
            duration: 800,
            repeat: -1,
        });
    }
    path4(obj){
        this.tweens.add({
            targets: obj,
            y:30,
            yoyo: true,
            duration: 1000,
            repeat: -1,
        });
    }
    path5(obj){
        this.tweens.add({
            targets: obj,
            x:1900,
            yoyo: true,
            duration: 1000,
            repeat: -1,
        });
    }
    flip1(obj1, obj2) {
        if(this.physics.overlap(obj1, obj2)) {
            obj2.setFlipY(false);
        }
    }
    flip2(obj1, obj2) {
        if(this.physics.overlap(obj1, obj2)) {
            obj2.setFlipY(true);
        }
    }
    flip3(obj1, obj2) {
        if(this.physics.overlap(obj1, obj2)) {
            obj2.setFlip(true);
        }
    }
    flip4(obj1, obj2) {
        if(this.physics.overlap(obj1, obj2)) {
            obj2.setFlip(false);
        }
    }
    hurt(){
        this.cameras.main.shake(300);
        --health;
        this.dmg.play(tuboConfig);
    }
    pointt(obj){
        obj.destroy();
        ++points;
        this.catch.play();
    }
    create(){
        this.scene.launch('ui');

        this.CleanText = this.add.text(540, 500, "Let's clean this water full of toxins! \n Don't hurt the koi fish!").setStyle({ fontSize: 50, color: '#fff' })
        this.time.delayedCall(3000, () => {
            this.tweens.add({
                targets: this.CleanText,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);

        this.HUDD = this.add.text(590, 900, 'Click to move.').setStyle({ fontSize: 50, color: '#fff' })
        this.time.delayedCall(5000, () => {
            this.tweens.add({
                targets: this.HUDD,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);

        //Make camera follow player type thing
        //Tap to dash, pick up objects type minigame
        //Avoid Koi fish
        //Use same points and health system
        this.dmg = this.sound.add("dmg");
        this.catch = this.sound.add("catch");
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        const cursor = this.add.image(0, 0, 'cursor').setVisible(false);

        this.bg1 = this.add.image(0, 0, 'bg1').setOrigin(0);
        this.bg1.displayHeight = this.sys.game.config.height;
        this.bg1.scaleX = this.bg1.scaleY;
        //
        this.cursors = this.input.keyboard.createCursorKeys();
        //
        this.player = this.physics.add.image(100, 540, 'turbo');
        this.player.setCollideWorldBounds(true);
        this.player.setScale(3);

        this.target = new Phaser.Math.Vector2();
        this.input.on('pointerdown', (pointer) =>
        {
            this.target.x = pointer.x;
            this.target.y = pointer.y;

            this.physics.moveToObject(this.player, this.target, 600);
            cursor.copyPosition(this.target).setVisible(true);
        });

        this.flipper1 = this.add.rectangle(1000,30,1920,10)
            .setFillStyle(0xff0000, 0);
        this.flipper2 = this.add.rectangle(1000,800,1920,10)
            .setFillStyle(0xff0000, 0);
        this.flipper3 = this.add.rectangle(1900,800,10,1920)
            .setFillStyle(0xff0000, 0);
        this.flipper4 = this.add.rectangle(20,800,10,1920)
            .setFillStyle(0xff0000, 0);
        this.point1 = this.physics.add.image(590,350,"waste")
            .setScale(3)
            .setCollideWorldBounds(true)
        this.point2 = this.physics.add.image(990,650,"waste")
            .setScale(3)
            .setCollideWorldBounds(true)
        this.point3 = this.physics.add.image(1390,150,"waste")
            .setScale(3)
            .setCollideWorldBounds(true)
        this.point4 = this.physics.add.image(1390,650,"waste")
            .setScale(3)
            .setCollideWorldBounds(true)
        this.point5 = this.physics.add.image(1390,1050,"waste")
            .setScale(3)
            .setCollideWorldBounds(true)
        this.point6 = this.physics.add.image(390,1050,"waste")
            .setScale(3)
            .setCollideWorldBounds(true)
        this.point7 = this.physics.add.image(190,150,"waste")
            .setScale(3)
            .setCollideWorldBounds(true)
        this.point8 = this.physics.add.image(1800,450,"waste")
            .setScale(3)
            .setCollideWorldBounds(true)
        this.coin1 = this.physics.add.image(400,0,"obs")
            .setImmovable(true)
            .setScale(2)
            .setCollideWorldBounds(true)
        this.coin2 = this.physics.add.image(800,800,"obs")
            .setScale(2)
            .setImmovable(true)
            .setCollideWorldBounds(true)
        this.coin3 = this.physics.add.image(1200,0,"obs")
            .setScale(2)
            .setImmovable(true)
            .setCollideWorldBounds(true)
        this.coin4 = this.physics.add.image(1600,800,"obs")
            .setScale(2)
            .setImmovable(true)
            .setCollideWorldBounds(true)
        this.coin5 = this.physics.add.image(0,800,"obs3")
            .setScale(3)
            .setImmovable(true)
            .setCollideWorldBounds(true)
        this.physics.add.existing(this.flipper1);
        this.physics.add.existing(this.flipper2);
        this.physics.add.existing(this.flipper3);
        this.physics.add.existing(this.flipper4);
        this.physics.add.existing(this.coin1);
        this.physics.add.existing(this.coin2);
        this.physics.add.existing(this.coin3);
        this.physics.add.existing(this.coin4);
        this.physics.add.existing(this.coin5);
        this.physics.add.existing(this.player);
        this.path1(this.coin1);
        this.path2(this.coin2);
        this.path3(this.coin3);
        this.path4(this.coin4);
        this.path5(this.coin5);
    }

    update(){
        this.flip1(this.flipper1, this.coin1);
        this.flip2(this.flipper2, this.coin1);
        this.flip1(this.flipper1, this.coin2);
        this.flip2(this.flipper2, this.coin2);
        this.flip1(this.flipper1, this.coin3);
        this.flip2(this.flipper2, this.coin3);
        this.flip1(this.flipper1, this.coin4);
        this.flip2(this.flipper2, this.coin4);
        this.flip3(this.flipper3, this.coin5);
        this.flip4(this.flipper4, this.coin5);
        if(this.physics.collide(this.player, this.point1)) {
            this.pointt(this.point1);
        }
        if(this.physics.collide(this.player, this.point2)) {
            this.pointt(this.point2);
        }
        if(this.physics.collide(this.player, this.point3)) {
            this.pointt(this.point3);
        }
        if(this.physics.collide(this.player, this.point4)) {
            this.pointt(this.point4);
        }
        if(this.physics.collide(this.player, this.point5)) {
            this.pointt(this.point5);
        }
        if(this.physics.collide(this.player, this.point6)) {
            this.pointt(this.point6);
        }
        if(this.physics.collide(this.player, this.point7)) {
            this.pointt(this.point7);
        }
        if(this.physics.collide(this.player, this.point8)) {
            this.pointt(this.point8);
        }

        if(this.physics.collide(this.player, this.coin1)) {
            this.hurt();
            this.player.body.reset(100,540);
        }
        if(this.physics.collide(this.player, this.coin2)) {
            this.hurt();
            this.player.body.reset(100,540);
        }
        if(this.physics.collide(this.player, this.coin3)) {
            this.hurt();
            this.player.body.reset(100,540);
        }
        if(this.physics.collide(this.player, this.coin4)) {
            this.hurt();
            this.player.body.reset(100,540);
        }
        if(this.physics.collide(this.player, this.coin5)) {
            this.hurt();
            this.player.body.reset(100,540);
        }

        
        
        const distance = Phaser.Math.Distance.BetweenPoints(this.player, this.target);

        if (this.player.body.speed > 0)
        {
            if (distance < 30)
            {
                this.player.body.reset(this.target.x, this.target.y);
            }
        }
        if (health == 0) {
            this.cameras.main.fade(1000, 0,0,0);
            this.scene.stop('ui');
            this.time.delayedCall(1000, () =>this.scene.start('Fail2'));
        }
        if (points == 8) {
            this.cameras.main.fade(1000, 0,0,0);
            this.scene.stop('ui');
            this.time.delayedCall(1000, () =>this.scene.start('npcScreen')); //change fail to new next game
        }
    }
}

class Fail2 extends Phaser.Scene {
    constructor() {
        super('Fail2');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.add.text(560, 560, "You failed!").setFontSize(50).setOrigin(0.5);
        this.add.text(660,660, "The koi fish were infected...").setFontSize(20);
        this.add.text(760,760, "Click anywhere to continue.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('npcScreen'));
        });
    }
}