# zadanie1
Prosta aplikacja do tworzenia listy zakupów i pokazania aktualnego czasu utworzona z pomocą stosu technologicznego MERN.
Do uruchomienia aplikacji należy zbudować i uruchomić kontenery odpowiedzialne za część kliencką i serwerową.


Zbudowanie kontenera serwera
```
docker build -t node-server ./server
```
Zbudowanie kontenera klienta
```
docker build -t node-client ./client
```
<br></br>

Uruchomienie kontenera serwera
```
docker run -it -p 2000:2000 node-server
```
Po uruchomieniu kontener powinien zwrócić w konsoli wiadomość na jakim porcie oczekuje odpowiedzi.
Można zobaczyć tę wiadomość za pomocą polecenia <i>docker logs \<id-kontenera-serwera\></i>

Uruchomienie kontenera klienta
```
docker run -p 3000:3000 node-client
```
Po uruchomieniu obu kontenerów wystarczy w przeglądarce przejść pod adres localhost:3000
  
  
<br></br>
By sprawdzić ile warstw posiada kontener należy użyć polecenia 
```
docker history <id-obrazu>
```

