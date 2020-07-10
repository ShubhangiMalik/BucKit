var india = document.querySelector("#IN")
var path = document.querySelectorAll("path")
var val = document.querySelectorAll(".val")
var val2 = document.querySelectorAll(".val2")
var baseCur = document.querySelectorAll(".baseCur")
var baseCode = document.querySelectorAll(".baseCode")
var cur =  document.querySelectorAll(".cur")
var date = document.querySelector("#date")
var topCur = document.querySelectorAll(".topCur")
var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var update = document.querySelector("#update")
var hrBtn = document.querySelector("#hrBtn")
var monthBtn = document.querySelector("#monthBtn")
var togglebuttons = document.querySelector("#toggleButtons")
var txt = document.querySelector("#txt")
var sym = document.querySelector("#sym")
var listUpdated = document.querySelector("#listUpdate")
var countryName = document.querySelector("#countryName")
var hov = document.querySelector("#hov")




let countryCur ={

 AD : "EUR" ,
 AE : "AED" ,
 AF : "AFN" ,
 AG : "XCD" ,
 AI : "XCD" ,
 AL : "ALL" ,
 AM : "AMD" ,
 AO : "AOA" ,
 AR : "ARS" ,
 AS : "USD" ,
AT : "EUR" ,
AU : "AUD" ,
AW : "AWG" ,
AX : "EUR" ,
AZ : "AZN" ,
BA : "BAM" ,
BB : "BBD" ,
BD : "BDT" ,
BE : "EUR" ,
BF : "XAF" ,
BG : "BGN" ,
BH : "BHD" ,
BI : "BIF" ,
BJ : "XAF" ,
BL : "EUR" ,
BN : "SGD" ,
BO : "BOB" ,
BM : "BMD" ,
BQ : "USD" ,
BR : "BRL" ,
BS : "BSD" ,
BT : "BTN" ,
BV : "NOK" ,
BW : "BWP" ,
BY : "BYN" ,
BZ : "BZD" ,
CA : "CAD" ,
CC : "AUD" ,
CD : "CDF" ,
CF : "XAF" ,
CG : "CDF" ,
CH : "CHF" ,
CI : "XOF" ,
CK : "NZD" ,
CL : "CLP" ,
CM : "XAF" ,
CN : "CNY" ,
CO : "COP" ,
CR : "CRC" ,
CU : "CUP" ,
CV : "CVE" ,
CW : "ANG" ,
CX : "AUD" ,
CY : "EUR" ,
CZ : "CZK" ,
DE : "EUR" ,
DJ : "DJF" ,
DK : "DKK" ,
DM : "XCD" ,
DO : "DOP" ,
DZ : "DZD" ,
EC : "USD" ,
EG : "EGP" ,
EE : "EUR" ,
EH : "MAD" , 
ER : "ERN" ,
ES : "EUR" ,
ET : "ETB" ,
FI : "EUR" ,
FJ : "FJD" ,
FK : "FKP" ,
FM : "USD" ,
FO : "DKK" ,
FR : "EUR" ,
GA : "XAF" ,
GB : "GBP" ,
GE : "GEL" ,
GD : "XCD" ,
GF : "EUR" ,
GG : "GGP" ,
GH : "GHS" ,
GI : "GIP" ,
GL : "DKK" ,
GM : "GMD" ,
GN : "GNF" ,
GO : "XPF" ,
GP : "EUR" ,
GQ : "XAF" ,
GR : "EUR" ,
GS : "GBP" ,
GT : "GTQ" ,
GU : "USD" ,
GW : "XAF" ,
GY : "GYD" ,
HK : "HKD" ,
HM : "AUD" ,
HN : "HNL" ,
HR : "HRK" ,
HT : "HTG" ,
HU : "HUF" ,
ID : "IDR" ,
 IE : "EUR" ,
 IL : "ILS" ,
 IM : "GBP" ,
 IN : "INR" ,
 IO : "USD" ,
 IQ : "IQD" ,
 IR : "IRR" ,
 IS : "ISK" ,
 IT : "EUR" ,
 JE : "JEP" ,
 JM : "JMD" ,
 JO : "JOD" ,
 JP : "JPY" ,
 JU : "EUR" ,
 KE : "KES" ,
 KG : "KGS" ,
 KH : "KHR" ,
 KI : "AUD" ,
 KM : "KMF" ,
 KN : "XCD" ,
 KP : "KPW" ,
 KR : "KRW" ,
 XK : "EUR" ,
 KW : "KWD" ,
 KY : "KYD" ,
 KZ : "KZT" ,
 LA : "LAK" ,
 LB : "LBP" ,
 LC : "XCD" ,
 LI : "CHF" ,
 LK : "LKR" ,
 LR : "LRD" ,
 LS : "LSL" ,
 LT : "EUR" ,
 LU : "EUR" ,
 LV : "EUR" ,
 LY : "LYD" ,
 MA : "MAD" ,
 MC : "EUR" ,
 MD : "MDL" ,
 MG : "MGA" ,
 ME : "EUR" ,
 MF : "EUR" ,
 MH : "USD" ,
 MK : "MKD" ,
 ML : "XAF" ,
 MO : "MOP" ,
 MM : "MMK" ,
 MN : "MNT" ,
 MP : "USD" ,
 MQ : "EUR" ,
 MR : "MRU" ,
 MS : "XCD" ,
 MT : "EUR" ,
 MU : "MUR" ,
 MV : "MVR" ,
 MW : "MWK" ,
 MX : "MXN" ,
 MY : "MYR" ,
 MZ : "MZN" ,
 NA : "ZAR" ,
 NC : "XPF" ,
 NE : "XAF" ,
 NF : "AUD" ,
 NG : "NGN" ,
 NI : "NIO" ,
 NL : "EUR" ,
 NO : "ISK" ,
 NP : "NPR" ,
 NR : "AUD" ,
 NU : "NZD" ,
 NZ : "NZD" ,
 OM : "OMR" ,
 PA : "PAB" ,
 PE : "PEN" ,
 PF : "XPF" ,
 PG : "PGK" ,
 PH : "PHP" ,
 PK : "PKR" ,
 PL : "PLN" ,
 PM : "EUR" ,
 PN : "NZD" ,
 PR : "USD" ,
 PS : "ILS" ,
 PT : "EUR" ,
 PW : "USD" ,
 PY : "PYG" ,
 QA : "QAR" ,
 RE : "EUR" ,
 RO : "RON" ,
 RS : "RSD" ,
 RU : "RUB" ,
 RW : "RWF" ,
 SA : "SAR" ,
 SB : "SBD" ,
 SC : "SCR" ,
 SD : "SDG" ,
 SE : "SEK" ,
 SG : "SGD" ,
 SH : "SHP" ,
 SI : "EUR" ,
 SJ : "NOK" ,
 SK : "EUR" ,
 SL : "SLL" ,
 SM : "EUR" ,
 SN : "XAF" ,
 SO : "SOS" ,
 SR : "SRD" ,
 SS : "SSP" ,
 ST : "STN" ,
 SV : "USD" ,
 SX : "ANG" ,
 SY : "SYP" ,
SZ : "SZL" ,
TC : "USD" ,
TD : "XAF" ,
TF : "EUR" ,
TG : "XAF" ,
TH : "THB" ,
TJ : "TJS" ,
TK : "NZD" ,
TL : "USD" ,
TM : "TMT" ,
TN : "TND" ,
TO : "TOP" ,
TR : "TRY" ,
TT : "SHP" ,
TV : "AUD" ,
TW : "TWD" ,
TZ : "TZS" ,
UA : "UAH" ,
UG : "UGX" ,
DQ : "USD" ,
FQ : "USD" ,
HQ : "USD" ,
JQ : "USD" ,
MQ : "USD" ,
WQ : "USD" ,
US : "USD" ,
UY : "UYU" ,
UZ : "UZS" ,
VA : "EUR" ,
VC : "XCD" ,
VE : "VES" ,
VG : "USD" ,
VI : "USD" ,
VN : "VND" ,
VU : "VUV" ,
WF : "XPF" ,
WS : "WST" ,
YE : "YER" ,
YT : "EUR" ,
ZA : "ZAR" ,
ZM : "ZMW" ,
ZW : "ZWL" ,

}

var curName = {
AED: "United Arab Emirates Dirham" ,   
AFN: "Afghan Afghani" ,
ALL: "Albania Lek" ,
AMD: "Armenian Dram" ,
ANG: "Netherlands Antillean Guilder" ,
AOA: "Angolan Kwanza" ,
ARS: "Argentine Peso" ,
AUD: "Australian Dollar" ,
AWG: "Dutch Guilder" ,
AZN: "Azerbaijan Manat" ,
BAM: "Bosnian Convertible Mark" ,
BBD: "Barbados Dollar" ,
BDT: "Bangladesh Taka" ,
BGN: "Bulgarian Lev" ,
BHD: "Bahraini Dinar" ,
BIF: "Burundi Franc" ,
BMD: "Bermudian Dollar" ,
BND: "Brunei Dollar" ,
BOB: "Bolivian Boliviano - Shilling" ,
BRL: "Brazilian Real" ,
BSD: "Bahamian Dollar" ,
BTC: "Bitcoin" ,
BTN: "Bhutan Ngultrum" ,
BWP: "Botswana Pula" ,
BYN: "Belarusian Ruble" ,
BZD: "Belize Dollar" ,
CAD: "Canadian Dollar" ,
CDF: "Congolese Franc" ,
CHF: "Confoederatio Helvetica Franc" ,
CLF: "Chilean Unidad de Fomento" ,
CLP: "Chilean Peso" ,
CNH: "Chinese Yuan - Renminbi (CNH)" ,
CNY: "Chinese Yuan - Renminbi (CNY)" ,
COP: "Colombian Peso" ,
CRC:"Costa Rican Colon" ,
CUC: "Cuban Convertible Peso" ,
CUP: "Cuban Peso Nacional" ,
CVE: "Cape Verde Escudo" ,
CZK: "Czech Koruna" ,
DJF: "Djibouti Franc" ,
DKK: "Danish Krone" ,
DOP: "Dominican Peso" ,
DZD: "Algerian Dinar" ,
EGP: "Egyptian Pound" ,
ERN: "Eritrean Nakfa" ,
ETB: "Ethiopian Birr" ,
EUR: "Euro",
FJD: "Fiji Dollar" ,
FKP: "Falkland Islands Pound" ,
GBP: "British Pound Sterling" ,
GEL: "Georgian Lari" ,
GGP: "Guernsey Pound" ,
GHS: "Ghanaian Cedi" ,
GIP: "Gibraltar Pound" ,
GMD: "Gambian Dalasi" ,
GNF: "Guinea Franc" ,
GTQ: "Guatemalan Quetzal" ,
GYD: "Guyanese Dollar" ,
HKD: "Hong Kong Dollar" ,
HNL: "Honduran Lempira" ,
HRK: "Croatian Kuna" ,
HTG: "Haitian Gourde" ,
HUF: "Hungarian Forint" ,
IDR: "Indonesian Rupiah" ,
ILS: "Israeli New Shekel" ,
IMP: "Isle of Man Pound" ,
INR: "Indian Rupee" ,
IQD: "Iraqi Dinar" ,
IRR: "Iranian Rial" ,
ISK: "Iceland Krona" ,
JEP: "Jersey Pound" ,
JMD: "Jamaican Dollar" ,
JOD: "Jordanian Dinar" ,
JPY: "Japanese Yen" ,
KES: "Kenyan Shilling" ,
KGS: "Kyrgyzstani Som" ,
KHR: "Cambodian Riel" ,
KMF: "Comorian Franc" ,
KPW: "North Korean Won" ,
KRW: "South Korean won" ,
KWD: "Kuwaiti Dinar" ,
KYD: "Cayman Islands Dollar" ,
KZT: "Kazakhstan Tenge" ,
LAK: "Lao Kip" ,
LBP: "Lebanese Pound" ,
LKR: "Sri Lankan Rupee" ,
LRD: "Liberian Dollar" ,
LSL: "Lesotho Loti" ,
LYD: "Libyan Dinar" ,
MAD: "Moroccan Dirham" ,
MDL: "Moldovan Leu" ,
MGA: "Malagasy Ariary" ,
MKD: "Macedonian Denar" ,
MMK: "Myanmar Kyat" ,
MNT: "Mongolian Cyrillic" ,
// MNT: "" ,
// MNT: "" ,
MOP: "Macanese Pataca" ,
MRO: "Mauritanian Ouguiya (pre-2018)" ,
MRU: "Mauritanian Ouguiya" ,
MUR: "Mauritian Rupee" ,
MVR: "Maldivian Rufiyaa" ,
MWK: "Malawian Kwacha" ,
MXN: "Mexican Peso" ,
MYR: "Ringgit Malaysia" ,
MZN: "Mozambican Met" ,
NAD: "Mozambican Metical" ,
NGN: "Nigerian Naira" ,
NIO: "Nicaraguan Cordoba" ,
NOK: "Norwegian Krone" ,
NPR: "Nepalese Rupee" ,
NZD: "New Zealand Dollar" ,
OMR: "Omani Rial" ,
PAB: "Panama Balboa" ,
PEN: "Peruvian Sol" ,
PGK: "Papua New Guinea" ,
PHP: "Philippine Peso" ,
PKR: "Pakistani Rupee" ,
PLN: "Polish Zloty" ,
PYG: "Paraguay Guarani" ,
QAR: "Qatari Riyal" ,
RON: "Romanian New Leu" ,
RSD: "Serbian Dinar" ,
RUB: "Russian Ruble" ,
RWF: "Rwandan Franc" ,
SAR: "Saudi Riyal" ,
SBD: "Solomon Islands Dollar" ,
SCR: "Seychelles Rupee" ,
SDG: "Sudanese Pound" ,
SEK: "Swedish Krona" ,
SGD: "Singapore Dollar" ,
SHP: "Saint Helena Pound" ,
SLL: "Sierra Leone Leone" ,
SOS: "Somali Shilling" ,
SRD: "Surinamese Dollar" ,
SSP: "South Sudanese Pound" ,
STD: "São Tomé & Príncipe dobra" ,
STN: "Sao Tomean Dobra" ,
SVC: "El Salvador colón" ,
SYP: "Syrian Lira" ,
SZL: "Swazi Lilangeni" ,
THB: "Thai Onshore Baht" ,
TJS: "Tajikistan Somoni" ,
TMT: "Turkmenistan New Manat" ,
TND: "Tunisian Dinar" ,
TOP: "Kuwaiti Dinar" ,
TRY: "Turkish Lira" ,
TTD: "Trinidad and Tobago Dollar" ,
TWD: "New Taiwan Dollar" ,
TZS: "Tanzanian Shilling" ,
UAH: "Ukrainian Hryvnia" ,
UGX: "Ugandan Shilling" ,
USD: "United States Dollar" ,
UYU: "Uruguayan Peso" ,
UZS: "Uzbekistani Som" ,
VEF: "Venezuelan Bolivar" ,
VES: "Sovereign Bolivar" ,
VND: "Vietnamese Dong" ,
VUV: "Vanuatu Vatu" ,
WST: "Samoan Tala" ,
XAF: "Central African CFA Franc" ,
XAG: "Silver Ounce" ,
XAU: "Gold Ounce" ,
XCD: "Eastern Caribbean Dollar" ,
XDR: "Special Drawing Rights " ,
XOF: "West African CFA franc" ,
XPD: "Palladium Ounce" ,
XPF: "Central Pacific Franc" ,
XPT: "Platinum Ounce" ,
YER: "Yemeni Rial" ,
ZAR: "South African Rand" ,
ZMW: "Zambian Kwacha" ,
ZWL: "Zimbabwean Dollar" 

}


async function topCurrencies(){
    const res2 = await fetch("https://fcsapi.com/api-v2/forex/list?type=forex&top_symbol=1&access_key=J3eBdwOYNDPA9Y7vJuMhdchGgcRUdMcbd2kWLUHTK2f5XSCrYd")
    const data2 = await res2.json()
    if(data2.code === 200){
    listUpdated.textContent = data2.info.server_time
    for(i=0;i<data2.response.length;i++){
        topCur[i].textContent = data2.response[i].name + " (" + data2.response[i].symbol + ")"
    }
  }else{
    alert("Try again after a minute! Sorry for inconvenience")
  } 
}

topCurrencies()
let a
let b
let str
let n=0
var cPrice =[]
var high =[]
var low =[]
var DnT =[]
var DnTb =[]
var v=0
var w=0
var m=0
for(i=0;i<78;i++){
    topCur[i].addEventListener("click" , async function(){
        txt.classList.remove("hide")
        ctx.canvas.style.display = "block"
        hrBtn.classList.add("active")
        monthBtn.classList.remove("active")
        ctx2.canvas.style.display = "none"
        toggleButtons.classList.remove("hide")
        a = this.textContent.indexOf("(")
        b = this.textContent.indexOf(")") 
        str = this.textContent.substring(a + 1 , b)   
    
        const res3 = await fetch("https://fcsapi.com/api-v2/forex/history?symbol=" + str + "&period=1h&access_key=9lzTw36Ofr3S5XgwrSpQzmDww0Djz7WhFortdo8BlXmmNrjzZt")
        const data3 = await res3.json()
        if(data3.code === 200){
            n=0;
            for(j= data3.response.length-1 ; j> data3.response.length-25 ; j-- , n++){
                 cPrice[n] = data3.response[j].c
                 high[n] = data3.response[j].h
                 low[n] = data3.response[j].l
                 DnT[n] = data3.response[j].tm.slice(2,16)
            }
            v=0
            for(var k=DnT.length-1; k>=0;k--,v++){
                    DnTb[v] = DnT[k]
            }
            sym.textContent = data3.info.symbol 
        myGraph(DnTb , cPrice , high , low)
    }
    else{
        alert("Try again after a minute! Sorry for inconvenience")
    }
        const res4 = await fetch("https://fcsapi.com/api-v2/forex/history?symbol=" + str + "&period=1d&access_key=J3eBdwOYNDPA9Y7vJuMhdchGgcRUdMcbd2kWLUHTK2f5XSCrYd")
        const data4 = await res4.json()
        if(data4.code === 200){
            m=0;
            for(j= data4.response.length-1 ; j> data4.response.length-32 ; j-- , m++){
                cPrice2[m] = data4.response[j].c
                high2[m] = data4.response[j].h
                low2[m] = data4.response[j].l
                DnT2[m] = data4.response[j].tm.split(" ")[0].substr("2")
           }
           update.textContent = data3.info.server_time 
           w=0
           for(var l=DnT2.length-1; l>=0;l--,w++){
               DnT2b[w] = DnT2[l]
             }
        }       
        else{
            console.log("Try again after a minute")
        }
               
            window.scrollTo(0, document.body.scrollHeight)
       
    })
}



        Chart.defaults.global.elements.point.hoverRadius='6'
        Chart.defaults.global.elements.point.hoverBorderWidth='7'
        Chart.defaults.global.elements.point.radius='2.5'
        Chart.defaults.global.elements.point.borderWidth='2'
        Chart.defaults.global.elements.point.backgroundColor='rgba(255, 99, 132, 0.3)'
        Chart.defaults.global.defaultFontColor = '#F0F0F0';
        Chart.defaults.global.elements.line.borderWidth='5'
        Chart.defaults.global.elements.line.tension='0.1'

async function myGraph(val1 , val2 , val3 , val4){
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: val1 ,
            datasets: [
                {
                label: 'Closing Price',
                data: val2,
                fill:false,
                backgroundColor: //[
                    'rgba(240, 52, 52, 0.5)'
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                //]
                ,
                borderColor:// [
                    'rgba(240, 52, 52, 0.5)'
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
               // ]
            //    ,
            //     borderWidth: 1
            },

            
                {
                label: 'High',
                data: val3,
                fill:false,
                backgroundColor: //[
                    //'rgba(255, 99, 132, 0.2)'
                     //'rgba(54, 162, 235, 0.2)'
                    'rgba(55,253,252,0.5)'
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                //]
                ,
                borderColor:// [
                   // 'rgba(255, 99, 132, 1)'
                     //'rgba(54, 162, 235, 1)'
                    'rgba(55,253,252,0.5)'
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
               // ]
            //    ,
            //     borderWidth: 1
            },
            {
                label: 'Low',
                data: val4,
                fill:false,
                backgroundColor: //[
                    //'rgba(255, 99, 132, 0.2)'
                     //'rgba(54, 162, 235, 0.2)'
                    //'rgba(255, 206, 86, 0.2)'
                    'rgba(124,252,0,0.5)'
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                //]
                ,
                borderColor:// [
                   // 'rgba(255, 99, 132, 1)'
                     //'rgba(54, 162, 235, 1)'
                    //'rgba(255, 206, 86, 1)'
                     'rgba(124,252,0,0.5)'
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
               // ]
            //    ,
            //     borderWidth: 1
            }
        
        
        ]
        },
        options: 
       
        {  maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    position: 'right',
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}

async function myGraph2(val1 , val2 , val3 , val4){
    var myChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: val1 ,
            datasets: [
                {
                label: 'Closing Price',
                data: val2,
                fill:false,
                backgroundColor: //[
                    'rgba(240, 52, 52, 0.5)'
                    // 'rgba(54, 162, 235, 0.2)',
                    // 'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                //]
                ,
                borderColor:// [
                    'rgba(240, 52, 52, 0.5)'
                    // 'rgba(54, 162, 235, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
               // ]
            //    ,
            //     borderWidth: 1
            },

            
                {
                label: 'High',
                data: val3,
                fill:false,
                backgroundColor: //[
                    //'rgba(255, 99, 132, 0.2)'
                     //'rgba(54, 162, 235, 0.2)'
                     'rgba(55,253,252,0.5)'
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                //]
                ,
                borderColor:// [
                   // 'rgba(255, 99, 132, 1)'
                     //'rgba(54, 162, 235, 1)'
                     'rgba(55,253,252,0.5)'
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
               // ]
            //    ,
            //     borderWidth: 1
            },
            {
                label: 'Low',
                data: val4,
                fill:false,
                backgroundColor: //[
                    //'rgba(255, 99, 132, 0.2)'
                     //'rgba(54, 162, 235, 0.2)'
                    //'rgba(255, 206, 86, 0.2)'
                    'rgba(124,252,0,0.5)'
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)'
                //]
                ,
                borderColor:// [
                   // 'rgba(255, 99, 132, 1)'
                     //'rgba(54, 162, 235, 1)'
                    //'rgba(255, 206, 86, 1)'
                    'rgba(124,252,0,0.5)'
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)'
               // ]
            //    ,
            //     borderWidth: 1
            }
        
        
        ]
        },
        options: 
       
        {  
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    position: 'right',
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}

var j=0
var i=0

for(i=0;i<cur.length;i++){
    cur[i].textContent = curName[Object.keys(curName)[i]]
}

var previous = null
for( i=0; i<path.length ; i++){
path[i].addEventListener( "mouseenter", async function(){
    hov.classList.add("hide")
    const res = await fetch("https://api.exchangerate.host/latest?base=" + countryCur[this.getAttribute('id')])
    const data = await res.json()
    baseCur.textContent = curName[countryCur[this.getAttribute('id')]]
    date.textContent = data.date
    countryName.textContent = this.getAttribute('title')
    for(j=0;j< 171 ;j++){
        val[j].textContent = data.rates[Object.keys(data.rates)[j]]
        val2[j].textContent = (1/(data.rates[Object.keys(data.rates)[j]])).toFixed(6)
    }
    for(j=0;j< 2 ;j++){
        baseCode[j].textContent = countryCur[this.getAttribute('id')]
          baseCur[j].textContent = curName[countryCur[this.getAttribute('id')]].toUpperCase()

    }
    console.log(data)
       
})
 }

 for(var i=0; i<path.length ; i++){
    path[i].addEventListener( "click", async function(){
    if(previous){
        previous.style.fill = "rgba(255,160,122,1)"
    }
        this.style.fill = "	#FF4500"
        previous = this
        
        const res = await fetch("https://api.exchangerate.host/latest?base=" + countryCur[this.getAttribute('id')])
        const data = await res.json()
        
        date.textContent = data.date
        for(j=0;j< 171;j++){
            val[j].textContent = data.rates[Object.keys(data.rates)[j]]
            val2[j].textContent = (1/(data.rates[Object.keys(data.rates)[j]])).toFixed(6)
        }
        for(j=0;j< 2 ;j++){
            baseCode[j].textContent = countryCur[this.getAttribute('id')]
            baseCur[j].textContent = curName[countryCur[this.getAttribute('id')]].toUpperCase()
        }
        console.log(data.rates)
        
        //const res2 = await fetch("https://fcsapi.com/api-v2/forex/list?type=forex&top_symbol=1&access_key=FBcfjcpUx2L3uN2A3ZwIOd2tnYeyENIaU5vDI8W7h25LJCZps")
        //const data2 = await res2.json()
        
          //  console.log(data2.response.length)
           // for(i=0; i< data2.response.length; i++){
             //   if(data2.response[i].symbol.includes(countryCur[this.getAttribute('id')])){
                    // const res3 = await fetch("https://fcsapi.com/api-v2/forex/history?symbol=" + data2.response[i].symbol + "&period=1d&access_key=FBcfjcpUx2L3uN2A3ZwIOd2tnYeyENIaU5vDI8W7h25LJCZps")
                    // const data3 = await res3.json()
                    
                    
               // }
          //  }
        

         
    })
}

hrBtn.addEventListener("click" , async() =>{
    ctx2.canvas.style.display = "none"
    ctx.canvas.style.display = "block"
    myGraph(DnT , cPrice , high , low)})
var cPrice2 =[]
var high2 =[]
var low2 =[]
var DnT2 =[]
var DnT2b =[]
ctx.canvas.style.display = "none"
ctx2.canvas.style.display = "none"

monthBtn.addEventListener("click" , async function (){
    ctx.canvas.style.display = "none"
    ctx2.canvas.style.display = "block"
    //ctx.canvas.style.display = "block"
    
        myGraph2(DnT2b , cPrice2 , high2 , low2)
        
    })
    
