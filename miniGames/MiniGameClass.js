class MiniGameClass extends settings {
    constructor(key, name) {
        super(key);
        this.name = name;
    }
    create() {
        //sound
        this.dmg = this.sound.add("dmg");
        this.catch = this.sound.add("catch");
        this.titleMusic = this.sound.add("titleMusic");
        this.titleMusic.loop = true;
        this.backMusic = this.sound.add("BGM");
        this.backMusic.loop = true;
        this.backMusic.setVolume(1);

        this.s = this.game.config.width * 0.01;
        this.messageBox = this.add.text(this.game.config.width * .455, this.game.config.height * 0.68)
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#eea' })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        this.onEnter();
    }

    winCondition() {
        this.add.text(this.game.config.width / 2, this.game.config.height / 2, 'Success!')
            .setOrigin(.5)
            .setStyle(({
                color: '#0f0',
                fontFamily: "pmd",
                fontSize: 128,
                align: "center",
            }));
        // upon winning, play a procedurally generated chord
        const synth = new Tone.PolySynth().toDestination();
        synth.volume.value = -15;
        synth.triggerAttackRelease(["C#4", "F#4", "A#4", "C#5"], ["1.75", "1.25", "0.75", "0.25"]);
    }

    failCondition() {
        this.add.text(this.game.config.width / 2, this.game.config.height / 2, 'You Failed!')
            .setOrigin(.5)
            .setStyle(({
                color: '#f00',
                fontFamily: "pmd",
                fontSize: 128,
                align: "center",
            }));
    }
    //object
    fadeInthenOutObj(target, time1, time2, delay) {
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
    fadeInObj(target, time, delay) {
        this.tweens.add({
            targets: target,
            alpha: 1,
            duration: time,
            delay: delay, // Delay of 4 seconds (4000 milliseconds) before the tween starts
            ease: 'Linear',
        });
    }
    //object
    fadeOutObj(target, time) {
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
    //adds score counter to game (update with this.scoreCount in update)
    addScore(textX, textY, text, fontSize, scoreX, scoreY) {
        //score
        this.add.text(textX, textY, text).setStyle({
            fontFamily: "pmd",
            fontSize: fontSize,
            fill: "#ffffff",
            align: "center",
        });
        this.scoreCount = this.add.text(scoreX, scoreY).setStyle({
            fontFamily: "pmd",
            fontSize: fontSize,
            fill: "#ffffff",
            align: "center",
        });
    }

    addTimerBar(barX, barY, timeX, timeY, secondsX, secondsY, player) {
        this.timeLeft = gameOptions.initialTime;
        // timer bar        
        this.add.image(barX, barY, "timerBarBackground"); //background bar
        let timer = this.add.sprite(barX, barY, "timerBar");
        this.timerMask = this.add.sprite(timer.x, timer.y, "timerBar");
        this.timerMask.visible = false;
        timer.mask = new Phaser.Display.Masks.BitmapMask(this, this.timerMask);
        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: function () {
                this.timeLeft = this.timeLeft - 1;
                //bar width divided by the number of seconds moves bar
                let stepWidth = this.timerMask.displayWidth / gameOptions.initialTime * 1;
                this.timerMask.x -= stepWidth;
                if (this.timeLeft <= 0) {
                    this.player.body.moves = false;
                    this.dmg.play();
                    housing = this.score;
                    this.failCondition();
                    this.cameras.main.fadeOut(2000, 0, 0, 0)
                    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                        this.scene.start('npcScreen', {}, { alpha: 0, duration: 2000 });
                    })
                    this.gameTimer.remove(); // This line stops the timer.
                }
            },
            callbackScope: this,
            loop: true
        });

        // timer seconds
        this.add.text(timeX, timeY, 'Time: ').setStyle(({
            fontFamily: "pmd",
            fontSize: 36,
            fill: "#ffffff",
            align: "center",
        }))
        this.secondCount = this.add.text(secondsX, secondsY).setStyle(({
            fontFamily: "pmd",
            fontSize: 36,
            fill: "#ffffff",
            align: "center",
        }))
    }

    pathFunction1(obj) {
        this.target1 = new Phaser.Math.Vector2();
        this.target1.x = this.gww * 0.8
        this.target1.y = this.gwh * 0.74
        this.physics.moveToObject(obj, this.target1, 600);
        this.tweens.add({
            targets: obj,
            alpha: { from: 0.5, to: 0 },
            yoyo: true,
            duration: 600,
            repeat: -1,
        });
    }

    pathFunction2(obj) {
        this.target2 = new Phaser.Math.Vector2();
        this.target2.x = this.gww * 0.22
        this.target2.y = this.gwh * 0.787
        this.physics.moveToObject(obj, this.target2, 300);
        this.tweens.add({
            targets: obj,
            alpha: { from: 0.5, to: 0 },
            yoyo: true,
            duration: 900,
            repeat: -1,
        });
    }

    pathFunction3(obj) {
        this.target3 = new Phaser.Math.Vector2();
        this.target3.x = this.gww * 0.369
        this.target3.y = this.gwh * 1.1
        this.physics.moveToObject(obj, this.target3, 450);
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

    path1(obj) {
        this.tweens.add({
            targets: obj,
            y: 800,
            yoyo: true,
            duration: 1000,
            repeat: -1,
        });
    }
    path2(obj) {
        this.tweens.add({
            targets: obj,
            y: -700,
            yoyo: true,
            duration: 1000,
            repeat: -1,
        });
    }
    path3(obj) {
        this.tweens.add({
            targets: obj,
            y: 800,
            yoyo: true,
            duration: 800,
            repeat: -1,
        });
    }
    path4(obj) {
        this.tweens.add({
            targets: obj,
            y: 30,
            yoyo: true,
            duration: 1000,
            repeat: -1,
        });
    }
    path5(obj) {
        this.tweens.add({
            targets: obj,
            x: 1900,
            yoyo: true,
            duration: 1000,
            repeat: -1,
        });
    }
    flip1(obj1, obj2) {
        if (this.physics.overlap(obj1, obj2)) {
            obj2.setFlipY(false);
        }
    }
    flip2(obj1, obj2) {
        if (this.physics.overlap(obj1, obj2)) {
            obj2.setFlipY(true);
        }
    }
    flip3(obj1, obj2) {
        if (this.physics.overlap(obj1, obj2)) {
            obj2.setFlip(true);
        }
    }
    flip4(obj1, obj2) {
        if (this.physics.overlap(obj1, obj2)) {
            obj2.setFlip(false);
        }
    }
    hurt() {
        this.cameras.main.shake(300);
        --health;
        this.dmg.play(tuboConfig);
    }
    pointt(obj) {
        obj.destroy();
        ++game3score;
        this.catch.play();
    }
    //warning on create
    onEnter() {
        console.warn('This MiniGameClass did not implement onEnter():', this.constructor.name);
    }
}