# (3) Scripting Lab: Coding in Unity, the Basics

Code & Visual Scripting (10-15+ minutes) (would need computers)
- Using Unity's own visual scripting add-on, have students build a script to rotate a cube

[4 computers? 3 students per computer. control room?]


## Notes on visual scripting - aka, What is Visual Scripting? And Why Use It?

- Allows you to create the logic for Unity projects without writing actual code
    - Unity scripting typically done in C# programming language
    - Visual scripting lets you diagram your instructions
    - Helpful for visual learners; empowers non-coders; gives coders better way to collaborate with artists, designers, and other non-coders
    - Provides access to entire Unity Scripting API--definitions of classes, events, methods (behaviors), and properties (settings) you can manipulate with Unity scritps
    - Visual scripting can also help you start learning how to use C#

- Node-based graphs instead of traditional C# scripts
- Useful for both programmers and non-programmers
- Particularly useful for rapid implementation and prototyping of interactive systems, etc.
    - animators and game designers test and implement behaviors without learning C#
    - can also be used with traditional C#; programmers can attach visual scripting graphs to C-sharp scripts, so animators and designers can also interact with scripts
- Useful for learning C#
    - easier to get started, helps you understand C# better; 
- Useful for creating templates for others
    - create extensions, tools, templates that everyone can use (even without C# experience)

## Visual Scripting Tutorial Steps
1. New empty scene; create a cube
2. position the cube and camera to get a good view of cube in play mode
3. Create "Machine" component & add to the cube (with cube selected, go to Inspector and Add Component > Visual Scripting > Scirpt Machine)
    - a machine runs a visual script; carries out instructions in the visual script
    - visual script also known as a "Graph"
    - will add scripting symbol (<>) to your game object in scene view
    - note: the Machine is the component; the graph is an asset that can be used in multiple machines
4. Create the Graph
    - In script machien component, select New to greate graph
    - create a folder called VisualScripts
    - Save your graph using the name "Rotation" to create a new file named Rotation.asset
    - Script machine will now include fields for Title and Summary - title your graph ("Rotate the Cube") and the summary ("Make the cube rotate")
    - select Edit Graph button - opens Script graph window
5. Script Graph
    - The sript graph includes three panels:
        - Graph window (the area where you build your graph)
        - Graph inspector (providing additional info about the units in your graph as you edit)
        - Blackboard (panel for creating and managing variables)
    - In the Script Graph, add a new node
        - Cube>Transform>Rotate (X angle, Y angle, Z angle)
        - Add new "graph variable"
            - Name "xrotate" 
            - Type "float"
            - Set value 

        - Drag Variable onto Graph Window

        - Connect variable to "X angle" of transform node

    - Connect "on Update" arrow to "Transform" arrow