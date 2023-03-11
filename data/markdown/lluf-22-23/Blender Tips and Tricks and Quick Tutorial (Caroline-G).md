# Blender Tips and Tricks and Quick Tutorial (Caroline-G)

## Helpful Shortcuts 
there are a lot of ways to transform and move your object in blender. 

blender starts with a cube by default (but if you want to try something else use shift+a to add a different shaped mesh). and by the way, a mesh is just the object you're working with (all of its verticies, edges, and faces) 

**g = grab** 
to grab and move along a particular axis, click x, y, or z (depending on what direction you want to move in) 

**s = scale**
just clicking s will allow you to scale up your object or scale down. if you want to make it just taller, or wider, etc, you can use the same trick of clicking x, y, or z after s

**e = extrude**
to manipulate the vertices, edges, or faces of your object you need to be in edit mode. blender defaults to object mode (see here) 
![](https://i.imgur.com/OEPmAtu.png)
you can toggle into edit mode by clicking tab or by going into the drop-down menu 
![](https://i.imgur.com/CdshZhg.png)
note the three different options to the right of edit mode. the leftmost is vertex mode - you can use this to edit where exactly the verticies  are. the middle is edge mode, and the rightmost is face mode. 

so if you want to extrude a face, click on the object you're working with and click e. then move your cursor! 
you can extrude basically anything and this is a super helpful tool. 

**r = rotate**

## Modifiers 
modifiers are a cool way to make your object look more realistic, or whatever you're going for
modifiers can do a bunch of stuff and honestly i do not fully understand most of them (yet) but the two that i use the most are the two i highlighted below - solidify and subdivision surface. 
![](https://i.imgur.com/6BuuGif.png)

**solidify modifier**
the solidify modifier does exactly what you might expect from the name - it "solidifies" your object by adding thickness. this is really helpful when you're modeling something 

**subdivision surface**
this will basically take your mesh and subdivide it, creating a smoother look by basically creating a ton of new faces. this is a great way to take your object from looking super cube-y/segmented to something sort of realistic. one of the great things about it is that you can still go in and edit those faces after you add the modifier. 

## Mini-Project 
let's practice blender-ing! (blending??)
this requires just the four basic manouvers included in the first section of this page :) 

we're going to make a chair in blender, starting with a cube! 

![](https://i.imgur.com/a08p8HL.png)![](https://i.imgur.com/teMTOot.png)

when you open blender, you'll see your cube. go ahead and add a plane so our chair has a floor
* shift + a to add -> mesh -> plane
* the plane will drop basically into your cube. use "s" to scale it up to your desired size and click anywhere else to deselect it 

now bring your cube up to the level of the plane 
* g + z to move upwards 

to start my chair, I'm going to go into edit mode (face mode specifically) and extrude the top face of the cube upwards to the desired height 
* tab to toggle into edit mode 
* e + z to extrude upwards 

duplicate your chair leg three times so you have four chair legs 
* shift + d to duplicate 
* g + x(or y) to move around 
* make sure to space them as evenly as possiblesys

create the seat of your chair 
* shift + a to add a new cube 
* s to scale up then s+z to make it shorter 

notice those sort of decorative pieces under the seat of the chair and between the chair legs? 
* shift + a to add (wait for it) another cube 
* scale it to be the proper width. you could also use extrude. 
* g to grab and move it around 
* shift + d to duplicate and then move/adjust to each area 

next create the back of the chair, once again using cubes 
* shift + a to add a cube. 
* in edit mode, use e to extrude upwards to whatever height you think looks best 
* add a slight rotation (r + x) so it's not straight up and down 
* duplicate and move your second chair back to the right (or left) 
* next, create the rungs that go between the back (same way as the others are made - once you create one, just duplicate and rescale, and then rotate/grab to arrange how you would like) 


hold for instructions on adding textures (aka i am troubleshooting this rn) 


# tool time 
- key skills: selecting, extruding, grab, restricting by axis, polygonal modeling, loop cuts (command +r )

- add ons -> images as planes 