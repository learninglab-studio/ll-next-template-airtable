# DaVinci Resolve: A Sledgehammer to Crack a Nut

Welcome to Resolve. It's a really powerful editing suite with more tools than you'll ever use. Let's go through a few of them: 
## Beginners' Tools

### Setting up

Once you've opened Resolve, select `New Project` and give it a cool name. Then, open `Project Settings` by clicking the gear in the bottom right corner. 

![](https://i.imgur.com/dwgdiud.png)

The main things you might adjust are `Timeline resolution` and the two **frame rate** options (`Timeline frame rate` and `Playback frame rate`). 

`Timeline resolution` will allow you to choose not only the resolution but also the **aspect ratio** of your projct. By default, it should be set to `1920x1080 HD`, which corresponds to a `16x9` aspect ratio. This is the widescreen format you see most often. If you want a narrower frame for your film, you might adjust this setting using `Custom` in the dropdown. Common alternatives include `1080x1080` (for a square frame) or `1440x1080` (for a `4:3` aspect ratio). Look these up and choose the look you like!

The two `Frame rate` settings should be kept the same. It should be set to `24 fps` (frames per second) by default. Keep it there, unless you recorded your footage at a different fps. 

Once you've finished updating your `Project Settings`, hit `Save`
### Importing Clips

Hit `Command+I` and navigate to your footage. If you forgot to change your Project's frame rate to your footage's, you'll get a window asking if you want to do so now. Hit `Change`, and your media should now be available.

On the toolbar at the bottom of the window, locate `Edit`. 


### Basic editing

Your `Media Pool` should be open by default (but if not, locate it in the toolbar at the top left). Double click clips you want to work with to open them in the preview window.

**Ins and Outs**
In the preview, scroll through the footage until you find your "in" point (where you want the clip to start). Once you've found it, hit `I` to mark it. Similarly, find the "out point" (where you want the clip to end) and hit `O` to mark it. Once your clip is marked up, drag it into your timeline. 

### Shortcuts for Davinci Resolve
| Result | Mac OS | Windows |
| -------- | -------- | -------- |
| Save    | Cmd+S  | Ctrl+S |
| Selection     | A     | A    |
| Blade/Cut    | B     | B    |
| In Point    |   I    |   I     |
| Out Point    |  O     |  O    |
| Play/Pause     | Space     | Space   |
| Rewind | L | L
| Stop    | K   | K   |
| Locate Media| F | F |
|Locate nearest clip beginning/end | V | V|

Extra Note: **ALWAYS SAVE YOUR WORK**. Video editing suites have a bad habit of crashing randomly -- don't let it ruin your hard work.

## Intermediate Tools

Resolve's claim-to-fame is its color correction tools. There's way too much to learn here, but here's some rundowns on how to change the look of your film.

### Getting a film look with LUTs

Hit the `Color` tab on the  toolbar at the bottom. Then hit `Option+S` twice to add two nodes. Generally, a different action is performed in each node, making it easy to navigate through your work.

Select the middle node and open `Effects` on the top right. In the search bar, type  in `Color Space Transform` and drag it to the node.

This will open the `Color Space Transform` settings. Change `Output Color Space` and `Output Gamma` to **Rec.709**. 

Once this is done, we can add a LUT (look up table), which tells Resolve what different colors should look like. Right click on your third node and find the `LUT` dropdown. I suggest finding the `Film Looks` dropdown. 

Experiment with these options. You might have to adjust some other settings to make it work, but this shortcut can help stylize your work quickly.