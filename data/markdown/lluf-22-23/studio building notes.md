# studio building notes


almost always you will have the hubB outputs set to either 11, 12, 13, or 14. that is bc we are doubling up on what we send to the hyperdecks so we can more easily see if we are making any wierd mistake (since it's hard to monitor the hyperdecks otherwise bc they are up in the shelf) so:
* 11 = ME1
* 12 = ME2
* 13 = ME3
* 14 = ME4

now, we have connected atem outputs 9-20. so those are technically your options for what to send out to the studio when your'e in the hubB control app. But, again, we will mainly just choose 11_a8k.11, 12_a8k.12, 13_a8k.13, and 14_a8k.14.

we can temp name the hubB outputs to help us know what our sources are for a given event- if you rename something for an event you run, you are responsible for changing it back after the event! 

you may choose to do a station where you want students to see only the camera (like a c200) they are working with. so you would want a direct feed from that camera to the monitor they have with them. So in that case, you'd send something like output 17 in the hub control to purple.09_temp_label_for_that_tv (you can temp rename that hubB output in videohub setup app). Then in the atem, you set the output 17 to the camera you set up.


## LLUF notes:
"input" cables (running from e.g. cameras, computers into hubA) are usually blue, green, or red. "output" cables (running from hubB out to e.g. screens, projectors) are usually purple or green.

when troubleshooting, make sure signal is flowing in one direction, i.e. that the input source is connected to a cable running into hubA and the output display is connected to a cable running out from hubB.

these are coaxial cables, which you connect by plugging the ends together and twisting to lock them. you'll need an adapter to connect two cable ends of the same type (male-male or female-female)

the four ME outputs from ATEM (ME 1-4) are output feeds that can be set to display different sources and that you can apply effects to (for example, a green screen key). for a given event, you'll probably have a set of inputs and effects that you'll want to switch between, so you can set those up on the ME outputs and change them as needed. for instance if you have a camera with a wide shot, a camera with a close-up, the overhead camera, and the feed from a computer screen, you could assign each of those to one of ME 1-4.