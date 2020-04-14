/*
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
*/


// URL - https://www.thecocktaildb.com/api/json/v1/1/random.php?key=1

//let randomDrinkInstructions = results.drinks[0].strInstructions