# Warsawjs workshop 43 - intermediate javascript training

## Opis warsztatu

* Podczas warszatów będziemy wykorzystywać wyłącznie przeglądarkę internetową ze wsparciem `ES6+`.
* Warsztat posiada formę zadań do rozwiązania.
* Na każde zadanie przygotowany jest test.Nie można zmieniać kodu testu.
* Aby odpalić testy, otwórz plik `index.html` w przeglądarce, i otwrzórz narzędzia deweloperski i znajdź konsolę.
* Wynik testów jest wyświetlony w przeglądarce w konsoli narzędzi deweloperskich. Zadanie jest rozwiązane jeśli test nie rzuca błędem.
* Zadania są podzielone tematycznie. W kolejnych plikach z testami zostały wydzielone tematy.
* Po wykonaniu zadań stworzony kod wykorzystamy w działającej aplikacji - prostej grze w wisielca(projekt na github).
W ramach utrwalenia wiedzy dodamy ładowanie haseł z pliku oraz wyabstrachujemy część kodu odpowiedzialną za stan aplikacji przy użyciu klas.


## Klasy

Pierwszym etapem warsztatu jest zrozumienie klas.

### Teoria

* Najprostszym określeniem klasy jest stwierdzenie, że to przepis na obiekt.
* Klasy zawierają pola oraz metody.
* Pola przechowujące dane, podczas gdy metody są funkcjami związanymi z klasą.
* Aby utrzowyć obiekt na bazie klasy należy wykorzystać operator `new`.
* Stworzony obiekt nazywamy instancją klasy.
* Klasy mogą po sobie dziedziczyć tworząć relację typu rodzic-dziecko.
* Klasa może dziedziczyć tylko po jednej klasie.
* Klasa dziecka posiada dostęp do pól i metod klasy rodzica.
* Każda klasa posiada kontruktor.
* Jest to specjalna metoda klasy, która jest wywoływana podczas tworzenie instancji klasy.
* Jeśli klasa nie definiuje konstruktora, użyty będzie domyślny konstruktor.
* Konstruktor może przyjmować argumenty, które można wykorzystać do ustawienia stanu inicjalnego instancji.
* Jeśli klasa dziedziczy po innej klasie, musi wewnątrz konstruktora zawołać specjalną funkcję `super` z argumentami, które są wymagane do stworzenia instancji klasy nadrzędnej.
* Klasy mogą posiadać metody i pola statyczne - dostępne bez tworzenia instancji klasy.

### Zadania

* Zadanie polega na stworzeniu klasy, która będzie opisywała zachowanie obiektu przechowującego dane.
* Taka abstrakcja często jest nazywana jako `Model`.
* Dodatkowo należy stworzyć model dziedziczący, który będzie reprezentował stan aplikacji.

#### Stworzyć klasę `Model`, która posiada możliwość przechowywania danych. 
* Klasa powinna udostępniać interfejs umożliwiający dostęp do zapisu i odczytu wyłącznie przez metody instancji klasy.
* Metoda `set` do ustawiania wartości pola.
* Metoda `get` zwracająca wartość danego pola.

#### Dodać do klasy `Model` możliwość sprawdzania czy pole istnieje
* Metoda `has` zwracająca `true/false` w zależności od tego czy pole istnieje w instancji klasy.

#### Rzucić wyjątek podczas pobierania nieistniejącego pola
* Metoda `get` powinna sprawdzić czy pole istnieje i tylko wtedy zwrócić wartość.
* Jeśli pole nie istnieje metoda powinna rzucić wyjątkiem z odpowiednią treścią.

#### Umożliwość łączenie wywołać metody `set`
* Metoda `set` powinna mieć możliwość wielokrotnego wywołania, jedno po drugim w łańcuchu wywołań (`a.set(...).set(...);`)

#### Umożliwość łączenie wywołać metody `set` i `get`
* Metoda `set` oraz `get` powinna mieć możliwość wielokrotnego wywołania, jedno po drugim w łańcuchu wywołań (`a.set(...).get(...);`)
* Wywołanie `get` powinno być możliwe tylko dla ostatniego wywołania w łańcuchu.

#### Stworzyć klasę dziedziczącą `State` po klasie `Model` posiadający jedno pole z inicjalną wartością
* Instancja klasy po stworzeniu powinna posiadać ustawiony stan inicjalny.

#### Stworzyć metodę statyczną `createInitialState`, która będzie dostępna bez instancji klasy
* Klasa musi posiadać statyczną metodę `createInitialState`.


## Promise, fetch api i praktyczne zastosowanie klas

### Teoria

* Promise jest to interfejs reprezentujący wynik działania, które ma nieokreślony czas trwania np. pobranie pliku.
* Innymi słowy jest to obietnica wywołanej funkcji, że jej działąnie skończy się w przyszłości i możemy czekać na wynik.
* Aby czekać na wynik należy zarejestrować zdarzenie, które ma się wydarzyć kiedy funkcja skończy pracę i będzie gotowa zwrócić wynik.
* W przypadku niepowodzenia (np. timeout sieci), mamy możliwość obługi takiej sytuacji, rejestrując odpowiednio zdarzenie.
* Aby zarejestrować zdarzenia wykorzystująć metodę `then`, zwracaną po utworzeniu nowego obiektu typu `Promise`
```javascript
function functionReturningPromise() {
  return fetch('http://localhost/data.JSON');
}
function success(response) {}
function failure(error) {}
functionReturningPromise().then(success, failure);
``` 

* Od ES6 w przeglądarki jest wbudowana funkcja `fetch` służąca do pobienia zasób z sieci.
* Wywołanie `fetch` zwraca obiekt `Promise`
* Błąd serwera nie jest błędem pobierania - nie jest to wyjątek, więc zostanie wywołany callback `success` - pierwszy argument metody `then`.
* api:
```javascript
fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // ... 
      // others http valid headers
      // ...
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // typ danych musi być zgodny z headerem "Content-Type"
})
```


### Zadania

#### Pobieranie pliku JSON
* Stworzyć metodę `fetchJSON`, która będzie zwracała dane w postaci `JSON`.

#### Obsługa błędu serwera
* Błędy komunikacji HTTP 4xx i 5xx nie są traktowane jako wyjątki.
* Należy stworzyć funkcję `fetchWithServerError`, która w przypadku wykrywania będzie serwera rzuci wyjątek.

#### Abstrakcja klasy zasobu
* Storzyć klasę `Resource`, abstrachującą pobieranie zasobu z serwera.
* Na początek klasa powinna posiadać funkcjonalność oznaczenia, że zasób jest ładowany.
* Należy w klasie zdefiniować pole `loading` i odpowiednią metodą do sprawdzania jej wartości.
* Należy dodać także metodą, która ustawia flagę ładowania na `true` w momencie rozpoczęcia ładowania.

#### Zakończenie pobierania danych
* Dodać nowe pole w klasie `data` przechowujące dane.
* Dodać metodą, która odpowiednio zmieni stan flagi ładowania i zaktualizuje dane.

#### Stan błędu zasobu
* Dodać możliwość obsługi błędu przez zasób.

#### Zasób nie traci danych po ponownym przeładowaniu z błędem
* Po inicjalnie załodowanych danych, zasób może zostać przeładowany. Podczas przeładowania może nastąpić błąd. Po obsłudze błędu, dane z zasobu powinny być dalej dostępne.

#### Ponawianie nieudanych wywołań
* Dodać funckję `retry`, która będzie ponawiać wywołanie funkcji przekazanej jako argument `n` razy.


## Dokmnięcia

* Domknięcie wyznacza zasięg zmiennej dostępnej w kodzie.
* Domknięcie posiada pamięć, w której przechowuje zmienne i funkcje.
* Kiedy domknięcie nie jest już potrzebne garbage collector zwalnia pamięć.
* Najprostszym domknięcie nawiasów klamrowych(od e6).
```javascript
{
  // to jest najprostsze domknięcie
  const a = true; // dostęp do tej zmiennej będzie możliwy tylko w tym domknięciu
}
```
* Najczęściej wykorzystywanym jest domknięcie tworzone przez wywołanie funkcji
```javascript
() => {
  // domknięcie stworzone przez funkcję
  const b = 'test'; // ta zmienna będzie dostępna tylko wewnątrz funkcji, nigdy poza
}
```

### Zadanie

Wykorzystyjąc mechanizm domknięć odtwórz funkcjonalność wcześniej stworzonej klasy `Resource`



## Wykorzystanie zdobytej wiedzy w praktyce
* Sklonuj lub pobierz repozytorium:
    https://github.com/G3F4/javascript-basics-workshop

### Zadania

#### Pobranie haseł z pliku JSON
* Stwórz plik `JSON`, w którym będę znajdować się hasła do odgadnięcia w grze.
* Wykorzystaj wcześniej stworzoną funkcję do pobierania danych.

### Stan ładowania
* Wykorzystaj klasę reprezentującą zasób w połączeniu z funkcją do pobierania danych, aby obsłużyć stan ładowania.
* Aplikacja podczas ładowania powinna prezentować napis `Ładowanie haseł, proszę czekać`.

### Wykorzystanie klasy reprezentującej stan aplikacji
* Wykorzystaj klasę reprezentującą stan aplikacji wszędzie tam gdzie aktualnie aplikacja korzysta ze zwykłego obiektu i funkcji pomocnicznej aktualizującej ten obiekt.
