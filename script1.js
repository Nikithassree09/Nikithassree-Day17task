let Kabul=document.getElementById('Kabul')
//let Washington=document.getElementById('Washington')
//let Kabul=document.getElementById('Kabul')
//console.log(Kabul)

let weatherContainer2=document.getElementById('weatherContainer2')
//console.log(weatherContainer2)

let apiKey=`791e0ebcfde550054db39d08799864a3`

async function getData(){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=Kabul&appid=791e0ebcfde550054db39d08799864a3` 
    //console.log(url)
    let data=await fetch(url)
    let res =await data.json()
    console.log(res)
    const {main}=res
    weatherContainer2.style.display="block";
    weatherContainer2.innerHTML=`
    <ul class="list-group list-group-flush">
                <li class="list-group-item">Temperature: ${main.temp}</li>
    </ul>
    `

}
getData()

let weatherContainer=document.getElementById('weatherContainer')
//console.log(weatherContainer)


async function getData1(){
    let url1=`https://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&appid=791e0ebcfde550054db39d08799864a3` 
    //console.log(url1)
    let data=await fetch(url1)
    let res =await data.json()
    console.log(res)
    const {main}=res
    weatherContainer.style.display="block";
    weatherContainer.innerHTML=`
    <ul class="list-group list-group-flush">
                <li class="list-group-item">Temperature: ${main.temp}</li>
    </ul>
    `

}
getData1()

let weatherContainer1=document.getElementById('weatherContainer1')
//console.log(weatherContainer1)

async function getData2(){
    let url2=`https://api.openweathermap.org/data/2.5/weather?q=Washington&appid=791e0ebcfde550054db39d08799864a3` 
    //console.log(url2)
    let data=await fetch(url2)
    let res =await data.json()
    console.log(res)
    const {main}=res
    weatherContainer1.style.display="block";
    weatherContainer1.innerHTML=`
    <ul class="list-group list-group-flush">
                <li class="list-group-item">Temperature: ${main.temp}</li>
                
    </ul>
    `
}
getData2()