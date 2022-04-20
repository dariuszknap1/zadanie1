# zadanie1
Prosta aplikacja stworzona z pomocą technologii node js i express js prezentująca ip i czas lokalny klienta .


Zbudowanie kontenera serwera
```
sudo docker build -t node-server .
```
Uruchomienie kontenera serwera
```
docker run -it -p 3000:3000 node-server
```
Po uruchomieniu kontener powinien zwróci w konsoli wiadomość na jakim porcie oczekuje na nas.
Można zobaczyć tę wiadomość za pomocą polecenia <i>docker logs \<id-kontenera-serwera\></i>
  
  
<br></br>
By sprawdzić ile warstw posiada kontener należy użyć polecenia 
```
docker history <id-obrazu>
```



