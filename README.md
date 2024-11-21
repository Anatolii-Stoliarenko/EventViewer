<!-- prettier-ignore-start -->
# EventViewer

[**See the application in action here**](https://event-viewer-omega.vercel.app/)

**Polska wersja**: Zobacz [README.pl.md](README.pl.md)

## Project Description

EventViewer is a web application built with Angular, designed to display data from IoT devices in the form of an event list. Each event can be viewed in more detail using a dialog display function. The project utilizes Angular Material to create responsive and visually appealing user interfaces.

## Features

- **Event List**: Displays data in a table with numbering, pagination, and filtering capabilities.
- **Event Details**: Shows detailed data for each event in a dialog.
- **Pagination**: Built-in pagination support for large data sets using `MatPaginator`.
- **Dynamic Data Handling**: Data is fetched using `EventService`.

---

## Technologies and Libraries

- **Angular** - Framework for building web applications.
- **Angular Material** - Material Design components for better UI/UX.
- **RxJS** - Asynchronous processing.
- **TypeScript** - A superset of JavaScript enabling typing and more.
- **SCSS** - CSS preprocessor for better style management.

---

## Project Structure

```plaintext
src/
├── app/
│   ├── components/
│   │   ├── event-list/
│   │   │   ├── event-detail-dialog/
│   │   │   │   ├── event-detail-dialog.component.html   // HTML for event detail dialog
│   │   │   │   ├── event-detail-dialog.component.scss   // Styles for event detail dialog
│   │   │   │   └── event-detail-dialog.component.ts     // Logic for event detail dialog
│   │   │   ├── event-list.component.html                // HTML for event list component
│   │   │   ├── event-list.component.scss                // Styles for event list component
│   │   │   └── event-list.component.ts                  // Logic for event list component
│   │   ├── footer/
│   │   │   ├── footer.component.html                    // HTML for footer
│   │   │   ├── footer.component.scss                    // Styles for footer
│   │   │   └── footer.component.ts                      // Logic for footer
│   │   ├── header/
│   │   │   ├── header.component.html                    // HTML for header
│   │   │   ├── header.component.scss                    // Styles for header
│   │   │   └── header.component.ts                      // Logic for header
│   ├── models/
│   │   └── event.model.ts                               // Event data model
│   ├── services/
│   │   └── event.service.ts                             // Service for fetching events
│   ├── app.component.html                               // Main app HTML
│   ├── app.component.scss                               // Main app styles
│   ├── app.component.ts                                 // Main app component logic
│   ├── index.html                                       // Main HTML entry point
│   ├── main.ts                                          // Main TypeScript entry point
│   └── styles.scss                                      // Global styles
└── public/                                              // Assets (e.g., images, fonts)
```

## Installation and Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Anatolii-Stoliarenko/EventViewer.git
   cd EventViewer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the application**

   ```bash
   ng serve
   ```
The application will be available at http://localhost:4200/.

---

## How It Works

1. Upon starting the application, a table displaying the list of events is shown.
2. The user can click the Details button to display a dialog with additional information about the selected event.
3. Built-in pagination allows navigation between pages of results.

---

## Future Development

- **Data Validation**: Possibility to add validation and filtering of incomplete data.
- **Shared Components**: Option to refactor code to separate components into a shared folder.
- **Unit Testing**: Adding tests for components and services.

---

## License

The LICENSE file contains information regarding the project's license.

---

## Contact

If you have any questions about the project or its setup, contact via:

1. **Email**: [anatolii.stoliarenko@gmail.com](mailto:anatolii.stoliarenko@gmail.com)
2. **Website**: [https://anatolii-stoliarenko.webflow.io/](https://anatolii-stoliarenko.webflow.io/)


<!-- prettier-ignore-end -->
