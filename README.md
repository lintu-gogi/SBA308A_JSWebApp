#Objectives
*Use asynchronous JavaScript tools to build a responsive web application.
*Demonstrate understanding of the JavaScript event loop.
*Generate asynchronous code using Promises and async/await syntax.
*Use fetch and/or Axios to interact with an external web API.
*Organize files using modules and imports.
#Technologies Used
*HTML/CSS
*JavaScript
*BootStrap
#Project Description
    Created a gallery with Cat Images.
    ## Features
    This is a single page application. Some of the informations are already preloaded.
    The user can see a set of cat pictures. These pictures are fetched dynamically from the Cat API when initializing the page.
    Then the user can select a breed.
    After selecting the breed a gallery of pictures is displayed for the particular breed.
    Used can change the selection of breed and every time the user selects a new breed a new gallery is generated.
    ##Technical Details
    Used fetch API to fetch the details from Cat API.
    Dynamically created the cards for displaying the cat images on the page load.
    Used Carousal from Bootstrap for displaying the image gallery for the particular breed. Carousal is creating dynamically depends on the number of images fetching from the Cat API.
