# Zadanie nr 1 - Aplikacja FibCalc

#### Opracował: Zygmunt Łata, Grupa: I2S 2.3

## Table of contents
* [Ad p.1](#ad-p1)
* [Ad p.2](#ad-p2)
* [Ad p.3](#ad-p3)
* [Ad p.4](#ad-p4)

## Ad p.1
W programie FibCalc do obliczenia wartości n-tego wyrazu ciągu Fibonacciego 
zaimplementowany został algorytm wykorzystujący wzór Bineta.

Uproszczony wzór wygląda następująco:

```
Fn = 1 / sqrt(5) * ( (1 + sqrt(5)) / 2 ) ** n

phi = (1 + sqrt(5)) / 2
Fn = phi ** n / sqrt(5)

Symbol ** oznacza potęgowanie, phi jest podstawą, a n wykładnikiem potęgowania
```

Lista poleceń tworzących środowisko pracy na GitHub.

Inicjalizacja repozytorium:
```
git init
git add *
git commit -m "config"
git branch -m main
```

Logowanie do GitHub:
```
Windows PowerShell:
Get-Content C:\Users\zygmu\Desktop\DockerAuth\token_github.txt | gh auth login --with-token

Linux:
gh auth login --with-token < C:\Users\zygmu\Desktop\DockerAuth\token_github.txt
```

Weryfikacja poprawności logowania:
```
gh auth status
```

Inicjalizacja repozytorium cd.:
```
gh repo create FibCalc --public --remote=FibCalc --source=. --push
```

Efekt działania wykonanych poleceń:

<img alt="git_1.png" src="./screenshots/git_1.png"/>

<img alt="git_2.png" src="./screenshots/git_2.png"/>

<img alt="git_3.png" src="./screenshots/git_3.png"/>

<img alt="git_4.png" src="./screenshots/git_4.png"/>

<img alt="git_5.png" src="./screenshots/git_5.png"/>

## Ad p.2
Aplikacja FibCalc składa się z dwóch oddzielnych aplikacji:
* backendowej - aplikacja Symfony (w języku PHP),
* frontenowej - aplikacja React (w języku JavaScript).

Do działania wykorzystuje trzy serwisy:
* serwer API, wykorzystujący serwer Nginx, który serwuje backend aplikacji,
* serwer PHP, wykorzystany jako język programowania do działania aplikacji backendowej,
* serwer Client, wykorzystujący serwer Nginx, który serwuje frontend aplikacji.

Do budowy obrazów poszczególnych serwisów wykorzystano oddzielne pliki Dockerfile
wraz z plikami konfiguracyjnymi dla każdego z serwisów. Serwisy zostały zdefiniowane 
w pliku docker-compose.yml.

Do zbudowania obrazów serwisów i ich uruchomienia, zastosowano następujące polecenie:

```
docker-compose up -d
```

Efekt działania wykonanego polecenia:

<img alt="docker_1.png" src="./screenshots/docker_1.png"/>

<img alt="docker_2.png" src="./screenshots/docker_2.png"/>

<img alt="docker_3.png" src="./screenshots/docker_3.png"/>

Działanie aplikacji:

<img alt="docker_4.png" src="./screenshots/docker_4.png"/>

<img alt="docker_5.png" src="./screenshots/docker_5.png"/>

## Ad p.3

## Ad p.4
