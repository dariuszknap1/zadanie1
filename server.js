var express = require("express")
var app = express()
var port = 3000

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html> 
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
    </head>
    
    <body onload="render()">
        <div id="main">
    
        </div>
        <div id="ip"></div>
        <script>
            function render() {
    
                getCurrentTime = () => {
                    //Date automatycznie zwraca czas według lokalizacji
                    var today = new Date();
                    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
                    return time;
                }
    
                var string = "Time: " + getCurrentTime();
                string += "<br></br>IP Adress: ";
    
                var ip;
                const timezone = "<br></br>Timezone: " + Intl.DateTimeFormat().resolvedOptions().timeZone;
                fetch('https://api.ipify.org/?format=json')
                .then(results => results.json())
                .then(data => document.getElementById("main").innerHTML =string + data.ip + timezone);    
                
            }
    
        </script>
    </body>
    
    </html>`)
})

app.listen(port, () => {
    var today = new Date()
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    console.log(date + " - Dariusz Knap - Serwer wystartował na porcie " + port + ". Serwer czeka na ciebie w przeglądarce pod adresem localhost:" + port)
})