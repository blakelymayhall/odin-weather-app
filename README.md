# odin-weather-app
Repo for the weather app project in the javascript course of the Odin Project

# Working Notes
### 11/15/23
- Before reading the prompt for this effort, I established the repo and also setup Webpack, Linter, and Prettier extensions for the project 
- Made a quick hack to test the API to see what the data looks like:
    - ![Alt text](design/image.png)
    - ![Alt text](design/image1.png)
    - ![Alt text](design/image3.png)
- Also refactored to try out the other syntax (rather than promise, async)
- Quick stab at the design:
    - ![Alt text](design/design.png)
    
### 11/20/23
- Got the initial html set up. Its pretty ugly, will need some cleaning, but I will try a different approach this time and focus on that near the end
- Going to try to recall some model-view-controller stuff from the Swift lessons I did a while ago 
    - Last project got a bit ugly with just a "DomManager"...

### 11/26/23
- Start MVC design with most simple part of page - the header bar
	- Yikes, this was harder than I thought it would be
- Need to spend some time thinking about this and researching.. its a bit fuzzy how this should all be implemented for maximum usefulness

### 11/27/23
- I am reading into it, and it sounds like implementing MVC from scratch is not recommended and very difficult... there are frameworks for this sort of thing and I am not sure it is a useful way to spend my time
- Gonna start over - I am not sure how to fix this 

### 11/28/23
- Came up with new organization idea - passing an interface layer into modules that need to update parent variables
- Appears to work - implemented header bar and the ability to update the location

### 11/29/23
- Figured out how to get async calls to the api working
- Implemented input validation for city state via regex and a catch on the api call
- Implemented settings form (not yet hooked up)
- Implemented left card functionality 

### 11/30/23
- Implemented the remainder of the controls - navbar, settings changes, right card

# Todo
- Plan is to get all the right hooks in place then spruce up the UI
- Use the location in the api response in the header bar 
- make settings matter

UI:
- Refactor backgrounds to be cleaner, sleeker
	- Use gifs? Better icons?
- Change the check box in settings to a toggle switch
- Change the combobox to toggle switch in settings for temp
- Make so you get the proper hover on the close settings button
- Show "loading" when waiting for API
- Grey out the hours that have already passed