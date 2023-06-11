class outro extends Cinematics {
    constructor() {
        super('outro', 'outro');
    }
    onEnter() {
        this.outroMusic = this.sound.add("titleMusic");
        this.outroMusic.loop = true;
        this.outroMusic.play();

        let text1 = this.add.text(this.game.config.width/2, this.game.config.height/2, "As you step back through the pulsating portal, the turmoil of the apocalyptic universe fades away, replaced by the hum of your own reality.", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(42); // set origin to center
        this.fadeInthenOut(text1, 4000, 4000, 0);

        let text2 = this.add.text(this.game.config.width/2, this.game.config.height/2, " Relief floods through you, a tide of joy that sends every nerve singing. ", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(42); // set origin to center
        this.fadeInthenOut(text2, 4000, 4000, 10000);

        let text3 = this.add.text(this.game.config.width/2, this.game.config.height/2, "You're back to the place that's yours, that's home, basking in the reassurance of the familiar mountains.", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(42); // set origin to center
        this.fadeInthenOut(text3, 4000, 4000, 20000);

        let text4 = this.add.text(this.game.config.width/2, this.game.config.height/2, "You hear the soothing lull of the nearby ocean - you're back at the UC Santa Cruz you know and love!", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667 } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(42); // set origin to center
        this.fadeInthenOut(text4, 4000, 4000, 30000);
        
        //gif
        this.anims.create({
            key: 'gifAnimation',
            frames: this.anims.generateFrameNumbers('OutroGif', { start: 0, end: 17 }),
            frameRate: 3,
            delay : 40000
        });


        let image = this.add.sprite(this.game.config.width/2, this.game.config.height/2, 'OutroGif').setAlpha(0);
        this.fadeInthenOut(image, 2000, 1800, 40000);
        image.play('gifAnimation');

        let END = this.add.text(this.game.config.width/2, this.game.config.height/2, "THE END", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(96); // set origin to center
        this.fadeIn(END, 3000, 45800);
//game1  
    if(game1win === true){
        let game1_win = this.add.text(this.game.config.width/2, this.game.config.height/2, "game1_win", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(96); // set origin to center
        this.fadeIn(END, 3000, 45800);
    }
    else {
        let game1_lose = this.add.text(this.game.config.width/2, this.game.config.height/2, "game1_lose", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(96); // set origin to center
        this.fadeIn(END, 3000, 45800);
    }
//game2
    if(game2win === true){
        let game2_win = this.add.text(this.game.config.width/2, this.game.config.height/2, "game2_win", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(96); // set origin to center
        this.fadeIn(END, 3000, 45800);
    }
    else {    
        let game2_lose = this.add.text(this.game.config.width/2, this.game.config.height/2, "game2_lose", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(96); // set origin to center
        this.fadeIn(END, 3000, 45800);
    }
        //game3
    if(game3win === true){
        let game3_win = this.add.text(this.game.config.width/2, this.game.config.height/2, "game3_win", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(96); // set origin to center
        this.fadeIn(END, 3000, 45800);
    }
    else {  
        let game3_lose = this.add.text(this.game.config.width/2, this.game.config.height/2, "game3_lose", { 
            fontFamily: "pmd", 
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(96); // set origin to center
        this.fadeIn(END, 3000, 45800);
    }     
    }
}
