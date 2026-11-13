CONTRIBUTING GUIDELINES

> Look at the previous code to see how everything is organized.

# New Member
1. Import the headshot photo of the new member into the corresponding folder under `public/boardPhotos/[year]/[team]`. 
2. Go into the specific `.ts` file where you want to add a new member and add their information into the correct team/committee. 
3. Make sure the path to the headshot is correct.

# New Semester
1. Make a copy of `template.ts` under `src/Board Page/data` and populate with the new board's data.
2. Under `Board.jsx`, set the default state for `year` as the newest year. 
3. [TODO: need to make header into its own component]