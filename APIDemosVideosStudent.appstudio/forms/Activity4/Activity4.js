
/*
function addtoDB() {
// add data to DB if you want to - just some sample code

// need to add/use global database password, query, and results variables to project
    query = "whatever"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=" + pw + "&database=clc90595&query=" + query)

    if (req.status == 200) { //transit worked.
        // code goes here to process data or check for 500 code
    } else 
        // transit error
        NSB.MsgBox("Network error: " + req.status)
}
*/

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    //for (i = 0; i <= apiData.results.length - 1; i++) {
   for (i = 0; i <= 4; i++) {
        //console.log(`${apiData.results[i].name}`)
        message = message + apiData.results[i].name + "\n" + apiData.results[i].vicinity + "\n" + apiData.results[i].rating +"\n"+ " " + "\n"
    }
    // change name of textArea below
    txtaRest.value = message
    
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
        xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    
    // if you DON'T need cors use this code
        //xhttp.open('GET',URL)
    
    // if you need to set the returned data type, use this line of code: 
        //xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
        // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
        
        //xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
        //xhttp.setRequestHeader('location','41.276900,-95.942310')
        //xhttp.setRequestHeader('rankby','distance')
        //xhttp.setRequestHeader('type','restaurant')
        

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}




Activity4.onshow=function(){
  txtaRest_contents.style.height = "100px"  
}

btnSeeResults.onclick=function(){
  callAPI(requestURL)
}
