# Warsawjs workshop 43 - intermediate javascript training

## Opis warsztatu
* Podczas warsztatów będziemy wykorzystywać wyłącznie przeglądarkę internetową ze wsparciem `ES6+`.
* Warsztat posiada formę zadań do rozwiązania.
* Na każde zadanie przygotowany jest test. Nie można zmieniać kodu testu.
* Funkcje, które należy zaimplementować są już stworzone. Podczas warszatu nie trzeba tworzyć żadnych nowych plików.
* Aby odpalić testy, otwórz plik `index.html` w przeglądarce, i otwórz narzędzia deweloperski i znajdź konsolę. 
* Wynik testów jest wyświetlony w przeglądarce w konsoli narzędzi deweloperskich. Zadanie jest rozwiązane, jeśli test nie rzuca błędem. 
* Zadania są podzielone tematycznie. W kolejnych plikach z testami zostały wydzielone tematy. 
* Po wykonaniu zadań stworzony kod wykorzystamy w działającej aplikacji — prostej grze w wisielca (projekt na github). 
* W ramach utrwalenia wiedzy dodamy ładowanie haseł z pliku oraz wyabstrahujemy część kodu odpowiedzialną za stan aplikacji przy użyciu klas. 

## Klasy Pierwszym etapem warsztatu jest zrozumienie klas. 

### Teoria 
* Najprostszym określeniem klasy jest stwierdzenie, że to przepis na obiekt. 
* Klasy zawierają pola oraz metody. 
* Pola przechowujące dane, podczas gdy metody są funkcjami związanymi z klasą. 
* Aby stworzyć obiekt na bazie klasy, należy wykorzystać operator `new`. 
* Stworzony obiekt nazywamy instancją klasy. 
* Klasy mogą po sobie dziedziczyć, tworząc relację typu rodzic-dziecko. 
* Klasa może dziedziczyć tylko po jednej klasie. 
* Klasa dziecka ma dostęp do pól i metod klasy rodzica. 
* Każda klasa posiada konstruktor. 
* Jest to specjalna metoda klasy, która jest wywoływana podczas tworzenie instancji klasy. 
* Jeśli klasa nie definiuje konstruktora, użyty będzie domyślny konstruktor. 
* Konstruktor może przyjmować argumenty, które można wykorzystać do ustawienia stanu inicjalnego instancji. 
* Jeśli klasa dziedziczy po innej klasie, musi wewnątrz konstruktora zawołać specjalną funkcję `super` z argumentami, które są wymagane do stworzenia instancji klasy nadrzędnej. 
* Klasy mogą posiadać metody i pola statyczne — dostępne bez tworzenia instancji klasy. 

### Zadania 
* Zadanie polega na stworzeniu klasy, która będzie opisywała zachowanie obiektu przechowującego dane. 
* Taka abstrakcja często jest nazywana jako `Model`. 
* Dodatkowo należy stworzyć model dziedziczący, który będzie reprezentował stan aplikacji. 

#### Zaimplementować klasę `Model`, która ma możliwość przechowywania danych. 
* Klasa powinna udostępniać interfejs umożliwiający dostęp do zapisu i odczytu wyłącznie przez metody instancji klasy. 
* Metoda `set` do ustawiania wartości pola. * Metoda `get` zwracająca wartość danego pola.
 
#### Dodać do klasy `Model` możliwość sprawdzania, czy pole istnieje 
* Metoda `has` zwracająca `true/false` w zależności od tego, czy pole istnieje w instancji klasy. 

#### Rzucić wyjątek podczas pobierania nieistniejącego pola 
* Metoda `get` powinna sprawdzić, czy pole istnieje i tylko wtedy zwrócić wartość. 
* Jeśli pole nie istnieje, metoda powinna rzucić wyjątkiem z odpowiednią treścią. 

#### Umożliwić łączenie wywołać metody `set` 
* Metoda `set` powinna mieć możliwość wielokrotnego wywołania, jedno po drugim w łańcuchu wywołań (`a.set(...).set(...);`) 

#### Umożliwić łączenie wywołać metody `set` i `get` 
* Metoda `set` oraz `get` powinna mieć możliwość wielokrotnego wywołania, jedno po drugim w łańcuchu wywołań (`a.set(...).get(...);`) 
* Wywołanie `get` powinno być możliwe tylko dla ostatniego wywołania w łańcuchu. 

#### Zaimplementować klasę dziedziczącą `State` po klasie `Model` posiadający jedno pole z inicjalną wartością 
* Instancja klasy po stworzeniu powinna posiadać ustawiony stan inicjalny. 

#### Stworzyć metodę statyczną `createInitialState`, która będzie dostępna bez instancji klasy 
* Klasa musi posiadać statyczną metodę `createInitialState`. 

## Promise, fetch api i praktyczne zastosowanie klas 

### Teoria 
* Promise jest to interfejs reprezentujący wynik działania, które ma nieokreślony czas trwania np. pobranie pliku. 
* Innymi słowy jest to obietnica wywołanej funkcji, że jej działanie skończy się w przyszłości i możemy czekać na wynik. 
* Aby czekać na wynik, należy zarejestrować zdarzenie, które ma się wydarzyć, kiedy funkcja skończy pracę i będzie gotowa zwrócić wynik. 
* W przypadku niepowodzenia (np. timeout sieci), mamy możliwość obsługi takiej sytuacji, rejestrując odpowiednio zdarzenie. 
* Do zarejestrowania zdarzenia wykorzystać metodę `then`, zwracaną po utworzeniu nowego obiektu typu `Promise` 
```javascript 
function functionReturningPromise() {
  return new Promise(((resolve, reject) => { condition ? resolve({ data: {} }) : reject('error') }));
}

function success(response) {}
function failure(error) {}

functionReturningPromise().then(success, failure); 
``` 
* Od ES6 w przeglądarki jest wbudowana funkcja `fetch` służąca do pobierania zasób z sieci. 
* Wywołanie `fetch` zwraca obiekt `Promise` 
* Błąd serwera nie jest błędem pobierania — nie jest to wyjątek, więc zostanie wywołany callback `success` - pierwszy argument metody `then`. 
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
* Zaimplementować metodę `fetchJSON`, która będzie zwracała dane w postaci `JSON`. 

#### Obsługa błędu serwera 
* Błędy komunikacji HTTP 4xx i 5xx nie są traktowane jako wyjątki. 
* Zaimplementować funkcję `fetchWithServerError`, która w przypadku wykrycia błędu serwera rzuci wyjątek. 

#### Abstrakcja klasy zasobu 
* Zaimplementować klasę `Resource`, abstrahująca pobieranie zasobu z serwera. 
* Na początek klasa powinna posiadać funkcjonalność oznaczenia, że zasób jest ładowany. 
* Należy w klasie zdefiniować pole `loading` i odpowiednią metodą do sprawdzania jej wartości. 
* Należy dodać także metodą, która ustawia flagę ładowania na `true` w momencie rozpoczęcia ładowania. 

#### Zakończenie pobierania danych 
* Dodać nowe pole w klasie `data` przechowujące dane. 
* Dodać metodą, która odpowiednio zmieni stan flagi ładowania i zaktualizuje dane. 

#### Stan błędu zasobu 
* Dodać możliwość obsługi błędu przez zasób. 

#### Zasób nie traci danych po ponownym przeładowaniu z błędem 
* Po inicjalne załadowanych danych, zasób może zostać przeładowany. Podczas przeładowania może nastąpić błąd. 
* Po obsłudze błędu, dane z zasobu powinny być dalej dostępne. 

#### EXTRA z gwiazdką :) Ponawianie nieudanych wywołań 
* Zaimplementować `retry`, które będzie ponawiać wywołanie funkcji przekazanej jako argument `n` razy. 

## Domknięcia 
* Domknięcie wyznacza zasięg zmiennej dostępnej w kodzie. 
* Domknięcie posiada pamięć, w której przechowuje zmienne i funkcje. 
* Kiedy domknięcie nie jest już potrzebne garbage, collector zwalnia pamięć. 
* Najprostszym domknięcie nawiasów klamrowych (od e6). 
```javascript
{
  // to jest najprostsze domknięcie 
  const a = true; // dostęp do tej zmiennej będzie możliwy tylko w tym domknięciu
}
``` 
* Najczęściej wykorzystywanym jest domknięcie tworzone przez wywołanie funkcji 
```javascript
() => { // domknięcie stworzone przez funkcję 
  const b = 'test'; // ta zmienna będzie dostępna tylko wewnątrz funkcji, nigdy poza 
} 
``` 

### Zadanie 

#### Wykorzystując mechanizm domknięć, odtwórz funkcjonalność wcześniej zaimplementowanej klasy `Resource` 
* Zaimplementować funkcję `ResourceFactory`

## Wykorzystanie zdobytej wiedzy w praktyce 
* Sklonuj lub pobierz repozytorium: https://github.com/G3F4/javascript-basics-workshop 

### Zadania 

#### Pobranie haseł z pliku JSON 
* Stwórz plik `JSON`, w którym będę znajdować się hasła do odgadnięcia w grze. 
* Wykorzystaj wcześniej stworzoną funkcję do pobierania danych. 

### Stan ładowania 
* Wykorzystaj klasę reprezentującą zasób w połączeniu z funkcją do pobierania danych, aby obsłużyć stan ładowania. 
* Aplikacja podczas ładowania powinna prezentować napis `Ładowanie haseł, proszę czekać`. 

### Wykorzystanie klasy reprezentującej stan aplikacji 
* Wykorzystaj klasę reprezentującą stan aplikacji, wszędzie tam, gdzie aktualnie aplikacja korzysta ze zwykłego obiektu i funkcji pomocniczej aktualizującej ten obiekt.