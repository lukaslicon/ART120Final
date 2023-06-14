class settings extends Phaser.Scene {
    constructor(key, name) {
        super(key);
        this.name = name;
    }
    create(){
        this.titleMusic = this.sound.add("titleMusic");
        this.titleMusic.loop = true;
    }
    //fullscreen
    fullScreenButton(){
        this.add.image(this.game.config.width/1.03, this.game.config.height/30, 'fullscreen')
        .setInteractive({useHandCursor: true})
        .on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
            }
        });
    }

    //mute
    muteButton(music){
        let musicButton = this.add.sprite(this.game.config.width/1.03, this.game.config.height/10, 'music', 0)
        .setScale(3)
        .setInteractive({useHandCursor: true})
        .setFrame(muteButtonFrame)
        .on('pointerdown', () => {
            if(musicMute == false){
                musicMute = true; //music is muted
                muteButtonFrame = 1;
                music.setVolume(0);
                musicButton.setFrame(muteButtonFrame)
            }
            else{
                musicMute = false; //music is unmuted
                muteButtonFrame = 0;
                music.setVolume(1);
                musicButton.setFrame(muteButtonFrame)
            }
        });
    }
}

