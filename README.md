<!-- prettier-ignore-start -->
# EventViewer

## Opis projektu

EventViewer to aplikacja webowa stworzona w Angular, której celem jest wyświetlanie danych z urządzeń IoT w formie listy zdarzeń. Każde zdarzenie można przeglądać bardziej szczegółowo dzięki funkcji wyświetlania szczegółów w dialogu. Projekt wykorzystuje Angular Material do tworzenia responsywnych i estetycznych interfejsów użytkownika.

## Funkcjonalności

- **Lista zdarzeń**: Wyświetlanie danych w tabeli z numeracją, paginacją i możliwością filtrowania.
- **Szczegóły zdarzenia**: Wyświetlanie szczegółowych danych każdego zdarzenia w dialogu.
- **Paginacja**: Wbudowana obsługa paginacji dla dużej ilości danych z `MatPaginator`.
- **Obsługa dynamicznych danych**: Dane pobierane za pomocą `EventService`.

---

## Technologie i biblioteki

- **Angular** - Framework do budowy aplikacji webowych.
- **Angular Material** - Komponenty Material Design dla lepszego UI/UX.
- **RxJS** - Przetwarzanie asynchroniczne.
- **TypeScript** - Język programowania będący nadzbiorem JavaScript, umożliwiający typowanie i wiele więcej.
- **SCSS** - Preprocesor CSS dla lepszego zarządzania stylami.

---

## Struktura projektu

```plaintext
src/
├── app/
│   ├── components/
│   │   └── event-list/
│   │       ├── event-detail-dialog/
│   │       │   ├── event-detail-dialog.component.html  // HTML for event detail dialog
│   │       │   ├── event-detail-dialog.component.scss  // Styles for event detail dialog
│   │       │   └── event-detail-dialog.component.ts    // Logic for event detail dialog
│   │       ├── event-list.component.html               // HTML for event list component
│   │       ├── event-list.component.scss               // Styles for event list component
│   │       └── event-list.component.ts                 // Logic for event list component
│   ├── models/
│   │   └── event.model.ts                              // Event data model
│   ├── services/
│   │   └── event.service.ts                            // Service for fetching events
│   ├── app.component.html                              // Main app HTML
│   ├── app.component.ts                                // Main app component logic
│   ├── index.html                                      // Main HTML entry point
│   ├── main.ts                                         // Main TypeScript entry point
│   └── styles.scss                                     // Global styles
└── public/                                             // Assets (e.g., images, fonts)
```

## Instalacja i uruchomienie

---

1. **Klonowanie repozytorium**

   ```bash
   git clone https://github.com/Anatolii-Stoliarenko/EventViewer.git
   cd EventViewer
   ```

---

2. **Instalacja zależności**
   ```bash
   npm install
   ```
---

3. **Uruchomienie aplikacji**

   ```bash
   ng serve
   ```
Aplikacja będzie dostępna pod adresem http://localhost:4200/.

---

## Sposób działania

1. Po uruchomieniu aplikacji wyświetlana jest tabela z listą zdarzeń.
2. Użytkownik może kliknąć przycisk Szczegóły, aby wyświetlić dialog z dodatkowymi informacjami o wybranym zdarzeniu.
3. Wbudowana paginacja umożliwia przechodzenie pomiędzy stronami wyników.

---

## Dalszy rozwój

. Walidacje danych: Możliwość dodania walidacji i filtrowania niekompletnych danych.
. Współdzielone komponenty: Możliwość refaktoryzacji kodu w celu wydzielenia komponentów do folderu shared.
. Testy jednostkowe: Dodanie testów dla komponentów i usług.

---

## Licencja

Plik LICENSE zawiera informacje dotyczące licencji projektu.

---

## Kontakt

Jeśli masz jakiekolwiek pytania dotyczące projektu lub jego konfiguracji, skontaktuj się poprzez:

1. **Email**: [anatolii.stoliarenko@gmail.com](mailto:anatolii.stoliarenko@gmail.com)
2. **Strona**: [https://anatolii-stoliarenko.webflow.io/](https://anatolii-stoliarenko.webflow.io/)


<!-- prettier-ignore-end -->
