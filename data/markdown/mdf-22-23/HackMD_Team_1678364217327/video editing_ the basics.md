---
tags: orientation
---

# video editing: the basics

![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F03UCTX7XUK/man-with-a-movie-camera-scissors.jpeg?pub_secret=3b3cd388b5)

### goals:
* learn about Final Cut Pro, one of the video editing tools we use the most here at the LL
* do a couple of activities we might do with students who are making video essays
* learn how to get footage for a video essay project
* make some great super cuts (maybe even in time to screen at Happy Hour!)


### the steps:

* Bring footage into Final Cut Pro:
    * File > New > Library: mdf_orientation_firstname_YYYYMMDD
    * File > New > Event: 
        * Create 2 events - "Footage" and "Projects"
        * Import your footage into the Footage folder
    * Click on "Projects" event again
    * File > New > Project 
        * Create 2 projects - "selects" and "rough cut"

* Adding clips to your timeline:
    * Set an "in"
        * letter "i"
    * Set an "out"
        * letter "o"
    * Add the clip to the timeline
        * letter "e" adds clip to the end of the timeline

#### Activity 1: Using Final Cut as a research and analytical tool
Using range selected keywords, annotate the video clips according to a recurrent visual, thematic, or other trope
 
* Range Selected Keywords:
    * select clip
    * set an in and out that captures a theme you're interested in exploring in your video essay
    * then make a keyword (command + K)
    * once you have a bunch of instances of this trope, make a montage or supercut by creating a new Project with those clips (and titling the project whatever the theme is)
        * Drag those keyword collections into that project

* Add Titles:
    * Place the playhead where you want to add titles
    * Type in "basic" or "basic lower third" into the search bar
    * Select and drag the titles onto the clip where you'd like them
    * You can change the duration that the titles are on screen, too!

Go on to Prelinger and source some of your own footage!

#### Activity 2: Overcutting shots in the timeline
This activity let's students analyze a model by breaking down the shots in a given film/sequence within that film/etc. One way to do this activity is to have students first guess how many shots a given chunk of footage has (say, 30 seconds of footage from a film). Then, have the students do the cuts using the insert cut tool in the timeline and count the cuts.

The end result of this exercise gives you a sense of the pacing of the cuts in an edited video (in this sense, it gives students some sense of how many shots you would need to create this kind of example). 

* Once you have footage in the timeline:
    * drag playhead until you see a cut
    * press M to mark the moment of the cut
    * then insert a cut there using the Blade tool on the toolbar

### resources:

* Download archival films from [the Prelinger Archives](https://archive.org/details/prelinger) 
* rip clips from YouTube (see below)

### downloading from youtube:
Downloading from YouTube

By far the safest and most reliable way to download from YouTube is to use [youtube-dl](https://youtube-dl.org/), a simple command line tool. 

To use it on Windows:
1. install [choco](https://chocolatey.org/install) if you don't already have it
2. `choco install youtube-dl`
3. then `youtube-dl "https://www.youtube.com/watch?v=dQw4w9WgXcQ"` or other URL

To use it on Mac:
1. install [homebrew](https://brew.sh/) if you don't already have it
2. `brew install youtube-dl`
3. then `youtube-dl "https://www.youtube.com/watch?v=dQw4w9WgXcQ"` or other URL

If you want a specific format:
1. `youtube-dl -F [your/URL]` to see all formats so you can select the number of the format you want--let's say "22"
2. `youtube-dl -f 22 [your/URL]` to download

be sure to `cd /Users/me/Desktop/folder-i-want-my-stuff-in` first!

Here's [another resource about downloading video clips](http://resources.learninglab.xyz/simple/projects/SOCIOL1142/Found-and-archival-footage).

You can also use online methods at your own risk.




![alt text](https://files.slack.com/files-pri/T0HTW3H0V-F03TZQR64P9/jk-gif_540.gif?pub_secret=09a531bbf4)