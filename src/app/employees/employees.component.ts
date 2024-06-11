import { Component, OnInit } from '@angular/core';
import { Employee } from '../EmployeeInterface';
import {EMPLOYEES} from '../employees'

import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent{
employees : Employee[] = EMPLOYEES;

}

