---
tags: scroll-lab
---

# scroll-lab embed tests

let's try embedding the scrolly sites we create in hackmd to see what happens.

## mk's rebuild of anna's hello.html

<iframe src="https://mk-scroll-lab.vercel.app/people/anna/hello-all-the-poems" width="100%" height="720px" frameborder="0"></iframe>

we should try to figure out the best practices for embedding these things. Questions include:

- what should be the width we target for hackmd? 
- can we add media queries to the css that will work well in hackmd?
- where do the intersections and steps happen? so far it doesn't seem to me to match up with what would happen if you just viewed the original page in a browser at the specified width and height.

