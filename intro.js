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
            this.scene.start('npcScreen')
        });
    }
}