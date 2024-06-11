import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees/employees.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // registers all the stand alone components you wanna use in this component
  imports: [RouterOutlet, HeaderComponent,NavbarComponent, FooterComponent, ReactiveFormsModule,EmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Timecard_Tracker';
}
