---
tags: portfolio-journal, caroline
---


# Caroline-G Blender Journey 
thoughts and tips i learn along the way as i continue to struggle to be friends with blender! 

## menu of things to build:
* [blender-mac-ports](/krhiE_hdSzqrauZnXpmiYQ)
## outline of project
- create something to add to portfolio for HH projects
- model of LL blueprint - extrude walls, tables from a 2d image 
- show different potential configurations of the LL 


---

### some helpful tutorials 
- https://cgi.tutsplus.com/tutorials/create-a-3d-floor-plan-model-from-an-architectural-schematic-in-blender--cg-13350
- lighting https://www.egneva.com/how-to-create-a-3d-floor-plan-in-blender/
- very fast but useful for adding keyframes https://www.youtube.com/watch?v=dZBHS1tTE6s
- floorplan specific https://www.youtube.com/watch?v=Xb4ddBuiTU0
### and some helpful shortcuts 
- i = insert keyframe
>Animation Example 
>
>This example shows you how to animate a cube’s location, rotation, and scale.
> 
> First, in the Timeline, or other animation editors, set the frame to 1.
> 
> With the cube selected in Object Mode, press I in the 3D Viewport. From the Insert Keyframe menu select LocRotScale. This will record the location, rotation, and scale, for the cube on frame 1.
> 
> Set the frame to 100.
> 
> Use Move G, Rotate R, Scale S, to transform the cube.
> 
> Press I in the 3D Viewport. From the Insert Keyframe menu, select LocRotScale.
> 
> To test the animation, press Spacebar to play.*

### process 
1) select an image background; i used the floorplan for the harvard museum of natural history 
2) enable import image as plane in blender
    edit --> preferences --> add-ons --> import images as planes 
2) import desired blueprint as a plane. 
3) shift + a to add a new object --> mesh --> plane 
4) rename your plane "perimeter"
5) scale the plane down to the same size as the walls on the image floorplan 
6) use e to extrude two of the verticies of the plane to the other edges of the wall on floorplan
    when moving up and down click e with y 
    when moving side to side click e with x 
8) in edit mode, use e to extrude the verticies of your floorplan upwards to your desired height
9) select g plus z to grab the perimeter and move it below the floorplan plane (basically to -0.1 z)
10) go to object mode and add a keyframe 
i (add keyframe) --> location, rotation, and scale
12) back in edit mode, grab the perimeter and move it upwards so the walls are fully above the plane 
13) move to frame 100 or so and add another keyframe
14) voila! now add internal walls using the same steps! make sure to rename the planes you add so it is easy to grab things and remember what is what 

## metaballs
metaballs are pretty interesting objects in blender that actually don't have any vertices - they have a sphere of influence but aren't like other spheres/shapes 
read more about it here from this website which has pretty good tutorials: https://artisticrender.com/how-to-use-metaballs-in-blender/
their properties lend themselves well to the sort of modeling that might be cool for horizons presentations/modeling scientific concepts - my immediate thought was cells. 
i'm going to try to do a vampire planet situation here: https://www.youtube.com/watch?v=Z9Ya48bfI-w

first step is making the metaballs 
1) shift + a to add - I went for a sphere but you could do any sort of shape (they all have similar properties) 
2) shift + d to duplicate
3) scale your metaball to desired size - in this case I'm making two of the same size. they will gradually change size as i animate it 
4) adding the bezier circles is a little tricky so i am skipping this for now (feb 1), but will go back to add this later on.
     note to self for later: does it work to create two different bezier circles? or does it make more sense to create the animation between the two "planets" first and then add one circle (which gives the illusion that they are moving on separate orbits?) 
6) figure out the animation of the spheres 
7) insert keyframe at baseline with shortcut "i" 
8) select "rotation, location, and scale"
9) click the spacebar and let the the animation (there's no movement yet, don't worry) run until you reach your desired length (i chose 145 keyframes) 
10) move your metaballs however you'd like - this might involve a rotation (shortcut r), moving them towards each other using shortcut g. the metaballs will naturally sort of shift towards each other. 
11) use shortcut i again to add another keyframe (once again, pick "rotation, location, and scale"). now play your animation! 
12) this is the super baseline stage of the process.