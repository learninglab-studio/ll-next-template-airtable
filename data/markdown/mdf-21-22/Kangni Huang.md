---
tags: fellows
---

# Kangni Huang
**Department:** EALC
**Course:** CHNLIT140 - Wai-yee Li

My project is to build a database of visual materials for premodern Chinese fiction for students and faculty members. Technically it is not for any specific course, but the students who are taking courses on premodern Chinese fiction can potentially use the database to search for related visual materials to assist their reading and/or final projects. Falculty teaching these works can also use the database to easily find materials for their class. At this stage I'm mostly thinking about including illustrations, but the database can cover more materials/periods in the future.

 * develop bare bones database for illustrations to chinese novels
    * students can draw on these for final projects
    * Airtable potentially
    * how do we collect the data?
    * interested in all kinds of dataVis and mapping tools that students can use in humanities classes
        * visualizing space in a novel


### mk notes 20211018

* initially wanted to scrape data so she didn't have to do manual data entry, but she just started manual data anyway.
* exploring image annotation in Airtable with the "Image Markup" Airtable plugin
* Chinese 166R
* Python
* maybe get data in and out of Airtable
* next show and tell => start an airtable of images
* then do something interesting with this table


### Show and Tell, 20211112
![Kangni and her database](https://files.slack.com/files-pri/T0HTW3H0V-F02LQTS891V/screen_shot_2021-11-12_at_10.39.10_am.png?pub_secret=fc1b175fa5)
Kangni is working on creating a searchable database where students and professors can search for illustrations in pre-modern chinese literature.

Illustrations are generally regarded as less important than paintings, so they are a bit harder to find.

Kangni is using Airtable to organize and store the data. She is trying to optimize the records to make them searchable for students. She's also annotating the images in Airtable using the Image Markup block and the comments feature in Airtable. (She's finding the comments feature a bit easier to navigate than the block.)

Kangni is starting to think about how to develop tags that, for instance, note the themes of the illustrations, characters that appear in multiple illustrations, and chapters that have been illustrated by multiple artists. One idea was to involve students in the process of coming up with and/or assigning tags to the illustrations. Could there be a project or assignment that asks students to do this? It might be interesting for students to discuss the different tags that could apply to a single illustration or a group of illustrations.

Ideas for Kangni:
* You can use a multiselect field to add tags!
* Create a table of artists or texts to use it as a linked field so that you don't need to type their names over and over again.
* It would be cool to make a script that let us store the Image annotations/comments within the base, instead of on Airtable's servers (where we can lose them...😬). 