import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { DASHBOARD_CONTEXT } from './dashboard-context';

const DASHBOARD_CONTEXT_VALUE = 'Provided by Dashboard injector';

export interface WidgetData {
  id: number;
  name: string;
  value: string;
  note: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, WidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [{ provide: DASHBOARD_CONTEXT, useValue: DASHBOARD_CONTEXT_VALUE }]
})
export class DashboardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) widgets: ReadonlyArray<WidgetData> = [];

  protected readonly dashboardContextValue = DASHBOARD_CONTEXT_VALUE;

  trackById = (_: number, widget: WidgetData) => widget.id;
}
