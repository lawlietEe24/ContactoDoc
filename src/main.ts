import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Importa tus rutas definidas en app.routes.ts

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Configura las rutas para tu aplicación
  ]
})
.catch(err => console.error(err));
