import { Component } from '@angular/core';
import { EmployeesComponent } from "../employees/employees.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [EmployeesComponent]
})
export class HomeComponent {

}
