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

Lista poleceń tworzących środowisko pracy na GitHub z efektem ich działania.

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

## Ad p.2
Do zbudowania obrazów dla tego projektu, zastosowano następujące polecenie:



Aby zbudować obraz dockera tego projektu, wykonaj poniższe polecenia:



W każdym wypadku opis rozwiązania należy wgrać do przygotowanego katalogu na moodle.
Zawartość sprawozdania:

Ad. p1. Należy podać link do repozytorium publicznego na GitHub, krótkie omówienie
algorytmu wykorzystanego w programie FibCalc oraz listę poleceń tworzących
środowisko pracy na GitHub z efektem ich działania.

Ad. p2. Należy podać polecenia do zbudowania obrazu, jego uruchomienia wraz z
efektami ich działania oraz dowód na poprawność działania aplikacji z założeniami z
punktu 1.

Ad. p3. Wystarczy sam plik fib.yml na repozytorium GitHub oraz krótki opis przyjętej
realizacji nazewnictwa obrazów zgodnie z metodą semver oraz zasady wykorzystania
repo ghcr.io w pliku fib.yml.

Ad. p4. Należy podać wszystkie wykorzystane polecenia wraz z efektami ich działania.
Opracowany workflow należy uruchomić minimum dwa razy i na tej podstawie
przedstawić dowód na poprawne działanie cache oraz automatycznego generowania
nazw obrazów zgodnie z założeniami w p. 3. Dodatkowo należy podać link do
repozytorium publicznego na ghcr.io oraz do repozytorium publicznego na docker.io,
które wykorzystywane były w pliku ib.yml



## General info
This project is about dockerizing a simple Node.js web app.

## Build image
To build docker image of this project, execute commands below:

```
$ docker build -t local/simple-web-app -f Dockerfile .
```

## Setup
To run this project, execute commands below:

```
$ docker run -d --rm -p 8080:8080 --name simple-web-app local/simple-web-app
```