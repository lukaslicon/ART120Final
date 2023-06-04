class npcScreen extends Phaser.Scene {
    constructor() {
        super('npcScreen')
    }

    create() {
        this.add.image(960, 540, 'background');
        this.player = this.physics.add.image(960, 590, 'player').setScale(1.5);
        this.player.body.setCollideWorldBounds(true);

        this.npc = this.physics.add.image(960, 300, 'NPC').setScale(1.5);
        this.npc.body.setImmovable(true); // NPC will not move when collision occurs

        // Add a collider between the player and the npc
        this.physics.add.collider(this.player, this.npc, this.handlePlayerNPCOverlap, null, this);

        // Add a click (or touch) event listener to the scene
        this.input.on('pointerdown', (pointer) => {
            this.physics.moveTo(this.player, pointer.x, pointer.y, 300);
            // Save destination coordinates
            this.targetX = pointer.x;
            this.targetY = pointer.y;
        });
        
        //score
        this.add.text(100, 92, 'NPC MESSAGES: ').setStyle({ fontSize: 50, color: '#fff' })
        this.messageCount = this.add.text(500, 93).setStyle({ fontSize: 50, color: '#fff' })
    }

    update() {
        this.messageCount.setText(NPCmessage);
        if (Phaser.Math.Distance.Between(this.player.x, this.player.y, this.targetX, this.targetY) < 10) {
            this.player.body.setVelocity(0);
        }
    }

    handlePlayerNPCOverlap(player, npc) {
        NPCmessage++;
        this.player.body.setVelocity(0);
        const bounceDirection = Phaser.Math.Angle.Between(npc.x, npc.y, player.x, player.y);
        this.tweens.add({
            targets: player,
            duration: 400, // The duration of the bounce back in milliseconds
            ease: 'Power1',
            x: player.x + Math.cos(bounceDirection) * 80, // Adjust these values to control the bounce back distance
            y: player.y + Math.sin(bounceDirection) * 80,
        });
        if(NPCmessage == 1){
            this.message1 = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'STORY MESSAGE 1', { fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
            this.player.body.moves = false;
            this.time.delayedCall(2000, () => {
                this.message1.destroy();
                this.cameras.main.fadeOut(1000, 0, 0, 0, (camera, progress) => {
                    this.scene.start('MiniGame1', {}, { alpha: 0, duration: 1000 });
                });
            }, [], this);
        }
        if(NPCmessage == 2){
            this.message2 = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'STORY MESSAGE 2', { fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
            this.player.body.moves = false;
            this.time.delayedCall(3000, () => {
                this.message2.destroy();
            }, [], this);
        }
        if(NPCmessage == 3){
            this.message3 = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'STORY MESSAGE 3', { fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
            this.player.body.moves = false;
            this.time.delayedCall(3000, () => {
                this.message3.destroy();
            }, [], this);
        }
        if (NPCmessage == 4) {
            this.message4 = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'STORY MESSAGE 4', { fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
            this.player.body.moves = false;
            this.time.delayedCall(3000, () => {
                this.message4.destroy();
                this.cameras.main.fadeOut(1000, 0, 0, 0, (camera, progress) => {
                    if (progress === 1) {
                        this.scene.start('outro');
                    }
                });
            }, [], this);
        }
    }
}
