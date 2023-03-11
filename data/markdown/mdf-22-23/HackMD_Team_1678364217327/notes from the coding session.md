---
tags: orientation
---

# notes from the coding session

coding is about learning how to learn
and seeing what happens when you vary properties!

### some terms
**git**: the tool that everyone in the software industry uses to manage all of the changes being made to some large-scale chunk of code (which is called the repository)

**github**: the most popular place online to store code; it's like the google drive of code (if you're excited about code, you should make a github account - and we can help you get set up with this!)

**terminal**: where we talk to the computer. it's text-based. learn this space if you're going to do a lot with coding
command + space + type in 'terminal' and it'll open for you (on Mac)
Can open a new window with command + N

**directory**: where you're located in a folder/file system (so, usually you're pulling up the directory to get into a specific folder)

**object**: thing contained in the curly brackets {}

### in terminal:
* type "pwd" (present working directory) to find out where you are
* you cannot click your mouse anywhere you want in terminal but if you press option and then click, you'll be able to get to where you want. OR you can use the arrow keys
* let's find our way to the folder where our code is
    * "ls"
        * list (shows us what's in the folder we're in right now)
    * "cd Development"
        * change directories into Development (this is where the file is with our code so that's why we're heading there)
    * "code ." 
        * open visual studio code
        * vs code is a coding editor
* let's run a server on our local machine. in the mdf-orientation-next-sandbox folder in terminal type:
    * "npm run dev"
* go to web browser and type in "localhost:3000"
    * our computer is now the client (the machine logging into the webpage) and the server (amazon, google, apple - whoever has the computers in a datacenter sending back the html you asked for)
* in vs code
    * pages
        * index (this is our homepage)
        * next looks in this folder called "pages" and takes every file in there and renders a page from it
        * these are all javascript files
    * change things in here!
        * change the description of different descriptions
        * make sure to hit command + s to save the changes you're making
    * styles
        * Home.module.css
        * styles take the plain text and manipulate it - make it a cool font, color, put a box around it, etc.
        * h1 (which is the title) - try to change the font size
        * p
    * pages > api
        * api routes are a way for people on the internet to get data from you
        * "lyrics with sentiment"
            * go to browser and type in localhost:3000/api/lyrics-with-sentiment-formatted?artist=adele&song=hello
            * Taylor%20Swift&song=Welcome%20to%20New%20York
        * mdf-airtable.js
            * go to browser and type in localhost:3000/api/mdf-airtable?user=FirstName%20LastName
            * copy the text that appears on the webpage
* go back to vs code > pages > index.js
    * type in "var my person = " and then paste in all of the stuff from the webpage you copied (make sure there's a space between "person" and the text you paste in)
    * hit return at all of the brackets, colons, commas so you can figure out what the parts of this are
    * add a new tag
        * <pre>{JSON.stringify(myPerson, null, 4)}</pre>
* let's generate one page from airtable data (still in index.js)
    * we have a page that has one record of an mdf with nested properties and values of that record
    * we're going to change the properties a bit by going into the curly braces:
        * <pre>{JSON.stringify(myPerson.result.fields, null, 4)}</pre>
        * add {myPerson.result.fields.Name} as a line of text (try adding it to h1 and it'll turn it into the heading on the webpage)
* go to w3schools's resource on HTML images to insert an image (you'll see the code you need to use on their website)
* other terminal commands to try out
    * "youtube dl [paste youtube link]"
        * way to download videos from youtube
* coding languages at harvard/how they're used
    * **python** used for research process for a given lab or faculty member's outfit is working on
    * **javascript** used for the web (we use it a lot at the LL because the types of projects MDFs and we worked on involve getting things on the web)

### resources
* [npmjs.com](https://www.npmjs.com/)
* [w3schools](https://www.w3schools.com/)

