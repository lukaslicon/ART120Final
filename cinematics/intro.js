class intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    create() {
        this.cameras.main.setBackgroundColor('#0000FF');

        var text = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Intro\n\n\n\n      Click for next npcSlide',
            {
              font: '48px Arial',
              fill: '#FFFFFF'
            }
          );

        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1500); // 1000ms = 1 second
            // Set up a callback function when the fade out is complete
            this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                // Switch to another scene or perform any other action
                this.scene.start('npcScreen');
            }, this);
        });
    }
}