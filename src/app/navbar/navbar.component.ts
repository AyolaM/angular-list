import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Timesheets', icon: 'pi pi-clock' },
          { label: 'Log Hours', icon: 'pi pi-hourglass' },
          { label: 'Pay Stubs', icon: 'pi pi-receipt' },
          { label: 'Request Time Off', icon: 'pi pi-calendar-times' },
          { label: 'Approve Time Off', icon: 'pi pi-calendar-clock' }
      ]
  }
}