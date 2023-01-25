const API_URL = "https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires";
const openHour = 900;
const closeHour = 2300;
const amount = 3 ; //Cantidad de locales

function request(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200 ){
            const data = JSON.parse(this.response);
            
            var dateTime= new Date(data['utc_datetime']);
            var hours = dateTime.getHours();
            var min= dateTime.getMinutes();
            var actualTime = hours*100 + min;
            console.log(data);
            console.log(hours);
            console.log(min);
            if(openHour< actualTime && actualTime<closeHour){
                for(let i= 0; i<amount ; i++){
                    document.getElementsByClassName("estadoLocal")[i].innerHTML = "Local Abierto";
                    document.getElementsByClassName("estadoLocal")[i].style.color= "green";
                    document.getElementsByClassName("estadoLocal")[i].style.textAlign = "center";
                }
                
            }
            else{
                for(let i= 0; i<amount ; i++){
                    document.getElementsByClassName("estadoLocal")[i].innerHTML = "Local Cerrado";
                    document.getElementsByClassName("estadoLocal")[i].style.color= "red";
                    document.getElementsByClassName("estadoLocal")[i].style.textAlign = "center";
                }
            }
        }
    }
    //xhr.addEventListener('load', onRequestHandler); 
    xhr.open('GET', API_URL,true);
    xhr.send();
}
setInterval(request,30000); //se repite cada 30 segundos
request();
