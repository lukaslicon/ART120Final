class MiniGameClass extends Phaser.Scene {
    constructor(key, name) {
        super(key);
        this.name = name;
    }
    create(){
        //sound
        this.dmg = this.sound.add("dmg");
        this.catch = this.sound.add("catch");
        this.backMusic = this.sound.add("BGM");
        this.backMusic.loop = true;
        this.backMusic.setVolume(.25);

        this.s = this.game.config.width * 0.01;

        this.messageBox = this.add.text(this.game.config.width * .455,  this.game.config.height * 0.68)
        .setStyle({ fontSize: `${2 * this.s}px`, color: '#eea' })
        .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        this.onEnter();
    }
//captioning
    showMessage(message) {
        this.messageBox.setText(message);
        this.messageBox.setDepth(1); 
        this.tweens.add({
            targets: this.messageBox,
            alpha: { from: 1, to: 0 },
            easing: 'Linear',
            duration: 3000
        });
    }
//fullscreen
    fullScreenButton(){
        this.add.image(this.game.config.width/1.03, this.game.config.height/30, 'fullscreen')
        .setInteractive({useHandCursor: true})
        .on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
                this.showMessage("*Fullscreen disabled*");
            } else {
                this.scale.startFullscreen();
                this.showMessage("*Fullscreen enabled*");
            }
        });
    }
    muteButton(music){
        this.add.image(this.game.config.width/1.03, this.game.config.height/10, 'fullscreen')
        .setInteractive({useHandCursor: true})
        .on('pointerdown', () => {
            if(musicMute == false){
                musicMute = true;
                music.pause();
                this.showMessage("*Music Muted*");
            }
            else{
                musicMute = false;
                // Check if the music was ever started
                if(musicOnStart){
                    // If the music was started and it's paused, then resume it
                    music.resume();
                    this.showMessage("*Music Unmuted*");
                } else {
                    // If the music was never started, then play it
                    musicOnStart = true;
                    music = this.sound.add("BGM"); 
                    music.loop = true;
                    music.setVolume(.25);
                    music.play();
                    this.showMessage("*Music Started*");
                }
            }
        });
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
    addScore(textX, textY, text, fontSize, scoreX, scoreY){
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

    addTimerBar(barX, barY, timeX, timeY, secondsX, secondsY){
        this.timeLeft = gameOptions.initialTime;
        // timer bar        
        this.add.image(barX, barY, "timerBarBackground"); //background bar
        let timer = this.add.sprite(barX, barY, "timerBar");
        this.timerMask = this.add.sprite(timer.x, timer.y, "timerBar");
        this.timerMask.visible = false;
        timer.mask = new Phaser.Display.Masks.BitmapMask(this, this.timerMask);
        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: function(){
                this.timeLeft = this.timeLeft - 1;
                //bar width divided by the number of seconds moves bar
                let stepWidth = this.timerMask.displayWidth / gameOptions.initialTime*1;
                this.timerMask.x -=  stepWidth;
                if(this.timeLeft <= 0){
                    this.dmg.play();
                    this.timeLeft = 60;
                    housing = this.score;
                    this.cameras.main.fadeOut(1000, 0, 0, 0)
                    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                        this.scene.start('Homeless', {}, { alpha: 0, duration: 1000 });
                    })
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

            
//warning on create
    onEnter() {
        console.warn('This MiniGameClass did not implement onEnter():', this.constructor.name);
    }
}