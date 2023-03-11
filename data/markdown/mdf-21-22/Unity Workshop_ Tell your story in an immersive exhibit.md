# Unity Workshop: Tell your story in an immersive exhibit 

#### **Workshop Goal**: To curate a virtual experience of your own story with *Unity* and *[Airtable](https://airtable.com/)*.

**Expected length**: ~1 hour

**Deliverables**: an interactive 3D scene in *Unity* that contains your virtual gallery; or a video record showing your virtual experience.

Example project - `Project Showcase`
![Example project - `Project Showcase`](https://i.imgur.com/QxGRjyK.png)

Example project - `Map`
![Example project - `Map`](https://i.imgur.com/9YQs7ZV.jpg)

Example project - `Timeline`
![](https://i.imgur.com/bGjkoav.png)


**Learning Goals**:
1. Learn to use database to organize data records with *Airtable*.
2. Use example codes to link your *Airtable* data table to *Unity*.
3. Understand the idea of mapping data from a data table to visual representation.
4. Learn to create or import 3D objects in virtual space in *Unity*, including basic shapes, Mapbox object.
6. Use built-in Recorder to film your immersive experience.

## **Tutorial Steps**
### **Warm-up (15 mins)**: 
1. Think about a story you want to tell, e.g., attractions in the city, art work of an artist, your travel journey, timeline of a celebrity...
> Example: I want to introduce historic buildings on Harvard campus.
2. Sketch on the paper the contents (images & text), story, layout design you desired.
> Limite the number of objects to 4~10 for this workshop. 
3. Create a collection of images & text on *Airtable*. Try to use the same column names as shown (`Name`, `Subtitle`, `Bio`, `url` of the image; `ID` is the order of the images to be shown, `image` is optional).
> Example: 
![](https://i.imgur.com/Cigv3ML.png)
4. Download the example codes from github and open the project with Unity 2021.2.5f1
https://github.com/ticahere/ll_Airtable-in-Unity


Now that you have prepared your story and the contents to be shown in the immersive exhibit, let's get started on building your virtual exhibit!

 
### **Part 1. Link Airtable to Unity (15 mins)**
1. Open the scenes folder under "ll_Airtable-in-Unity" in Unity
2. Select an example scene you would like to build on, `Project Showcase`, `Map`, `Virtual Art Gallery`
3. Click on the `AirTableDB` object from the left panel and update the Airtable credential information (App Key, Api Key, Table Name) to match your own Airtable data table.
![](https://i.imgur.com/1v5EUPr.png)
> * You can find your Airtable Api Key under Account Overview.
> * App Key is the string after "airtable.com/" url when you open your data table. It should start with 'app'.
> * Fill in the Table Name of your data table, e.g. Harvard-campus

4. Hit play and see if your images and texts are mapped correctly onto the example scene! You can use mouse and `wasd` keys to move around in the virtual scene.
> * It might show IndexOutOfRangeException errors if your data table has more entries than the example table (5 entries). Don't worry, we will fix that!

**Checkpoint 1**: Congrats! You have successfully created your data table on *Airtable* and link your *Airtable* to *Unity* (learning goals 1 & 2 checked).


* If you want to customize the data table more, check out the readme in the github here. https://github.com/ticahere/ll_Airtable-in-Unity

### **Part 2. Create Exhibit Objects (20 mins)**
Next, we are going to learn to create virtual objects in the Unity scene to map our data records to.

5. Exhibit Object: Click `Gallery` object on the left panel. You will notice there are five children objects (P1 to P5), which are the exhibit objects we map our data records to. Expand on one child object, you will see two cubes (one as the board to demonstrate images & text and one as the pole) consisting this exhibit object, as shown in the scene. 
![](https://i.imgur.com/f7otzTp.png)

6. If you further expand the first cube (the board), you will see there are different text objects, each hosting different information from our data record. The image from `url` is mapped to the cube, `Name` is mapped to `ArtTitle`, `Subtitle` is mapped to `ArtSubTitle`, and `Bio` to `ArtDescription`. 

![](https://i.imgur.com/RQf6PMs.png)
>Note that Cube has been assigned an `Art` Tag (red circle). This is important to let the script know which object should it maps the data to.

7. Now you know how these exhibit objects are used to map to our data on *Airtable*, let's create your own exhibit objects! You will need the same amount of exhibit objects as your *Airtable* records. 

There are several ways you can do it. 
* You can duplicate the existing exhibit objects.
* You can create your own shape of objects. Right click on the Hierarchy panel to select `3D Object` -> `Cube`, `Sphere`, `Capsule`, `Plane`...
 For example, let's create a `Sphere` onto the scene and drag a material you like onto it. Then you can copy the text elements from the existing exhibit object (ArtTitle, ArtSubTitle, ArtDescription). Remember to assign `Art` tag to the NewSphere object.
![](https://i.imgur.com/iUpBFZu.png)

* Finally, you can use our pre-defined prefab under `Prefab` folder. Drag `ArtObj` onto the scene. If you are using `Project Showcase` exaple scene, you can also use `ArtObj-Proximity` prefab, which gives you the AR-overlay pop-up effect when you walk close to the art.
![](https://i.imgur.com/TUAKJ7S.png)


8. Move, scale, or rotate your exhibit objects to your desired locations. If you want to use the map models (from *Mapbox*) in the example, click on the `IconicBuildingMap` object on the Hierarchy panel, click Enable Preview, and you can search for your desired map location. Change zoom level to focus on the part of map you want to focus on.
![](https://i.imgur.com/SZpGS5y.png)


**Checkpoint 2**: Congrats! You have successfully created your exhibit objects in *Unity*. Now click on play, and see your data records being mapped to the exhibit objects in your virtual gallery!
(learning goals 3 & 4 checked).

### **Part 3. Display your exhibit (10 minutes)**
The last step is to let others experience your virtual exhibit! You can do that by hitting the play button and allowing people to explore themselves, or you can record a video of your immersive experience, and even add voiceover/video effects afterwards.

First, we will use the built-in Recorder to record a high quality video of your virtual exhibit. 

9. Click on `Window` -> `General` -> `Recorder` -> `Recorder Window`. Click "Add Recorder", select the desired type and quality of your record under "Output Resolution", and choose where you want to save the file. 
When you are ready to start record, hit the red button! Hit it again to stop the record.
![](https://i.imgur.com/ELqhiiu.png)

**Checkpoint 3**: Tada! You have completed your immersive experience of your data table!


### **Ending**
Congrats! Now you can share your experience through the virtual exhibit and tell your story. Please also share your results in the `ll-reality-lab` slack channel to invite others to attend your virtual exhibit!

