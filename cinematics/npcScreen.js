let musicOnStart = false;

class npcScreen extends Cinematics {
    constructor() {
        super('npcScreen', 'npcScreen')
    }
    onEnter() {
        this.s = this.game.config.width * 0.01;
        this.gww = this.game.config.width;
        this.gwh = this.game.config.height;

        if (musicMute == true){
            this.backMusic.play();
            this.backMusic.setVolume(0);
         }
         else{
             this.backMusic.play();
         }
         
        //rectangle behind background
        let rect = new Phaser.Geom.Rectangle(1800, 0, 120, 150);

        this.add.image(this.gww / 2, this.gwh / 2, 'background');
        this.player = this.physics.add.image(this.gww / 2, this.gwh * 0.55, 'player').setScale(3);
        this.player.body.setCollideWorldBounds(true);

        this.npc = this.physics.add.image(this.gww / 2, this.gwh * 0.28, 'NPC').setScale(3);
        this.npc.body.setImmovable(true);

        //pointer
        if (NPCmessage == 0) {
            this.pointerHand = this.add.image(this.gww / 2.5, this.gwh * 0.55, 'pointer').setScale(2);
            this.tweens.add({
                targets: this.pointerHand,
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
                if(pointerDestroyed == false){
                    this.pointerHand.destroy();
                    pointerDestroyed = true;
                }

            }
        });

        //fade
        this.fadeInScene();
        this.fullScreenButton();
        this.muteButton(this.backMusic);
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
