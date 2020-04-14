/*
This overview goes along with the Demo of API's. 

First we will step through a few examples of API's. 
> We'll be using Postman (the app you downloaded) to 
understand and then test the API. 
> Then we will copy the URL of the API from Postman, 
paste it into appStudio, and process the data it returns. 
> All of the API's we are using are REST API's RESTful API) - that means 
we are 'contacting' a server that will be processing our API request
and sending back the results. REST is fast, small, and uses 
an HTTP request (using HTTP verbs GET, PUT, POST, DELETE). 
********************************************************

1. Let's look at Postman first. 
> open Postman on your laptop
> create a collection named 'Demo APIs'
> create a new request and save it into that collection - name it 'Get Words'
  Put this URL in the comments: https://noopschallenge.com/
> tour the interface - Postman not only CAN make API requests, 
  but it returns the results in JSON so you can look at them. 

********************************************************

2. We'll do an Open API first.  Open means you do not need a 
key (like a password) to send a request and receive data back. 
These are usually just for fun. 

I found this API just searching around on Google - there are TONS of 
free API's out there. 

> Go to https://noopschallenge.com/
> scroll down, click on the WordBot one
> this is an api that returns words of a certain category to you. 
> open Postman and go to your new Get Words request
> complete the top right in Postman based on information on WordBot page 
    - base URL
    - parameters: set and count
> run the request
> look at results


let secondHorse = results.words[1]


********************************************************
********************************************************
Activity 1: Simple API using Postman with Star Wars Open API

Use the Star Wars API described here: 
https://swapi.co/documentation#base

Create a new request in your Demo API's Collection named 
Star Wars People. Use the people/1 endpoint to see 
information about the first Star Wars person in their database. 
Run it and look at the results. 
Can you see that to get the 'name' of this person, in appStudio 
if the data returned are in a variable 'results', 
you would write code like this: 
     results.name
********************************************************
********************************************************

3. Now for an API that requires a key. 
> create a new request 'Holidays 2019'
> get a free API key at https://holidayapi.com 
(it will sign you up for a free account that is good 
for 10,000 requests)
> then click on the top menu > Developers or 
go to https://holidayapi.com/docs for the documentation
> This page shows the information you will need
- base url: https://holidayapi.com/v1/holidays
- required parameters: 
    key = your API key from them
    country = US
    year = 2019 or earlier (free account can't access current year)
> run it and look at the results
> to access New Years Day - 
    results.holidays[0].name is "New Year's Day"
    curleys mean a '.' (object)
    
    results.holidays[0].weekday.date.numeric is "2"
    
    
    
    let firstHolidayName = results.holidays[0].name
    
    
    
   let firstHolidayDayOfWeek = results.holidays[0].weekday.date.name
    
    
********************************************************
********************************************************
Activity 2: Simple API using Postman and a key field
Go to https://www.thecocktaildb.com/api.php?ref=apilist.fun 

We will be using the test API key: 1

If you want to do more with filtering, you have to sign up 
for a $2 account (link on the website). 
    
Your goal: look up a random cocktail using Postman. 
Create a new request in your Demo API's collection named 'Random Cocktail'.
Then if you were in appStudio and the data from your API 
call were stored in a variable 'results', the code to access
the name of the drink in appStudio would be: 
        results[0].strDrink
        
What would the JS code be to access the instructions to make
the first drink?

********************************************************
********************************************************

4. Now for a more complex API request. In this one I'll go 
through the process of getting an API key, and then using 
a commerical grade API request with paramters. 

a) We are going to use an API from Google Maps that lets you get 
data about all the restaurants near Harper. 

> log into your Google account so you don't have to do this later. 
> in the same browser, go to 

   https://developers.google.com/places/web-service/intro  
   
> On the left side menu, make sure 'Overview' is selected. Then click on 
  'Introducting the API', open the choice 'Place Search' in another tab. 
  This is the API we are going to use. 

> Near the top, under 'New Users' click on the Get Started button. This takes
  you to the 'Google Cloud Platform'. This is like your dashboard.

> First you have to create a new Google project which will be associated with your 
  API key. On this Google Cloud Platform Console, at the very top (next to 
  the words Google Cloud Platform), there is a dropdown. Click on it and a 
  new popup will appear. 
> on the popup, click 'New Project' in the top right corner to make a new project. 
> Name the project 'Google Places Demo Restaurants' and click Create. 
> Your project will be created - then back on the Console to create an API key. 
> Back in the Google Cloud Platform, on the top dropdown, pick your new 
  'Google Places Demo Restaurants' project. 
> on the page showing the different API names and logo's in squares, pick 'Places' 
  and click on Enable to enable the Places API for this project. 

> Next we'll get an API key. This is associated with a project - in this case, 
  'Google Places Demo Restaurants' since that is the project that has been chosen. 
  Follow along.
   - click the Hamburger menu top right and pick API's and Services > 
     Credentials. 
   - on this Credentials page, click Get Credentials at the top center, then
     API Key. The credential you want to get is an API key. 
   - On the popup, first copy your API key and paste it into Notepad or 
     somewhere you can find it again. Don't close the popup yet. 
   - Then, on the popup, pick 'Restrict Key' (on bottom right). We are going 
     to put a few restrictions on your key in case someone gets it and 
     wants to do bad things with it. 
   - Scroll down to API Restrictions (near bottom), and click 'Restrict key'. On 
     the dropdown that appears, pick 'Places API' so you key can only be used for
     Google Places API requests. 
   - click Save. 
> Notice you are back in the Google Cloud Platform Console, and in the API Keys
  section, your new API key is shown. You can also get a copy of it here if needed later.
  

b) Now return to the 'Places Search' documentation page you had opened earlier in a 
   new tab. It is at 

   https://developers.google.com/places/web-service/search
   
   This is a API we are going to use. We are going to get all of the restaurants 
   near the Harper Center. 

> scroll to the first pink line - it contains a sample endpoint URL for Places. 
  Notice that it has two placeholders in it: 'output' and 'parameters'. YOu can see 
  them in the URL: 
  
  "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters"

c) Now go to Postman
> create a new Request in your Demo APIs Collection. Name it 'Google Places Restaurants 
  by Harper'. Open the request if it isn't already open. 
  
d) Back at the Places Search API in the browser.
> Scroll down to the 'Nearby Search requests' heading. That is the API we want since we 
  want to search for restaurants by Harper. 
> in the pink line, copy and past the endpoint url into the url space in Postman. 
  We will use GET. Notice the placeholders 'output' and 'parameters'.
  
  https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters
  
> Now set up the parameters for the request in Postman. 
  - remove the placeholder word 'parameters' after the ? in the url
  - change 'output' in the url (in Postman) to 'json' as that is the type of 
    output we want. 
  - there are 3 required parameters: 
    key (your authentication key)
    location: latitude and longitude of Harper Center 
        I googled changing an address to lat, long and did so: 
        41.276900,-95.942310
    radius: won't need this
  - then there are optional parameters. We'll use these: 
    rankby = distance (proximity to Harper)
    type = restaurant (see there are many possiblel types)
> Run the request. 

e) Results of Request
> look at the JSON results
> if you were going to use these results in appStudio, how would you access 
  the data? 
   - if you wanted the name of the closest restaurant: 
   results.results[0].name is:  "Get N Go Fish"
   
   - if you wanted to know if the second closest restaurant was open right now: 
    if (results[1].opening_hours.open_now == true)
       // go there
    
    this is boolean value (true or false)
   
********************************************************
********************************************************
Activity 3: find pizza places with the Google Places API

Create a new request in your Collection. Name it
'Google Places Pizza' in Omaha'. 

Now you will add the information for the request. 
> add the base url as needed (look in the pink line holding the url
  for this section). 
> change 'output' in the url to 'json' as that is the type 
  of output you want.
> remove the placeholder word 'parameters' after the ? in the url
> Add the required parameters: 
   query - add this one: "pizza places in Omaha"
   key (you already have this) - put last
> remove the other parameters that you won't need in this API request. 
> Add Optional parameters
    location - use latitude, longitude of Omaha, NE (look up on Google)
    radius - size of circle around location to report 
 
 In appStudio, how would you access and output to the console
 the name of the third pizza place returned? Assume the data is 
 parsed into a variable named 'results'.

 Show the code for accessing it. 
 
********************************************************
********************************************************

5. Now to return to appStudio and call an API using code. 
We can use the URL generated and tested in Postman for 
our JS code in appStudio. 

Let's do the Google Restaurants API. 

a) Go to the GoogleRestaurants form in appStudio. 
b) We are going to get all of the restaurants by the Harper Center. 
   Then we'll show the name, address, and phone number of the 
   closest five. We used the parameter 'rankby'= 'distance'
   so the results are in closest to farthest order. 
c) Let's walk through this code and talk about what it does
d) Now let's make the changes we need
   - put proper headers in 
   - call it when the user clicks a button on the form


********************************************************
********************************************************
Activity 4: appStudio and Places API

Export the GoogleRestaurants form and then import it into 
this project. Rename the form 'Activity 4'.

Copy your request url from Postman and paste it into the 
requestURL value on the first line. 

Recreate the event handler calls and adjust the names of 
controls as needed. 
Use the same API request only with your credentials from 
Postman. 

Now, change the code so that the restaurant name, address, 
and rating as shown below is displayed in the textarea.

    Get N Go Fish
    2327, 1706 North 24th Street, Omaha
    Rating: 4.6

    Emery's Cafe
    2118 North 24th Street, Omaha
    Rating: 4.2

    etc. 

********************************************************
********************************************************


*/
btnGoogleRest.onclick=function(){
  ChangeForm(GoogleRestaurants)
}

btnBlankAPI.onclick=function(){
  ChangeForm(BlankTemplateAPICode)
}

btnActivity1.onclick=function(){
  ChangeForm(Activity1)  
}

btnActivity2.onclick=function(){
  ChangeForm(Activity2)  
}

btnActivity3.onclick=function(){
  ChangeForm(Activity3)  
}

btnActivity4.onclick=function(){
  ChangeForm(Activity4)
}
