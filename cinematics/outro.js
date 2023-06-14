class outro extends Cinematics {
    constructor() {
        super('outro', 'outro');
    }
    onEnter() {
        if (musicMute == true){
            this.outroMusic.play();
            this.outroMusic.setVolume(0);
         }
         else{
             this.outroMusic.play();
         }

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

        //outro video
        const outroVid = this.add.video(this.game.config.width/2, this.game.config.height/2, 'outroVid', { loop: true })
            .setOrigin(0.5)
            .setAlpha(0);
        
        this.fadeInthenOut(outroVid, 2000, 2000 , 40000)
        setTimeout(() => {
            outroVid.play(true);
        }, 40000);
//HUD
        this.fullScreenButton();
        this.muteButton(this.outroMusic);
        
        let END = this.add.text(this.game.config.width/2, this.game.config.height/1.3, "THE END", { 
            fontFamily: "pmd",
            fill: "#ffffff", 
            align: "center",
            wordWrap: { width: this.game.config.width * .4166667  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(96); // set origin to center
        this.fadeIn(END, 3000, 45800);
//game1  
    if(game1win == true){
        let game1_win = this.add.text(this.game.config.width/2, this.game.config.height/6, "Game 1: SUCCESS...  Through sheer determination and resourcefulness, you navigated the complexities of the housing crisis and successfully secured a sanctuary to call home.", { 
            fontFamily: "pmd", 
            color: '#0f0',
            align: "center",
            wordWrap: { width: this.game.config.width * .6  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(48); // set origin to center
        this.fadeIn(game1_win, 3000, 45800);
    }
    else {
        let game1_lose = this.add.text(this.game.config.width/2, this.game.config.height/6, "Game 1: FAILURE... Despite your relentless efforts, a home remained out of your grasp, compelling you to adapt to the rustic simplicity of living in a park.", { 
            fontFamily: "pmd", 
            color: '#f00',
            align: "center",
            wordWrap: { width: this.game.config.width * .6  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(48); // set origin to center
        this.fadeIn(game1_lose, 3000, 45800);
    }
//game2
    if(game2win == true){
        let game2_win = this.add.text(this.game.config.width/2, this.game.config.height/3, "Game 2: SUCCESS...  You have successfully eradicated the haunting infestation of ghost slugs that once plagued the closets of UCSC, restoring tranquility and safety to the institution.", { 
            fontFamily: "pmd", 
            color: '#0f0',
            align: "center",
            wordWrap: { width: this.game.config.width * .6  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(48); // set origin to center
        this.fadeIn(game2_win, 3000, 45800);
    }
    else {    
        let game2_lose = this.add.text(this.game.config.width/2, this.game.config.height/3, "Game 2: FAILURE... Your mission to quell the ghost slug infestation at UCSC fell short, leading to their unstoppable spread and eventual global domination.", { 
            fontFamily: "pmd", 
            color: '#f00',
            align: "center",
            wordWrap: { width: this.game.config.width * .6  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(48); // set origin to center
        this.fadeIn(game2_lose, 3000, 45800);
    }
//game3
    if(game3win == true){
        let game3_win = this.add.text(this.game.config.width/2, this.game.config.height/2, "Game 3: SUCCESS... Through your diligent efforts, you've successfully purged the environment of toxic waste, ensuring the survival and thriving of the koi fish ", { 
            fontFamily: "pmd", 
            color: '#0f0',
            align: "center",
            wordWrap: { width: this.game.config.width * .6  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(48); // set origin to center
        this.fadeIn(game3_win, 3000, 45800);
    }
    else {  
        let game3_lose = this.add.text(this.game.config.width/2, this.game.config.height/2, "Game 3: FAILURE... Despite your best efforts, the toxic waste proved too formidable to eliminate, spelling a tragic end for the precious koi fish and rest of the bay.", { 
            fontFamily: "pmd", 
            color: '#f00', 
            align: "center",
            wordWrap: { width: this.game.config.width * .6  } // wrap words that exceed this width
        }).setOrigin(0.5).setAlpha(0).setFontSize(48); // set origin to center
        this.fadeIn(game3_lose, 3000, 45800);
    }     
    }
}
