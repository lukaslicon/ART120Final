let musicOnStart = false;

class npcScreen extends Cinematics {
    constructor() {
        super('npcScreen', 'npcScreen')
    }
    onEnter() {
        this.s = this.game.config.width * 0.01;
        this.gww = this.game.config.width;
        this.gwh = this.game.config.height;
        if(musicOnStart == false){ //this is for starting on each scene... do not change this
            musicOnStart = true; //now music is playing on a loop
            this.backMusic = this.sound.add("BGM");
            this.backMusic.loop = true;
            this.backMusic.setVolume(.25);
            this.backMusic.play();
        }
        //rectangle behind background
        let rect = new Phaser.Geom.Rectangle(1800, 0 , 120, 150);

        this.add.image(this.gww/2, this.gwh/2, 'background');
        this.player = this.physics.add.image(this.gww/2, this.gwh*0.55, 'player').setScale(window.devicePixelRatio*3);
        this.player.body.setCollideWorldBounds(true);

        this.npc = this.physics.add.image(this.gww/2, this.gwh*0.28, 'NPC').setScale(window.devicePixelRatio*3);
        this.npc.body.setImmovable(true); 
        
        //collider
        this.physics.add.collider(this.player, this.npc, this.handlePlayerNPCOverlap, null, this);
        this.isMoving = false; 

        // Inside the 'pointerdown' event
        this.input.on('pointerdown', (pointer) => {
            if (!rect.contains(pointer.x, pointer.y)) {
                this.physics.moveTo(this.player, pointer.x, pointer.y, 300);
                this.targetX = pointer.x;
                this.targetY = pointer.y;
            }
        });
        //fade
        this.fadeInScene();
        this.fullScreenButton();
        this.muteButton();
    }
    update() {
        if (Phaser.Math.Distance.Between(this.player.x, this.player.y, this.targetX, this.targetY) < 10) {
            this.player.body.setVelocity(0);
        }
    }
}
