CONTRIBUTING GUIDELINES

> Look at the previous code to see how everything is organized.

The primary file you will be contributing to is `eventsData.ts`. The element in the array named `Current` is for any upcoming events. The element in the array named `Previous` are for any past events that have passed in the semester. Any other element are for previous semesters.

# New Events

1. Download the flyers from the original Canva file and place them under the corresponding semester folder under `public/eventFlyers`. 
    * Make sure all the files are named with underscores instead of spaces.
2. Within `src/pages/Events Page/eventsData.ts`, move any past events into the `events` array under `Previous`. 
    * Make sure it is placed in chronological order (newest at the top, oldest at the bottom). 
3. Add the new event under the `events` array under `Current` with the correct image path and alt text. 
4. Make an announcement about the event in the Announcements page!

# End of Semester
1. If the semester has finished, make a new element under the `eventsData` array and name it the corresponding semester name.
2. Move all the events under `Previous` into that new element and reset the `Previous` element to have an empty array under the `events` property.