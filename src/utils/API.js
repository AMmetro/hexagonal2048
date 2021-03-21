import axios from 'axios'

export const APIgetData=(serverUrl,body)=>{

    const instance = axios.create({
        baseURL: serverUrl,
    })

            const promise = instance.post('2', body);
            return promise

}


// const instance = axios.create({
//     baseURL: 'http://68f02c80-3bed-4e10-a747-4ff774ae905a.pub.instances.scw.cloud',
// })


    // let body=[]

// export const API = {
//
//     getInitialData(serverUrl,body) {
//         const promise = instance.post('2', body);
//         return promise
//     },
//
//     getComputerTurn(data) {
//         const promise = instance.post('2', data);
//         return promise
//     }
// }




// export async function API () {

       //
       // var oReq = new XMLHttpRequest();
       // oReq.addEventListener("load", API);
       // oReq.open("GET", "http://www.example.org/example.txt");
       // oReq.send();



           // var xhttp = new XMLHttpRequest();
           // xhttp.onreadystatechange = function() {
           //
           //     if (this.readyState == 4 && this.status == 200) {

                                     // Typical action to be performed when the document is ready:
                                    //  document.getElementById("demo").innerHTML = xhttp.responseText;



           //         alert(xhttp.responseText);
           //     }
           // };
           // xhttp.open("GET", "http://68f02c80-3bed-4e10-a747-4ff774ae905a.pub.instances.scw.cloud/2", true);
           // xhttp.send();


       //     const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
       //     const resWeather = await fetch(urlWeather);
       //     const data = await resWeather.json();
       // console.log(data)


