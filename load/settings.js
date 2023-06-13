class settings extends Phaser.Scene {
    constructor(key, name) {
        super(key);
        this.name = name;
    }
    create(){
        this.titleMusic = this.sound.add("titleMusic");
        this.titleMusic.loop = true;
        this.backMusic = this.sound.add("BGM");
        this.backMusic.loop = true;
        this.backMusic.setVolume(.25);

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
    muteButton(music){
        const musicButton = this.add.sprite(this.game.config.width/1.03, this.game.config.height/10, 'music', 0)
        //how would i edit the sprite to be 3x bigger?
        .setScale(3)
        .setInteractive({useHandCursor: true})
        .setFrame(0)
        .on('pointerdown', () => {
            if(musicMute == false){
                musicMute = true;
                music.pause();
                musicButton.setFrame(1)
            }
            else{
                musicMute = false;
                // Check if the music was ever started
                if(musicOnStart){
                    // If the music was started and it's paused, then resume it
                    music.resume();
                    musicButton.setFrame(2);
                } else {
                    // If the music was never started, then play it
                    musicOnStart = true;
                    music = this.sound.add("BGM"); 
                    music.loop = true;
                    music.setVolume(.25);
                    music.play();
                }
            }
        });
    }
}