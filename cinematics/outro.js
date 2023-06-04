class outro extends Phaser.Scene {
    constructor() {
        super('outro')
    }

    create() {
        this.cameras.main.setBackgroundColor('#0000FF');

        var text = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Outro\n\n\n\n      Click for next intro slide',
            {
              font: '48px Arial',
              fill: '#FFFFFF'
            }
          );

        this.input.on('pointerdown', () => {
            this.scene.start('intro')
        });
    }
}