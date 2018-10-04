# Physician Scheduling App

This app has a very specific use-case: rapid doctor's schedule creation. Source data varies from notes in emails, to spreadsheets, to actual sheets of paper with random people's writing stuff :-) WIP Screens available [on my website](http://videlsmith.com/). 

Current project status: Cleanup Mode. Way back when I started working on this I wasn't sure what it would be and it kind of went from 'lets play with this or that' to 'I NEED a Prod version of this ASAP...' and slowly but surely features were made while tests were not written and basic checks and balances and propTypes and app architecture were kind of disregarded. But No More!!! :-) So I'll take a few weeks and re-visit the folder structure/design pattern, write some tests, add some type checking, and actual documentation.

## Tools and Libraries Used
* React
* Redux
* SASS
* xlsx-populate
* Firebase
* FontAwesome Icons
* Google Fonts
* Balsamiq for the initial mockup

## Project is still WIP, but to check it out:
* Clone/Download
* NPM Install While In PhysicianSchedules Folder
* NPM Start

## Next Steps and Tweaks
1. Currently building out an Auto-Fill feature that uses business logic to fill in parts of the calendar automatically
2. After that, I will clean up the styling and verify cross-browser compatibility
3. Add the calendarView portion of the app
4. I have a 'helpful files' folder that I need to clean up and make into a standard thing that I import for all of my projects

Also, currently digging into cypress.io for UI testing.
