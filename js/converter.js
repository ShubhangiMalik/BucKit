var baseCurrency = document.querySelector("#baseCurrency")
var quoteCurrency = document.querySelector("#quoteCurrency")
var text = document.querySelector("#text")
var amount = document.querySelector("#amt")
var base = document.querySelectorAll(".base")
var quote = document.querySelectorAll(".quote")
var amtValue = document.querySelector("#amtValue")
var convertedValue = document.querySelector("#convertedValue")
var qValue = document.querySelector("#quoteValue")
var bValue = document.querySelector("#baseValue")
var result = document.querySelector("#result")
var convert = document.querySelector("#convert")
var time = document.querySelector("#time")
var i
var weekBtn = document.querySelector("#weekBtn")
var lastMonthBtn = document.querySelector("#lastMonthBtn")
var monthBtn = document.querySelector("#monthBtn")
var buttons = document.querySelector(".buttons")
var max = document.querySelector("#max")
var min = document.querySelector("#min")
var avg = document.querySelector("#avg")
var vol = document.querySelector("#vol")
var vol1=0
var vol2=0
var vol3=0
var max1
var max2
var max3
var min1
var min2
var min3
var avg1=0;
var avg2=0;
var avg3=0;
var data=document.querySelector("#data")
var week = document.querySelectorAll(".week")

// var ctx = document.getElementById('myChart').getContext('2d');
// var ctx2 = document.getElementById('myChart2').getContext('2d');
// var ctx3 = document.getElementById('myChart3').getContext('2d');



// Chart.defaults.global.elements.point.hoverRadius='6'
// Chart.defaults.global.elements.point.radius='3'
// Chart.defaults.global.elements.point.borderWidth='0.5'
// Chart.defaults.global.elements.point.backgroundColor='rgba(255, 99, 132, 0.3)'
// Chart.defaults.global.defaultFontColor = '#F0F0F0'
// Chart.defaults.global.elements.line.borderWidth='6'
// Chart.defaults.global.elements.line.tension='0.2'




// let dayNames = {
//     0 : "Sun" ,
//     1 : "Mon" ,
//     2 : "Tue" ,
//     3 : "Wed" ,
//     4 : "Thu" ,
//     5 : "Fri" ,
//     6 : "Sat" ,
// }

// let monthNames ={
//      1 : "Jan" ,
//      2 : "Feb" ,
//      3 : "Mar" ,
//      4 : "Apr" ,
//      5 : "May" ,
//      6 : "Jun" ,
//      7 : "Jul" ,
//      8 : "Aug" ,
//      9 : "Sept" ,
//      10 : "Oct" ,
//      11 : "Nov" ,
//      12 : "Dec" 
// }

async function fetchingData(){
    const res = await fetch("https://fcsapi.com/api-v2/forex/converter?symbol="  + baseCurrency.value + "/" + quoteCurrency.value + "&amount=" + amount.value + "&access_key=FBcfjcpUx2L3uN2A3ZwIOd2tnYeyENIaU5vDI8W7h25LJCZps")
    const data = await res.json()
   
            result.classList.remove("hide")
            amtValue.textContent = amount.value
            convertedValue.textContent = data.response.total
            time.textContent = data.info.server_time
            qValue.textContent = data.response[Object.keys(data.response)[0]]
            bValue.textContent = data.response[Object.keys(data.response)[1]]
            for( i=0; i<3; i++){
                base[i].textContent = baseCurrency.value
                quote[i].textContent = quoteCurrency.value
            } 
}


// var cPrice =[] ;
// var tm = [];
//      async function getData(){
//          const res = await fetch("https://fcsapi.com/api-v2/forex/history?symbol=" + baseCurrency.value + "/" + quoteCurrency.value + "&period=1h&access_key=FBcfjcpUx2L3uN2A3ZwIOd2tnYeyENIaU5vDI8W7h25LJCZps")
//          const data = await res.json()
//          let x = data.response.length-1
//          for( i=x; i>( x-24); i--  ){
//          cPrice.push(data.response[i].c)
//          tm.push(data.response[i].tm)
//          }
//          return {cPrice , tm};
//      }

//     // function graphData(){
     

//     //     fetch("http://www.omdbapi.com/?s=zindagi&apikey=56d64f03")
//     //     .then((res) => { 
//     //         res.json()
//     //         .then((data) => {
//     //             return(data.Search[data.Search.length - 1].Title)
//     //         })
//     //     })  
//     // }

//     var dailyValues = [];
//     var y = new Date
//     var day = []
//     var t ;
//     var s
//     var values1 ={}
//     var monthValue=[]
//     var dateNmon=[]
//     let mon = y.getUTCMonth()
//      async function weekly(){
//          t=30
//          s=0
//      for(i=y.getDate()-1 ; i>(y.getDate() - 8) ; i-- , s++)  { 
         
//          if(i< 1){
//              if( mon >= 10 ){
//                 var res = await fetch("https://api.exchangerate.host/2020-" + String(mon) + "-" + t + "?base=" + baseCurrency.value +"&symbols=" + quoteCurrency.value)
//              }else{
//                 var res = await fetch("https://api.exchangerate.host/2020-0" + String(mon) + "-" + t + "?base=" + baseCurrency.value +"&symbols=" + quoteCurrency.value)
//              }
//             var data = await res.json()
//             dailyValues[s] = (data.rates[Object.keys(data.rates)[0]]) 
//             day[s]=t
//             t--
//             monthValue[s]=mon
//          } else{
//             if(mon >= 10){
//                 var res = await fetch("https://api.exchangerate.host/2020-06-" + String(mon + 1) + "-" + i + "?base=" + baseCurrency.value +"&symbols=" + quoteCurrency.value)
//             }else{
//                 var res = await fetch("https://api.exchangerate.host/2020-0" + String(mon + 1) + "-" + i + "?base=" + baseCurrency.value +"&symbols=" + quoteCurrency.value)
//             }
//             var data = await res.json()
//             dailyValues[s] = (data.rates[Object.keys(data.rates)[0]])
//             day[s]=i
//             monthValue[s]=mon+1
//          }
         
//      }
//      max1=dailyValues[0]
//      for(i=1;i<7;i++){
//          if(dailyValues[i]>max1){
//              max1 = dailyValues[i]
//          }
//      }
//      max.textContent = max1.toFixed(4)
//      min1 =dailyValues[0]
//       for( i=1;i<7;i++){
//           if(dailyValues[i] < min1){
//               min1 = dailyValues[i]
//           }
//       }
//       min.textContent = min1.toFixed(4)
//       for(i=0;i<7;i++){
//         avg1 = avg1 + dailyValues[i]
//       }
//     avg.textContent = (avg1/7).toFixed(4)
    
//     // for(i=0;i<7;i++){
//     //    vol1 += Math.pow(((avg1/7)-dailyValues[i]) , 2 )
//     // }
//     // vol.textContent = (vol1/7).toFixed(4)
//     for(i=0;i<7;i++){
//         day[i]>=10 ? dateNmon[i]= day[i] + " " + monthNames[monthValue[i]] :  dateNmon[i]= "0" + day[i] + " " + monthNames[monthValue[i]]
//     }

//      return ({dateNmon , dailyValues})
//      }
    
     


//     //var timeValue =[]
//     async function weeklyGraph(){
//      values1=await weekly()
//      //value = await getData()
//     //  for(i=0; i<value.tm.length - 1; i++){
//     //     timeValue[i] = value.tm[i].substr(11,5)
//     // } 
//     // console.log(value)


//       var myChart = new Chart(ctx, {
//           type: 'line',
//           data: {

//               labels: values1.dateNmon ,
//               spanGaps: true,
//               datasets: {
//                   label: 'Closing Price',
//                   fill:false,
//                   data: values1.dailyValues,
//                   backgroundColor: 
//                   'rgba(240, 52, 52, 0.5)',
                      
//                   borderColor: 
//                   'rgba(240, 52, 52, 0.5)'
//               },
//               options: 
       
//               {   
                  
//                 maintainAspectRatio: false,
//                   scales: {
//                       yAxes: [{
//                           ticks: {
//                               beginAtZero: false
//                           }
//                       }]
//                   }
//               }
//             }
          
//       });
//     }
//    var monthEqui = []
//     var monthlyValues =[]
//     var month=[]
//     var m;
    
//     var j
//     var values ={}
//     async function monthly(){
//         j=0;
//         m=12;
        
//         for(i= (y.getMonth()+1); i> (y.getMonth()- 12); i-- , j++){
//             if(i>10){
//                 const res = await fetch("https://api.exchangerate.host/fluctuation?start_date=2020-" + (i-1) + "-01&end_date=2020-" + i +"-01&base="+ baseCurrency.value + "&symbols=" + quoteCurrency.value)
//                 const data = await res.json()
//                 monthlyValues[j]=(data.rates[Object.keys(data.rates)[0]].end_rate)
//                 month[j]=i
            


//                }   else if(i===10){
//                     const res = await fetch("https://api.exchangerate.host/fluctuation?start_date=2019-0" + (i-1) + "-01&end_date=2019-" + i +"-01&base="+ baseCurrency.value + "&symbols=" + quoteCurrency.value)
//                     const data = await res.json()
//                     monthlyValues[j]=(data.rates[Object.keys(data.rates)[0]].end_rate)
//                     month[j]=i
//                 }
//             else if( i<1){
//                 if(m>10){
//                     const res = await fetch("https://api.exchangerate.host/fluctuation?start_date=2019-" + (m-1) + "-01&end_date=2019-" + m +"-01&base="+ baseCurrency.value + "&symbols=" + quoteCurrency.value)
//                     const data = await res.json()
//                     monthlyValues[j]=(data.rates[Object.keys(data.rates)[0]].end_rate)
//                     month[j]=m
//                 }else if(m===10){
//                     const res = await fetch("https://api.exchangerate.host/fluctuation?start_date=2019-0" + (m-1) + "-01&end_date=2019-" + m +"-01&base="+ baseCurrency.value + "&symbols=" + quoteCurrency.value)
//                     const data = await res.json()
//                     monthlyValues[j]=(data.rates[Object.keys(data.rates)[0]].end_rate)
//                     month[j]=m
//                 }else{
//                     const res = await fetch("https://api.exchangerate.host/fluctuation?start_date=2019-0" + (m-1) + "-01&end_date=2019-0" + m +"-01&base="+ baseCurrency.value + "&symbols=" + quoteCurrency.value)
//                     const data = await res.json()
//                     monthlyValues[j]=(data.rates[Object.keys(data.rates)[0]].end_rate)
//                     month[j]=m
//                 }
                
//                 m=m-1;
//             }else if(i===1){
//                 const res = await fetch("https://api.exchangerate.host/fluctuation?start_date=2019-" + "12" + "-01&end_date=2020-0" + i +"-01&base="+ baseCurrency.value + "&symbols=" + quoteCurrency.value)
//                 const data = await res.json()
//                 monthlyValues[j]=(data.rates[Object.keys(data.rates)[0]].end_rate)
//                 month[j]=i
//             }
//             else{
//                 const res = await fetch("https://api.exchangerate.host/fluctuation?start_date=2020-0" + (i-1) + "-01&end_date=2020-0" + i +"-01&base="+ baseCurrency.value + "&symbols=" + quoteCurrency.value)
//                 const data = await res.json()
//                 monthlyValues[j]=(data.rates[Object.keys(data.rates)[0]].end_rate)
//                 month[j]=i
//             }
            
//         } 
      
//        for(i=0; i<13; i++){
//          month[i] = monthNames[parseInt(month[i])]
//     }
//        max3 = monthlyValues[0] 
//       for(i=1;i<13;i++){
//           if(monthlyValues[i]>max3){
//             max3 = monthlyValues[i]
//         }
//     }
//     max.textContent = max3.toFixed(4)

     
//       for( i=1;i<13;i++){
//         min3 = monthlyValues[0]
//           if(monthlyValues[i] < min3){
//               min3 = monthlyValues[i]
//           }
//       }
//       min.textContent = min3.toFixed(4)

//       for(i=0;i<12;i++){
//         avg3 += monthlyValues[i]
//       }
//       avg.textContent = (avg3/12).toFixed(4)
//        return({ month , monthlyValues})

//     }

    
   
//     async function monthlyGraph(){
//        values = await monthly()
//          //value = await getData()
//         //  for(i=0; i<value.tm.length - 1; i++){
//         //     timeValue[i] = value.tm[i].substr(11,5)
//         // } 
//         // console.log(value)
       

//         var myChart = new Chart(ctx2, {
//               type: 'line',
//               data: {
//                   //lineTension:'0.8',
//                   labels: values.month,
//                   spanGaps: true,
//                   datasets: [{
                      
                    
//                       label: 'Closing Price',
//                       fill:false,
//                       data: values.monthlyValues,
//                       backgroundColor: 
//                       'rgba(240, 52, 52, 0.5)',
                          
//                       borderColor: 
//                       'rgba(240, 52, 52, 0.5)'
                     
//                   }], 
//                   options: 
       
//                   {   
                      
//                        maintainAspectRatio: false,
//                       scales: {
//                           yAxes: [{
//                               ticks: {
//                                   beginAtZero: false
//                               }
//                           }]
//                       }
//                   }
//               }
              
//           });
//         }

        
// var date =[]
// var lastMonthValues =[]



// //var ctx3 = document.getElementById('myChart3').getContext('2d');

// var monthValue2=[]
// var dateNmon2=[]
// async function lastMonth(){
//     t=30
//     s=0
// for( i=y.getUTCDate()-1 ; i> ( y.getUTCDate()-31) ; i--,s++){

//     if(i< 1){
//         if( mon >= 10 ){
//            var res = await fetch("https://api.exchangerate.host/2020-" + String(mon) + "-" + t +"?base=" + baseCurrency.value +"&symbols=" + quoteCurrency.value)
//         }else{
//            var res = await fetch("https://api.exchangerate.host/2020-0" + String(mon) + "-" + t +"?base=" + baseCurrency.value +"&symbols=" + quoteCurrency.value)
//         }
//        var data = await res.json()
//        lastMonthValues[s] = (data.rates[Object.keys(data.rates)[0]]) 
//        date[s]=t
//        t--
//        monthValue2[s]=mon
//     } else{
//        if(mon >= 10){
//            var res = await fetch("https://api.exchangerate.host/2020-" + String(mon + 1) + "-" + i + "?base=" + baseCurrency.value +"&symbols=" + quoteCurrency.value)
//        }else{
//            var res = await fetch("https://api.exchangerate.host/2020-0" + String(mon + 1) + "-" + i + "?base=" + baseCurrency.value +"&symbols=" + quoteCurrency.value)
//        }
//        var data = await res.json()
//        lastMonthValues[s] = (data.rates[Object.keys(data.rates)[0]])
//        date[s]=i
//        monthValue2[s]=mon+1
//     }
    
// }
// max2 = lastMonthValues[0] 
// for(i=1;i<31;i++){
//     if(lastMonthValues[i]>max2){
//       max2 = lastMonthValues[i]
//   }
// }
// max.textContent = (max2).toFixed(4)
// min2=lastMonthValues[0]
// for( i=1;i<31;i++){
//     if(lastMonthValues[i] < min2){
//         min2 = lastMonthValues[i]
//     }
// }
// min.textContent = (min2).toFixed(4)
// for(i=0;i<30;i++){
//     avg2 += lastMonthValues[i]
//   }
//   avg.textContent = (avg2/30).toFixed(4)
// for(i=0;i<30;i++){
//     date[i]>=10 ? dateNmon2[i]= date[i] + " " + monthNames[monthValue2[i]] :  dateNmon2[i]= "0" + date[i] + " " + monthNames[monthValue2[i]]
//     // dateNmon2[i] =  String(date[i]) + monthNames[monthValue2[i]]
// }
 
// return ({ dateNmon2 , lastMonthValues})
// }
   
// var values3 ={}
// async function lastMonthGraph(){
//   values3 = await lastMonth()
//   var myChart = new Chart(ctx3, {
//     type: 'line',
//     data: {

//         labels: values3.dateNmon2  ,
//         spanGaps: true,
//         datasets: [{
//             label: 'Closing Price',
//             fill:false,
//             data: values3.lastMonthValues,
//             backgroundColor: 
//             'rgba(240, 52, 52, 0.5)',
                
//             borderColor: 
//             'rgba(240, 52, 52, 0.5)'
            
//         }], 
//         options: 
       
//         {   
            
//             maintainAspectRatio: false,
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: false
//                     }
//                 }]
//             }
//         }
       
        
//     }   
    
// });

// }

convert.addEventListener("click", function(){
    fetchingData()
    //window.scrollTo(0, document.body.scrollHeight)
    //data.classList.remove("hide")
    // buttons.classList.remove("hide")
    // weekBtn.classList.remove("hide")
    // monthBtn.classList.remove("hide")
    // lastMonthBtn.classList.remove("hide")
    // ctx.canvas.style.display = "none"
    // ctx3.canvas.style.display = "none"
    // ctx2.canvas.style.display = "block"
   // monthBtn.classList.add("active")
    //lastMonthBtn.classList.remove("active")
    //weekBtn.classList.remove("active")
  // monthlyGraph()
  //  weeklyGraph()
    //lastMonthGraph()
})

// weekBtn.addEventListener("click", () =>{
//     weeklyGraph()
//    ctx.canvas.style.display = "block"
//    ctx2.canvas.style.display = "none"
//    ctx3.canvas.style.display = "none"
// //    monthBtn.classList.remove("active")
// //    lastMonthBtn.classList.remove("active")
// //    weekBtn.classList.add("active")
// })

// monthBtn.addEventListener("click" ,() =>{
    // monthlyGraph()
    // ctx.canvas.style.display = "none"
    // ctx2.canvas.style.display = "block"
    // ctx3.canvas.style.display = "none"
    // lastMonthBtn.classList.remove("active")
    // monthBtn.classList.add("active")
    // weekBtn.classList.remove("active")


//})

// lastMonthBtn.addEventListener("click" , ()=>{
//     lastMonthGraph()
//     ctx.canvas.style.display = "none"
//     ctx2.canvas.style.display = "none"
//     ctx3.canvas.style.display = "block"
    // lastMonthBtn.classList.add("active")
    // monthBtn.classList.remove("active")
    // weekBtn.classList.remove("active")
//})