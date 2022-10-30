const API_URL = "http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires";
const openHour = 9;
const closeHour = 23;
const amount = 3 ; //Cantidad de locales
const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200 ){
        const data = JSON.parse(this.response);
        
        var dateTime= new Date(data['utc_datetime']);
        var hours = dateTime.getHours();
        console.log(data);
        console.log(hours);
        if(openHour< hours && hours<closeHour){
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

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', API_URL);
xhr.send();