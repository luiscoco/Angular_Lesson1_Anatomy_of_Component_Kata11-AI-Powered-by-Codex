import { Component, Input, inject } from '@angular/core';
import { DASHBOARD_CONTEXT } from '../dashboard/dashboard-context';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {
  @Input({ required: true }) name = '';
  @Input({ required: true }) value = '';
  @Input({ required: true }) note = '';

  protected readonly dashboardContext = inject(DASHBOARD_CONTEXT);
}
