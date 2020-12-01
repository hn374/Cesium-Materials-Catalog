# Cesium Take Home Assignment

I started this project out with a boilerplate Lit-Element repository. I have never used Lit-Element before, but I figured it looked easy enough to try to learn and I enjoy learning new technologies. Fortunately, I had a lot of prior experience with React and it seemed that Lit-Element and React shared a lot of similarities. 

I spent a little over 3 hours total in the span of about 4 days working on this project. I was able to complete most of the requirements in time except for the color picker. I had to trade that feature off in order to create documentation with  JS Docs and Unit Tests with Jasmine, both of which I have never used before. 

I was able to add, delete and change the properties of the materials. You are also able to click on each item in the list and it will be displayed on the right side. I also created a function to calculate the total cost of all the materials. 

The server is an Express.js server that basically just feeds some mock data into our application so it can load as materials. 

Overall, I really enjoyed this project and found myself in a flow state of working once I got started.
## Questions and Observations

A question that I had was that I wasn't sure if I was suppose to make the entire page the component, or just the individual parts.

I also was not sure if this materials catalog would be used for other purposes, if I had more time I would have made it reusable where you can make it any type of catalog you want. 

## If I Had More Time

If I had more time for this project, I would fix a lot of the small details with the component. For example, I would allow the total cost to be able to add cents so it's not just the base dollar amount. I would also add some icons for the Add and Delete buttons.

Some bigger features I would implement would be the color picker, a delivery date picker, and input validation.

I would also try to find ways to make my code more concise and clear. There are also some weird lines of code that I need to polish up, like when I am removing an element from the materials list, that item that was in the list of materials array is just undefined instead of completely removed.

If I had more time, I would also have started this project differently. I would have made the left list of materials a separate component, and I also would have made each item in that list a single component that could be reused. The labels and inputs on the right side also would have been a single component if I had the time. I decided to make it all in one file because I figured it would be faster since I only had a time limit of 3 hours.

## Preparation To Run The Project

Clone the repository from Github. 

Make sure to install the needed node_modules, either by running `npm install` or `yarn`.

## How To Run The Project

To run the project, open up two terminals.

On one of the terminals, run `npm run server` to start the server. This is how you are going to get the data for the materials list.

On the other terminal, run `npm run serve` to start the web application. After that, you should go to `http://localhost:8000/dev` to see the materials catalog.