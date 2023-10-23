setInterval('runApi()',30*1000);
runApi()
async function runApi(){
    const url = 'https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd51c4956fbmsh99f07c297b7e547p1b0b0ajsnf570b7d54bc4',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    };
    apiText = document.getElementById("apiText");
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const myObj = JSON.parse(result)
        const text = myObj.number + " is " + myObj.text;
        console.log(result);
        apiText.innerHTML = text;
    } catch (error) {
        console.error(error);
        apiText.innerHTML = "There has been an error calling the api.";
    }
}
