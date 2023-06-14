# CMPM120 Final Game - FutureBound
Final game created for CMPM120, UCSC Spring 2023

**RUBRIC**

**Link to deployed version of main game that works in mobile browser:**
https://lukaslicon.itch.io/futurebound

**Links to deployed, mobile-playable versions of all three prototypes**
   - Scene Flow: https://lukaslicon.github.io/SceneFlowPrototype/

   - Core Gameplay: https://lukaslicon.github.io/CoreGameplayPrototype/

   - Cinematics: https://lukaslicon.github.io/CinematicPrototype/
   
**Explanation of theme**
"Nearby in space, but distant in time."
Our team tackled this idea quite literally, with the player being sent forward into the future to view the exaggerated consequences of the housing crisis, possible deforestation of UCSC, and a post-apocalyptic environment.

**Explanation of selectable requirements attempted**
1. Advanced visual assets, 
   - with a video based ending
2. Procedural audio, 
   - succcess chord created from ToneJS
3. Procedural graphics, 
   - Phaser Graphics class and shader effects in starting portal


**Identifies all direct contributors and their roles**

**Contributor Credits:**
- **Lukas:** Technology Lead

- **Akhror:** Testing Lead

- **Jentsen:** Production Lead

**Gives credit for all major upstream assets**
- Maximilian Breal from ARTG120 helped create assets such as the glove, koi fish, housing application, houses, and animation of ending background.

- Jentsen created main character, NPC, pointer, fullscreen button, mute button, and nuclear barrel sprites, all backgrounds, title screen art and music, and BGM.

- Tileset for NPC Screen: https://clockworkraven.itch.io/raven-fantasy-pixel-art-tileset-green-forest

- Font: https://www.dafont.com/pkmn-mystery-dungeon.font

- Shader: https://github.com/photonstorm/phaser3-examples/blob/master/public/assets/shaders/bundle.glsl.js

- Portal Texture: Minecraft Default Portal Texture

**Uses hand-typed textual program code**

- See code.

**Repository shows contributions from several team members**

- See commit history.

**Repository shows most design changes with useful commit messages**

- See commit history. 

**Playable using only touch-screen controls**

- Fully touch-screen compatible with the use of discrete and continuous inputs.

**Full-screen gameplay available on mobile browsers**

- Full-screen button at the top right of the screen.

**No mobile-specific technical issues blocking completability of the game**

- Mobile completable with lines in the index.html file.

**Player can learn controls from within the game while full screen**

- Player is urged on by a pointer animated by a tween to touch/click the screen to move around and is taught by mini games to click to move objects or move the player character.

**Music can be turned off from inside of the game**

- Mute music button implemented at the top right of the screen below the fullscreen button.

**Music preference is remembered across gameplay sessions in new browser windows**

- Music preference is stored as a global variable.

**Core gameplay can be reached within 1 minute**

- Intro takes less than a minute to read and watch through.

**Main progression can be completed within 10 minutes for new players experienced with related games**

- The 3 minigames and the interlude NPC screen are simple and relatively straightforward. The linear storyline helps keep the player on the right path at all times.

**Selectable requirement #1 is satisfied**

- Advanced visual assets: outro.js:47

**Selectable requirement #2 is satisfied**

- Procedural audio: MiniGameClass.js:34

**Selectable requirement #3 is satisfied**

- Procedural shader graphics: intro.js:44