# Givebutter Frontend Take-home

## Overview

Our goal is to fix and enhance a Pokedex application. If you are unfamiliar with the world of Pokemon, here is a brief explanation:

> The Pokedex is an electronic device created and designed to catalog and provide information regarding the various species of Pokemon featured in the Pokemon video game, anime and manga series.

[Source](https://pokemon.fandom.com/wiki/Pokedex)

Our version of the Pokedex is able to list and search through Pokemon. However, our search is a bit buggy. Additionally, we want to add a feature that shows a selected Pokemon's details like its **type**, **moves**, and **evolution chain**.

Your time is valuable, and we are extremely appreciative of you participating in this assessment. We're looking to gauge your ability to read and edit code, understand instructions, and deliver features, just as you would during your typical day-to-day work. We expect this test to take no more than one to two hours and ask to complete this work within the next two days. Upon submit, we will review and provide feedback to you regardless of our decision to continue the process.

Please update and add code in `App.js` and `index.css` based on the requirements found below. Additionally, we ask you to edit the `readme.md` with answers to a few questions found in the `Follow-up Questions` section also found below.

When you are finished, please upload your completed work to your Github and invite `@gperl27` to view it. **Do not open a PR please.**

## Setup

- This repo was scaffolded using `create-react-app`. As such, this app requires a stable version of `node` to get up and running.
- Clone this repo and run `npm install`.
- To run the app, run `npm start`.
- Please reach out to the Givebutter team if you have any issues with the initial setup or have any problems when running the initial app.

## Requirements

### Search

- Typing in the search input should filter the existing Pokemon list and render only matches found
- Fix any bugs that prevent the search functionality from working correctly
- If there are no results from search, render "No Results Found"
- The search results container should be scrollable
- The UI should match the below mockup

![](mockup0.png)

### Details Card

- Clicking "Get Details" for any given Pokemon should render a card that has the Pokemon's `name`, `types`, `moves`, and `evolution chain`
- Use the api functions defined in `api.js` to retrieve this data. Adding new endpoints or editing existing ones are out of scope
- The details card should match the below mockup

![](mockup1.png)

## Follow-up Questions

Please take some time to answer the following questions. Your answers should go directly in this `readme`.

- Given more time, what would you suggest for improving the performance of this app?

    - `Answer:` 
        - I'd probably want to just ship it out and get some real world data to see where things are showing strain. I don't imagine this app would have too many performance issues given the dataset but I'd try to follow the data where it takes us. 
    
        - One thing I do usually like to do on search inputs like that is debounce the submission  so it's not firing on each keystroke. Would be good to look into cacheing and pre-fetching too. 

- Is there anything you would consider doing if we were to go live with this app?

    - `Answer:` 
        - Obviously there's a ton that could be done in terms of styling and making things look good. I'd also like to spend some time organizing the code and building out some UI components. Different views, routing, you name it.

- What was the most challenging aspect of this work for you (if at all)?
  
  - `Answer:` Two things.  
    1. Recursion problems always prompt some googling...
    2. Walking the line between doing some extra and following instructions to the letter. My instinct is to clean up the code and tweak on the UI till things look good, but there were some specific instructions about matching the comps. So I tried to match things as much as I could and held off on bringing in sass to organize the css. Would have helped a bit but it would have also added a dependency. I did end up re-organizing the main component and renamed a few vars to make things read a better. I also ended up breaking the details into it's own component even though instructions said work in the `App.js` and `index.css` files. Hope that's cool!