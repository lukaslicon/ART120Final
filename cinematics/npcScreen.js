let musicOnStart = false;

class npcScreen extends Cinematics {
    constructor() {
        super('npcScreen', 'npcScreen')
    }
    onEnter() {
        this.s = this.game.config.width * 0.01;
        this.gww = this.game.config.width;
        this.gwh = this.game.config.height;
        if (musicOnStart == false && musicMute == false) { //this is for starting on each scene... do not change this
            musicOnStart = true; //now music is playing on a loop, we need this so it doesnt start everytime we re-enter the scene
            this.backMusic.play();
        }
        //rectangle behind background
        let rect = new Phaser.Geom.Rectangle(1800, 0, 120, 150);

        this.add.image(this.gww / 2, this.gwh / 2, 'background');
        this.player = this.physics.add.image(this.gww / 2, this.gwh * 0.55, 'player').setScale(window.devicePixelRatio * 3);
        this.player.body.setCollideWorldBounds(true);

        this.npc = this.physics.add.image(this.gww / 2, this.gwh * 0.28, 'NPC').setScale(window.devicePixelRatio * 3);
        this.npc.body.setImmovable(true);

        //pointer
        if (NPCmessage == 0) {
            this.pointer = this.add.image(this.gww / 2.5, this.gwh * 0.55, 'pointer').setScale(window.devicePixelRatio * 2);
            this.tweens.add({
                targets: this.pointer,
                alpha: 0,
                duration: 2000,
                ease: 'Linear',
                repeat: -1,
                yoyo: true,
            });
        }

        //collider
        this.physics.add.collider(this.player, this.npc, this.handlePlayerNPCOverlap, null, this);

        // Inside the 'pointerdown' event
        this.input.on('pointerdown', (pointer) => {
            if (!rect.contains(pointer.x, pointer.y)) {
                this.physics.moveTo(this.player, pointer.x, pointer.y, 300);
                this.targetX = pointer.x;
                this.targetY = pointer.y;
                this.pointer.destroy();
            }
        });


        //background wind noise from tone.js
        // const wind = new Tone.Noise('brown');
        //  const autoFilter = new Tone.AutoFilter({
        //      baseFrequency: 200,
        //      octaves: 8
        // }).toDestination().start();
        // wind.connect(autoFilter);

        // const noiseVol = new Tone.Volume(-50);
        // wind.chain(noiseVol, Tone.Destination);

        // let loop = new Tone.Loop(() =>{
        //     noiseVol.volume.value = Math.random() *-5;

        //     wind.start();
        //     wind.stop('+4');
        // }, '4n');

        // use a polysynth in tone.js to make a c#4 note for 1.0 seconds, then play a f#4 note for 0.75 seconds, then play a a#4 note for 0.5 seconds, then play a c#5 note for 0.25 seconds
        
        //fade
        this.fadeInScene();
        this.fullScreenButton();
        this.muteBGM();
    }
    update() {
        if (Phaser.Math.Distance.Between(this.player.x, this.player.y, this.targetX, this.targetY) < 10) {
            this.player.body.setVelocity(0);
        }

        if (Phaser.Math.Distance.Between(this.player.x, this.player.y, this.targetX, this.targetY) < 10) {
            this.player.body.setVelocity(0);
            if (this.isMoving) {
                this.isMoving = false;
            }
        }
    }
}
