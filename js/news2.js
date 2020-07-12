let image = document.querySelectorAll(".image")
let titles = document.querySelectorAll(".titles")
let finance = document.querySelector("#finance")
let more = document.querySelectorAll(".more")
let by = document.querySelectorAll(".by")
let time = document.querySelectorAll(".time")
var i;

async function fetchingData2(){
    const res= await fetch("https://content.guardianapis.com/search?q=finance&order-by=newest&api-key=4975a27a-c959-4e42-a2ea-359f7455f98d")
    const data = await res.json()
    for(i=0; i<data.response.results.length; i++){
        titles[i].textContent = data.response.results[i].webTitle
        more[i].href = data.response.results[i].webUrl
        time[i].textContent = data.response.results[i].webPublicationDate
    } 
}

    fetchingData2()