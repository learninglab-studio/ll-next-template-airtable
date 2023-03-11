---
tags: unity
---

# realityLab Unity 20220308 

## Downloading and importing Unity Playground
* go to Unity asset store
* search for a 2d playground
    * Unity Playground - free
* Add to my assets
* Open in Unity
* Package Manager in Unity should show you all of the things that have been bought through the Unity asset store if clicking "Open in Unity" doesn't auto-pop up the Package Manager
* Click download, then Import


## Unity Playground Project
* in the Project Manager
    * check Prefabs in "Assets" to see if there are things there you didn't have before! this will tell you if your package has been successfully importex
* Unity Playground gives you a ton of assets to play with and scripts you can use and shows you have to use them
    * mini-games that you can install if you want 
    * "Examples" (under Assets)
        * "Adventure" - double-click to open
        * Can look at the hierarchy to get a sense of how the game is constructed and played
    * Scripts
        * can use these for other games
        * conditional - "if then" scripts; if i click, then I can add a dialogue balloon
* assigning a collider - colliders give your sprites (i.e., "images" - like creatures, etc.) so that they can collide with things
* tile maps - like colliders, these are also things you want to build at the start
* many games played with WASD keys

## tile maps
* file > 2D basic
* Game object > Create Empty > name it "ground"
* Game object > 2d object > tile map > "ground"
* Window > 2D > tile palette 
    * pick the palette you want
    * use the paintbrush to paint it in your scene
    * to zoom out, use two fingers
    * make sure big enough to put buildings on, walk around, sit on, etc.
    * close your tile map when you're done
* in your hierarchy view, have ground (under grid) selected, then select in bottom-right "add component" > tilemap collider 2d (this should add it to your ground)
    * make sure in your hierarchy that there's a parent child relationship between the main Ground empty and the grid with ground inside of it

## adding sprite to tile map
* go to Prefab in Project Manager
* pick a character
* there's a sprite editor as well if you want to change any characteristics!
* Click and drag the sprite into the hierarchy 
* make sure you have Rect transform selected if you want to change the character's size
* to add movement
    * assign the character some physics properties
    * add Physics 2D component > rigidbody 2D
    * add a collider so that the character doesn't just fall through the ground
    * assign a capsule collider component, also in the physics 2d component (molds to the edge of the character)
        * tons of different collider options! try them out!
    * make sure you click the little checkmark in the inspector next to the component to turn it ON or OFF
* make sure you STOP playmode (press the PLAY button again) to make these changes PERMANENT rather than temporary 

## scripts
* scripts > movement
* you can either add component in the inspector OR you can drag and drop onto the character in the scene and this will then show up in the inspector
* you'll need to correct the movement so the character isn't moving chaotically! in all directions!
* change the "movement type" in the inspector, change speed, etc. - this will give you more control over how the character moves
* add jump script and hit key z to get the character to jump

## camera follow character
* parent child relationships - when something is nested underneath something - the big one is the parent, the nested one is the child
* make the camera the child of the character to track the character's movement


